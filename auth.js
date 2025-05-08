/*
// SIGNUP
async function handleSignUp(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return alert(error.message);
    alert('Signed up!');
    window.location.href = 'edit-p.html'; // next step
  }
  
  // LOGIN
  async function handleLogin(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);
    window.location.href = 'influencers.html';
  }
    */

  // auth.js

  document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
  
    // Sign Up
    if (signupForm) {
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const email = signupForm.email.value;
        const password = signupForm.password.value;
  
        const { data, error } = await supabase.auth.signUp({
          email,
          password
        });
  
        if (error) {
          alert('Sign up failed: ' + error.message);
          return;
        }
  
        // Success: Go to edit page
        window.location.href = 'editp.html';
      });
    }
  
    // Login
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        const isInfluencer = document.getElementById('isInfluencer').checked;
  
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
  
        if (error) {
          alert('Login failed: ' + error.message);
          return;
        }

        // Save user ID for later use
        localStorage.setItem("user_id", data.user.id);
        alert("Logged in!");
  
        // Redirect logic
        if (isInfluencer) {
          window.location.href = 'editp.html';
        } else {
          window.location.href = 'influencers.html';
        }
      });
    }
  });
  
  