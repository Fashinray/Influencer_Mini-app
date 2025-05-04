async function loadInfluencers() {
    const { data, error } = await supabase.from('profiles').select('*');
    const container = document.getElementById('Influencer_snip');
    container.innerHTML = '';
  
    data.forEach((user) => {
      const div = document.createElement('div');
      div.className = 'profile-card';
      div.innerHTML = `
        <h3>${user.full_name}</h3>
        <p class="category">${user.category}</p>
        <p>${user.bio}</p>
        <a href="profile.html?handle=${user.handle}">@${user.handle}</a>
      `;
      container.appendChild(div);
    });
  }
  