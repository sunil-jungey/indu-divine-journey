// ======================================
// SUNIL & INDU — DIVINE JOURNEY
// ======================================


// ---------- CHANGE SCREEN ----------

function showScreen(screenId) {

  const screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


// ---------- INDU'S MOOD ----------

function answerMood(mood) {

  const reply = document.getElementById("moodReply");

  if (mood === "amazing") {

    reply.innerHTML =
      "That's what I wanted to hear! 🥰✨<br>Let's make that smile even bigger.";

  }

  else if (mood === "okay") {

    reply.innerHTML =
      "Just okay? 😊<br>Then hopefully this little surprise makes your day a little brighter. ✨";

  }

  else if (mood === "better") {

    reply.innerHTML =
      "Then this arrived at the right time. 🌸<br>I hope this little journey brings you a smile. 😊";

  }

  showScreen("surprise");
}


// ---------- ENDING ----------

function showEnding() {

  const video = document.getElementById("journeyVideo");

  if (video) {
    video.pause();
  }

  showScreen("ending");

  createCelebration();
}


// ---------- GOLDEN PARTICLES ----------

function createParticle() {

  const container =
    document.getElementById("particles");

  if (!container) return;

  const particle =
    document.createElement("span");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * 100 + "vw";

  particle.style.animationDuration =
    (6 + Math.random() * 8) + "s";

  particle.style.animationDelay =
    Math.random() * 3 + "s";

  const size =
    3 + Math.random() * 6;

  particle.style.width =
    size + "px";

  particle.style.height =
    size + "px";

  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 17000);
}


// Keep creating divine lights

setInterval(createParticle, 350);


// Create some immediately

for (let i = 0; i < 20; i++) {
  createParticle();
}


// ---------- FINAL CELEBRATION ----------

function createCelebration() {

  const emojis = [
    "🌸",
    "✨",
    "🪷",
    "🌼",
    "💛",
    "🙏",
    "🕉️"
  ];

  for (let i = 0; i < 35; i++) {

    setTimeout(() => {

      const item =
        document.createElement("div");

      item.innerText =
        emojis[
          Math.floor(
            Math.random() * emojis.length
          )
        ];

      item.style.position = "fixed";

      item.style.left =
        Math.random() * 100 + "vw";

      item.style.top = "-50px";

      item.style.fontSize =
        (18 + Math.random() * 25) + "px";

      item.style.zIndex = "20";

      item.style.pointerEvents = "none";

      item.style.transition =
        "transform 5s linear, opacity 5s";

      document.body.appendChild(item);

      setTimeout(() => {

        item.style.transform =
          `translateY(110vh)
           rotate(${Math.random() * 500}deg)`;

        item.style.opacity = "0";

      }, 100);

      setTimeout(() => {
        item.remove();
      }, 5500);

    }, i * 120);

  }
}


// ---------- VIDEO FINISHES AUTOMATICALLY ----------

const journeyVideo =
  document.getElementById("journeyVideo");

if (journeyVideo) {

  journeyVideo.addEventListener(
    "ended",
    function () {

      setTimeout(() => {
        showEnding();
      }, 700);

    }
  );

}
// ---------- BOARD THE DIVINE BUS ----------

function beginDivineJourney() {

  createCelebration();

  setTimeout(() => {
    showScreen("videoPage");
  }, 1800);

}