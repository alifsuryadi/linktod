// Menangkap semua tombol tautan
const linkButtons = document.querySelectorAll('.profile-effect');

// Fungsi untuk menghentikan animasi keyframe pada link button
function stopLinkButtonAnimation() {
  linkButtons.forEach((button) => {
    button.style.animation = 'none';
  });
}

// Setelah web dibuka selama 3 detik, panggil fungsi untuk menghentikan animasi pada link button
setTimeout(stopLinkButtonAnimation, 5000);

