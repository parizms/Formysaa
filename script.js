function showLoveMessage() {
   const message = document.getElementById("loveMessage");
   message.classList.remove("hidden");

   const button = document.getElementById("showMessage");
   button.style.display = "none";

   const music = document.getElementById("backgroundMusic");
   music.play();
}
function showLoveMessage() {
   const message = document.getElementById("loveMessage");
   message.classList.remove("hidden"); // Menampilkan elemen

   const paragraphs = message.querySelectorAll("p");
   paragraphs.forEach((paragraph, index) => {
       paragraph.style.animationDelay = `${index * 0.5}s`; // Tambahkan jeda antar paragraf
   });

   const button = document.getElementById("showMessage");
   button.style.display = "none";

   // Memutar musik
   const music = document.getElementById("backgroundMusic");
   music.play().catch(error => {
       console.error("Failed to play music:", error);
   });
}

function createHeart() {
   const heartContainer = document.querySelector('.heart-container');
   const heart = document.createElement('div');
   heart.classList.add('heart');

   // Set posisi horizontal acak
   heart.style.left = `${Math.random() * 100}%`;

   // Set ukuran hati acak
   const size = Math.random() * 10 + 10; // Antara 10px dan 20px
   heart.style.width = `${size}px`;
   heart.style.height = `${size}px`;

   // Tambahkan hati ke container
   heartContainer.appendChild(heart);

   // Hapus hati setelah animasi selesai
   setTimeout(() => {
       heart.remove();
   }, 5000);
}


function createHeart() {
   const heartContainer = document.querySelector('.heart-container');
   const heart = document.createElement('div');
   heart.classList.add('heart');

   // Set posisi horizontal acak
   heart.style.left = `${Math.random() * 100}%`;

   // Set ukuran hati acak
   const size = Math.random() * 10 + 10; // Antara 10px dan 20px
   heart.style.width = `${size}px`;
   heart.style.height = `${size}px`;

   // Tambahkan hati ke container
   heartContainer.appendChild(heart);

   // Hapus hati setelah animasi selesai
   setTimeout(() => {
       heart.remove();
   }, 5000);
}

let heartAnimationInterval;

function startHeartAnimation() {
   heartAnimationInterval = setInterval(createHeart, 500); // Setiap 0.5 detik
}

function stopHeartAnimation() {
   clearInterval(heartAnimationInterval);
}

function showLoveMessage() {
   const message = document.getElementById("loveMessage");
   message.classList.remove("hidden"); // Menampilkan elemen

   const paragraphs = message.querySelectorAll("p");
   paragraphs.forEach((paragraph, index) => {
       paragraph.style.animationDelay = `${index * 0.5}s`; // Tambahkan jeda antar paragraf
   });

   const button = document.getElementById("showMessage");
   button.style.display = "none";

   // Memutar musik
   const music = document.getElementById("backgroundMusic");
   music.play().catch(error => {
       console.error("Failed to play music:", error);
   });

   // Mulai animasi hati
   startHeartAnimation();
}

