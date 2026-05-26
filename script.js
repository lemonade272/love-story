document.addEventListener("DOMContentLoaded", function () {

  const texts = [
    "Sylvia ❤️",
    "do you wanna be my love story? 🥰",
  ];

  let textIndex = 0;
  let charIndex = 0;
  const element = document.getElementById("romanticText");

  function typeText() {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        element.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 80);
      } else {
        element.innerHTML += "<br>"; // pindah baris
        textIndex++;
        charIndex = 0;
        setTimeout(typeText, 500);
      }
    }
  }

  typeText();


  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".heart-rain").appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
  }

  setInterval(createHeart, 300);


  const noBtn = document.getElementById("noBtn");
  let sadClicks = 0;

  const sadTexts = [
    "eh tunggu dulu 😆",
    "Nope 👀",
    "bentar aku siapin hati 💗",
    "jangan buru-buru dong 😜",
    "aku pikir dulu 🤭"
  ];

  noBtn.addEventListener("click", function (e) {
    e.target.style.position = "absolute";
    e.target.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    e.target.style.left = Math.floor(Math.random() * 90 + 5) + "%";

    sadClicks++;
    e.target.textContent = sadTexts[sadClicks % sadTexts.length];
  });

  document.getElementById("yesBtn").addEventListener("click", function () {
    window.location.href = "index2.html";
  });

});