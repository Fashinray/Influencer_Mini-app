/*const container = document.getElementById('Influencer_snip'); // Match this to your HTML

async function fetchInfluencers() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('is_influencer', true);

  if (error) {
    console.error('Error fetching influencers:', error);
    return;
  }

  container.innerHTML = ''; // Clear previous content

  data.forEach((influencer) => {
    const card = document.createElement('div');
    card.classList.add('influencer-card');

    card.innerHTML = `
      <div class="profile">
        <img src="default-avatar.png" alt="Profile" />
        <div>
          <strong>${influencer.display_name}</strong><br />
          <small><b>${influencer.category}</b></small>
        </div>
      </div>
      <p>${influencer.bio}</p>
    `;

    container.appendChild(card);
  });
}

fetchInfluencers();

*/
async function loadInfluencers() {
  const container = document.getElementById("influencer_snip");
  const { data: influencers, error } = await supabase.from("profiles").select("*");

  if (error) return console.error("Error loading influencers", error);

  container.innerHTML = ""; // Clear old data

  influencers.forEach((influencer) => {
    const card = document.createElement("div");
    card.className = "influencer-card";
    card.innerHTML = `
      <div class="profile-pic"></div>
      <h3>${influencer.display_name}</h3>
      <p><strong>${influencer.category}</strong></p>
      <p>${influencer.bio}</p>
      <a href="https://${influencer.social_link}" target="_blank">@${influencer.social_link}</a>
    `;
    container.appendChild(card);
  });
}

if (window.location.pathname.includes("influencers.html")) {
  loadInfluencers();
}