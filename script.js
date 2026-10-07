// ==========================================
// SCREEN NAVIGATION
// ==========================================

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}


// ==========================================
// MOOD PAGE
// ==========================================

function answerMood(mood) {
  const response = document.getElementById("moodResponse");

  const messages = {
    "Happy":
      "Good 😄 Keep that smile — it will be useful for what comes next.",

    "Okay":
      "Okay is allowed 🙂 Maybe this little surprise can make it better.",

    "Tired":
      "Then you deserve a relaxing little journey today. 💛",

    "Need a smile":
      "Perfect timing 😄 I may have prepared exactly that."
  };

  response.textContent =
    messages[mood] ||
    "Whatever the mood, you are welcome here. 💛";

  setTimeout(() => {
    showScreen("surprisePage");
  }, 1600);
}


// ==========================================
// PLAYFUL NO BUTTON
// ==========================================

function moveNoButton() {
  const button = document.getElementById("noButton");

  if (!button) return;

  const x = Math.floor(Math.random() * 100) - 50;
  const y = Math.floor(Math.random() * 80) - 40;

  button.style.transform =
    `translate(${x}px, ${y}px)`;

  setTimeout(() => {
    button.style.transform = "";
  }, 700);
}


// ==========================================
// PARTICLES
// ==========================================

function createParticles() {
  const container =
    document.getElementById("particles");

  if (!container) return;

  const symbols = [
    "✨",
    "🪷",
    "💛",
    "ॐ"
  ];

  for (let i = 0; i < 24; i++) {

    const particle =
      document.createElement("span");

    particle.className = "particle";

    particle.textContent =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.fontSize =
      (12 + Math.random() * 16) + "px";

    particle.style.animationDuration =
      (9 + Math.random() * 11) + "s";

    particle.style.animationDelay =
      (Math.random() * 10) + "s";

    container.appendChild(particle);
  }
}


// ==========================================
// CELEBRATION
// ==========================================

function createCelebration() {

  const emojis = [
    "🌸",
    "✨",
    "🪷",
    "💛",
    "🙏",
    "🌼"
  ];

  for (let i = 0; i < 28; i++) {

    const item =
      document.createElement("div");

    item.className = "celebration";

    item.textContent =
      emojis[
        Math.floor(
          Math.random() * emojis.length
        )
      ];

    item.style.left =
      Math.random() * 100 + "vw";

    item.style.fontSize =
      (18 + Math.random() * 20) + "px";

    item.style.animationDuration =
      (3.5 + Math.random() * 3) + "s";

    item.style.animationDelay =
      (Math.random() * 1.5) + "s";

    document.body.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, 7500);
  }
}


// ==========================================
// AUDIO
// ==========================================

const hinduMusic =
  document.getElementById("hinduMusic");

const templeBell =
  document.getElementById("templeBell");

if (hinduMusic) {
  hinduMusic.volume = 0.35;
}

if (templeBell) {
  templeBell.volume = 0.6;
}


// ==========================================
// BELL SOUND ON EVERY BUTTON
// ==========================================

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest("button");

    if (!button || !templeBell) return;

    templeBell.currentTime = 0;

    templeBell.play().catch(() => {
      // Some browsers may block sound
      // before the first user interaction.
    });
  }
);


// ==========================================
// BEGIN DIVINE JOURNEY
// ==========================================

function beginDivineJourney() {

  createCelebration();

  showScreen("videoPage");

  resetSlideshow();
}


// ==========================================
// DIVINE JOURNEY SLIDES
// ==========================================

const journeySlides = [

  {
    image: "slide1.jpg",
    place: "Kathmandu 🇳🇵",
    message:
      "And so our divine journey begins... 🚌✨"
  },

  {
    image: "slide2.jpg",
    place: "Pashupatinath 🕉️",
    message:
      "Seeking blessings at sacred Pashupatinath. 🙏"
  },

  {
    image: "slide3.jpg",
    place: "Swayambhunath 🐒",
    message:
      "Watching Kathmandu from the beautiful hilltop. ✨"
  },

  {
    image: "slide4.jpg",
    place: "Boudhanath 🪷",
    message:
      "Peace, prayers and beautiful smiles. 🤍"
  },

  {
    image: "slide5.jpg",
    place: "Kedarnath 🏔️",
    message:
      "Higher into the Himalayas we go... 🕉️"
  },

  {
    image: "slide6.jpg",
    place: "Badrinath 🙏",
    message:
      "Another beautiful stop on our divine journey."
  },

  {
    image: "slide7.jpg",
    place: "Ayodhya 🏹",
    message:
      "Jai Shri Ram. 🙏✨"
  },

  {
    image: "slide8.jpg",
    place: "Vrindavan 🦚",
    message:
      "Where Krishna's flute fills the journey with happiness. 💛"
  },

  {
    image: "slide9.jpg",
    place: "Mathura 🪈",
    message:
      "Smiles, blessings and another beautiful memory."
  },

  {
    image: "slide10.jpg",
    place: "Varanasi 🪔",
    message:
      "The Ganga glows beneath thousands of lights. ✨"
  },

  {
    image: "slide11.jpg",
    place: "Rameswaram 🌊",
    message:
      "From the Himalayas all the way to the sacred sea. 🙏"
  },

  {
    image: "slide12.jpg",
    place: "HEAVEN ✨",
    message:
      "Wait... I think we finally made it. 🥰🙏"
  }

];


// ==========================================
// SLIDESHOW VARIABLES
// ==========================================

let journeyIndex = 0;

let journeyTimer = null;

let slideshowRunning = false;


// ==========================================
// PRELOAD SLIDES
// ==========================================

function preloadJourneyImages() {

  journeySlides.forEach(slide => {

    const img = new Image();

    img.src = slide.image;

  });
}


// ==========================================
// START SLIDESHOW
// ==========================================

function startDivineSlideshow() {

  if (slideshowRunning) return;

  slideshowRunning = true;

  journeyIndex = 0;


  const startButton =
    document.getElementById(
      "startJourneyButton"
    );


  if (startButton) {

    startButton.style.display =
      "none";

  }


  if (hinduMusic) {

    hinduMusic.play().catch(() => {

      // iPhone may require
      // another user tap.

    });

  }


  updateJourneySlide(true);


  journeyTimer =
    setInterval(() => {


      journeyIndex++;


      if (
        journeyIndex >=
        journeySlides.length
      ) {

        finishJourney();

        return;

      }


      updateJourneySlide(false);


    }, 5000);

}


// ==========================================
// UPDATE SLIDE
// ==========================================

function updateJourneySlide(
  isFirstSlide = false
) {

  const image =
    document.getElementById(
      "journeyImage"
    );


  const place =
    document.getElementById(
      "journeyPlace"
    );


  const message =
    document.getElementById(
      "journeyMessage"
    );


  const counter =
    document.getElementById(
      "journeyCounter"
    );


  if (
    !image ||
    !place ||
    !message ||
    !counter
  ) {

    console.error(
      "Slideshow elements were not found."
    );

    return;

  }


  const slide =
    journeySlides[journeyIndex];


  // FIRST SLIDE

  if (isFirstSlide) {

    image.src =
      slide.image;


    place.textContent =
      slide.place;


    message.textContent =
      slide.message;


    counter.textContent =
      `${journeyIndex + 1} / ${journeySlides.length}`;


    requestAnimationFrame(() => {

      image.classList.add(
        "zoom-in"
      );

    });


    return;
  }


  // FADE OUT

  image.classList.add(
    "fade-slide"
  );


  image.classList.remove(
    "zoom-in"
  );


  // CHANGE IMAGE

  setTimeout(() => {

    image.src =
      slide.image;


    place.textContent =
      slide.place;


    message.textContent =
      slide.message;


    counter.textContent =
      `${journeyIndex + 1} / ${journeySlides.length}`;


    image.classList.remove(
      "fade-slide"
    );


    requestAnimationFrame(() => {

      image.classList.add(
        "zoom-in"
      );

    });


  }, 650);

}


// ==========================================
// FINISH JOURNEY
// ==========================================

function finishJourney() {

  clearInterval(
    journeyTimer
  );


  journeyTimer = null;

  slideshowRunning = false;


  if (hinduMusic) {

    hinduMusic.pause();

    hinduMusic.currentTime = 0;

  }


  createCelebration();


  setTimeout(() => {

    showEnding();

  }, 1400);

}


// ==========================================
// RESET SLIDESHOW
// ==========================================

function resetSlideshow() {

  clearInterval(
    journeyTimer
  );


  journeyTimer = null;

  slideshowRunning = false;

  journeyIndex = 0;


  const image =
    document.getElementById(
      "journeyImage"
    );


  const place =
    document.getElementById(
      "journeyPlace"
    );


  const message =
    document.getElementById(
      "journeyMessage"
    );


  const counter =
    document.getElementById(
      "journeyCounter"
    );


  const startButton =
    document.getElementById(
      "startJourneyButton"
    );


  if (image) {

    image.classList.remove(
      "fade-slide",
      "zoom-in"
    );

    image.src =
      journeySlides[0].image;

  }


  if (place) {

    place.textContent =
      journeySlides[0].place;

  }


  if (message) {

    message.textContent =
      journeySlides[0].message;

  }


  if (counter) {

    counter.textContent =
      `1 / ${journeySlides.length}`;

  }


  if (startButton) {

    startButton.style.display =
      "inline-block";

  }


  if (hinduMusic) {

    hinduMusic.pause();

    hinduMusic.currentTime = 0;

  }

}


// ==========================================
// MUSIC BUTTON
// ==========================================

function toggleJourneyMusic() {

  if (!hinduMusic) return;


  if (hinduMusic.paused) {

    hinduMusic.play().catch(
      () => {}
    );

  }

  else {

    hinduMusic.pause();

  }

}


// ==========================================
// FINAL PAGE
// ==========================================

function showEnding() {

  showScreen("ending");

}


// ==========================================
// WATCH AGAIN
// ==========================================

function restartJourney() {

  resetSlideshow();

  showScreen("welcome");

}


// ==========================================
// STARTUP
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    createParticles();

    preloadJourneyImages();

  }
);