/*const urlParams = new URLSearchParams(window.location.search);
const influencerId = urlParams.get('influencer_snip');

document.getElementById('profile-view').addEventListener('submit', async (e) => {
  e.preventDefault();

  await supabase.from('bookings').insert({
    influencer_id: influencerId,
    name: document.getElementById('name').value,
    category: document.getElementById('category').value,
    bio: document.getElementById('bio').value
  });

  alert("Booking submitted!");
});iii
*/


  const listContainer = document.getElementById("influencer-list");
  const detailContainer = document.getElementById("profile-detail");
  const contentDiv = document.getElementById("profile-content");

  async function loadInfluencers() {
    const { data: influencers, error } = await supabase
      .from("influencers")
      .select("*");

    if (error) {
      console.error("Error loading influencers:", error);
      return;
    }

    influencers.forEach(influencer => {
      const card = document.createElement("div");
      card.className = "influencer-card";
      card.innerHTML = `
        <div class="profile-pic"></div>
        <h3>${influencer.display_name}</h3>
        <p><strong>${influencer.category}</strong></p>
        <p>${influencer.bio}</p>
      `;

      card.addEventListener("click", () => showDetail(influencer));
      listContainer.appendChild(card);
    });
  }

  function showDetail(influencer) {
    listContainer.style.display = "none";
    detailContainer.style.display = "block";

    contentDiv.innerHTML = `
      <div class="profile-pic-large"></div>
      <h2>${influencer.display_name}</h2>
      <p><strong>${influencer.category}</strong></p>
      <p>${influencer.bio}</p>
      <p><a href="https://${influencer.social_link}" target="_blank">@${influencer.social_link}</a></p>
      <button onclick="bookInfluencer('${influencer.id}', '${influencer.display_name}')">Book Now</button>
    `;
  }

  window.goBack = function () {
    detailContainer.style.display = "none";
    listContainer.style.display = "block";
  };

  window.bookInfluencer = async function (influencer_id, name) {
    const { data: sessionData, error: userError } = await supabase.auth.getSession();
    const user_id = sessionData?.session?.user?.id;

    if (!user_id) {
      alert("You must be logged in to book.");
      return;
    }

    const { error } = await supabase
      .from("bookings")
      .insert([{ user_id, influencer_id }]);

    if (error) {
      alert("Failed to book.");
    } else {
      alert(`Booked ${name} successfully!`);
    }
  };

  loadInfluencers();

