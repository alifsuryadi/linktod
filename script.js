const linkButtons = $('.profile-effect');

// Fungsi untuk menghentikan animasi keyframe pada link button
function stopLinkButtonAnimation() {
  linkButtons.each(function() {
    $(this).css('animation', 'none');
  });
}

// Setelah web dibuka selama 3 detik, panggil fungsi untuk menghentikan animasi pada link button
setTimeout(stopLinkButtonAnimation, 5000);

const buttons = $(".btn");
let stopAnimation = false;

function shakeButton() {
  if (stopAnimation) return; // Hentikan shakeButton() jika stopAnimation bernilai true

  const randomNumber = Math.floor(Math.random() * buttons.length);
  const randomButton = buttons.eq(randomNumber);

  randomButton.addClass("shake");

  function stopShake() {
    stopAnimation = true;
    randomButton.removeClass("shake");
    randomButton.off("click", stopShake); // Hapus event listener setelah klik
    randomButton.off("mouseenter", stopShake); // Hapus event listener saat mouse masuk
  }

  // Tambahkan event listener untuk menghentikan shakeButton() saat tombol diklik atau saat mouse masuk
  randomButton.on("click", stopShake);
  randomButton.on("mouseenter", stopShake);

  setTimeout(function() {
    randomButton.removeClass("shake");
    if (!stopAnimation) {
      setTimeout(shakeButton, 2000); // Panggil kembali shakeButton() setelah 1 detik
    }
  }, 2000);
}

shakeButton();
