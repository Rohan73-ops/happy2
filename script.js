const music = document.getElementById("bg-music");

// Unmute and play on first interaction
document.addEventListener("click", () => {
    music.muted = false;
    music.play();
}, { once: true });
