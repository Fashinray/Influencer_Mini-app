const urlParams = new URLSearchParams(window.location.search);
const influencerId = urlParams.get('influencer');

document.getElementById('profile-view').addEventListener('submit', async (e) => {
  e.preventDefault();

  await supabase.from('bookings').insert({
    influencer_id: influencerId,
    name: document.getElementById('name').value,
    category: document.getElementById('category').value,
    bio: document.getElementById('bio').value
  });

  alert("Booking submitted!");
});