// Ambil elemen judul "Profile" dan list
const profileTitle = document.querySelector('.profile-title');
const nameList = document.querySelector('.Name');

// Event klik untuk toggle list dengan animasi
profileTitle.addEventListener('click', () => {
  nameList.classList.toggle('show');
});
