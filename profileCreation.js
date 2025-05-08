/*// Save profile form data to Supabase
const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const display_name = document.getElementById('displayName').value.trim();
  const bio = document.getElementById('bio').value.trim();
  const category = document.getElementById('category').value;
  const social_link = document.querySelector('#sLink a').href.trim();

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    alert("Couldn't fetch user");
    return;
  }

  const user_id = userData.user.id;

  // Insert or upsert profile
  const { error } = await supabase.from('profiles').upsert({
    user_id,
    display_name,
    bio,
    category,
    social_link,
    is_influencer: true,
    created_at: new Date().toISOString()
  });

  if (error) {
    alert('Failed to save profile: ' + error.message);
    return;
  }

  // Redirect to influencer snippet page
  window.location.href = 'influencers.html';
});
*/

document.getElementById("save-profile").addEventListener("click", async () => {
  const user_id = localStorage.getItem("user_id");

  const display_name = document.getElementById("displayName").value;
  const bio = document.getElementById("Bio").value;
  const category = document.getElementById("category").value;
  const social_link = document.querySelector('#sLink a').href.trim();

  const { data, error } = await supabase.from("profiles").upsert([
    {
      user_id,
      display_name,
      bio,
      category,
      social_link,
    },
  ]);

  if (error) return alert("Failed to save profile");
  alert("Profile saved!");

  // Redirect to list or refresh snippets
  window.location.href = "influencers.html";
});





