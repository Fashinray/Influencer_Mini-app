/* async function loadProfile() {
    const params = new URLSearchParams(window.location.search);
    const handle = params.get('handle');
  
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('handle', handle)
      .single();
  
    if (error) return alert('Profile not found');
    
    document.getElementById('name').textContent = data.full_name;
    document.getElementById('category').textContent = data.category;
    document.getElementById('bio').textContent = data.bio;
    document.getElementById('handle').textContent = '@' + data.handle;
  }
 */

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".p-card");
    const profileView = document.getElementById("profile-view");
  
    const nameEl = document.getElementById("profile-name");
    const categoryEl = document.getElementById("profile-category");
    const bioEl = document.getElementById("profile-bio");
    const linkEl = document.getElementById("profile-link");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const name = card.dataset.name;
        const category = card.dataset.category;
        const bio = card.dataset.bio;
        const link = card.dataset.link;
  
        // Fill the profile display
        nameEl.textContent = name;
        categoryEl.textContent = category;
        bioEl.textContent = bio;
        linkEl.textContent = `@${link}`;
        linkEl.href = `https://instagram.com/${link}`;
  
        // Show profile view
        profileView.style.display = "block";
      });
    });
  });
  
  function closeProfile() {
    document.getElementById("profile-view").style.display = "none";
  }
  
  