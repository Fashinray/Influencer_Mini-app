// Save profile info
async function saveProfile({ name, category, bio, social }) {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return alert('Not logged in');
  
    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      full_name: name,
      category,
      bio,
      handle: name.toLowerCase().replace(/\s+/g, ''),
      social_link: social,
    });
  
    if (error) return alert(error.message);
    alert('Profile saved!');
    window.location.href = 'dashboard.html';
  }
  