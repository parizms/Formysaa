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
