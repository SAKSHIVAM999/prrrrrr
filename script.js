

/* 📸 Full Screen Photo Gallery */
const galleryPhotos = Array.from(
  document.querySelectorAll(".photos img")
);

const photoViewer = document.getElementById("photoViewer");
const fullPhoto = document.getElementById("fullPhoto");
const closeViewer = document.getElementById("closeViewer");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let photoIndex = 0;

function showPhoto(index) {
  if (!galleryPhotos.length) return;

  photoIndex =
    (index + galleryPhotos.length) % galleryPhotos.length;

  fullPhoto.src = galleryPhotos[photoIndex].src;
  fullPhoto.alt = galleryPhotos[photoIndex].alt;
  photoViewer.classList.add("active");
  document.body.style.overflow = "hidden";
}

function hidePhotoViewer() {
  photoViewer.classList.remove("active");
  document.body.style.overflow = "";
}

galleryPhotos.forEach((photo, index) => {
  photo.addEventListener("click", () => showPhoto(index));
});

closeViewer.addEventListener("click", hidePhotoViewer);

prevPhoto.addEventListener("click", () => {
  showPhoto(photoIndex - 1);
});

nextPhoto.addEventListener("click", () => {
  showPhoto(photoIndex + 1);
});

photoViewer.addEventListener("click", (event) => {
  if (event.target === photoViewer) {
    hidePhotoViewer();
  }
});

document.addEventListener("keydown", (event) => {
  if (!photoViewer.classList.contains("active")) return;

  if (event.key === "Escape") hidePhotoViewer();
  if (event.key === "ArrowRight") showPhoto(photoIndex + 1);
  if (event.key === "ArrowLeft") showPhoto(photoIndex - 1);
});


/* 💌 Open and close birthday letter */
const openLetterBtn = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

openLetterBtn.addEventListener("click", () => {
  const isOpening = letterContent.hidden;

  letterContent.hidden = !isOpening;

  openLetterBtn.innerHTML = isOpening
    ? "💖<span>Close Your Letter</span>"
    : "💌<span>Open Your Letter</span>";

  if (isOpening) {
    letterContent.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

/* 🎵 Music player controls */
const birthdayMusic = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const musicDisc = document.getElementById("musicDisc");
const musicStatus = document.getElementById("musicStatus");

musicBtn.addEventListener("click", async () => {
  if (birthdayMusic.paused) {
    try {
      await birthdayMusic.play();
      musicBtn.textContent = "⏸ Pause Music";
      musicDisc.classList.add("playing");
      musicStatus.textContent = "Playing with love ❤️🎶";
    } catch (error) {
      musicStatus.textContent =
        "Music file check karo: music/birthday.mp3 🎵";
    }
  } else {
    birthdayMusic.pause();
    musicBtn.textContent = "▶ Play Music";
    musicDisc.classList.remove("playing");
    musicStatus.textContent = "Music paused 💖";
  }
});

birthdayMusic.addEventListener("ended", () => {
  musicBtn.textContent = "▶ Play Music";
  musicDisc.classList.remove("playing");
});

/* 🎉 Confetti celebration */
function launchConfetti() {
  const colors = ["#ff69b4", "#ffd700", "#ff3030", "#ffffff"];

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDelay = Math.random() * 1.5 + "s";
    piece.style.animationDuration = 2.5 + Math.random() * 2 + "s";

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 6000);
  }
}

/* 🎉 Birthday Confetti */
function launchConfetti() {
  const colors = ["#ff69b4", "#ffd700", "#ff3030", "#ffffff"];

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1.5 + "s";
    piece.style.animationDuration = 2.5 + Math.random() * 2 + "s";

    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 6000);
  }
}

/* 🎁 Surprise button par confetti */
const surpriseButton = document.getElementById("surpriseBtn");

if (surpriseButton) {
  surpriseButton.addEventListener("click", launchConfetti);
}
