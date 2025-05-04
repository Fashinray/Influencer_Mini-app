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
  