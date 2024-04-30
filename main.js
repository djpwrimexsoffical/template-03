document.addEventListener("DOMContentLoaded", function() {
    // Hitung waktu saat ini dan waktu target (misalnya, 60 detik dari sekarang)
    const now = new Date().getTime();
    const targetTime = now + (60 * 1000); // 60 detik dari sekarang
  
    // Perbarui teks tombol setiap detik
    setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;
  
      // Hitung bulan, hari, dan detik dari perbedaan waktu
      const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Update teks pada tombol
      document.getElementById("monthsBtn").innerText = months + " Months";
      document.getElementById("daysBtn").innerText = days + " Days";
      document.getElementById("secondsBtn").innerText = seconds + " Seconds";
    }
  });
  
  let audio = document.getElementById("myAudio");
  let playButton = document.querySelector(".play-button");
  
  playButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playButton.classList.add("playing");
    } else {
      audio.pause();
      playButton.classList.remove("playing");
    }
  });
  