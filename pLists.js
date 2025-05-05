const container = document.getElementById('Influencer_snip'); // Match this to your HTML

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
