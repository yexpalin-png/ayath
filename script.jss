const text =
  "Pehli baar tumse baat hui... aur dil ne bola, yeh wali special hai ❤️";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

typeWriter();

function updateTimer() {
  const start = new Date("2026-05-04T11:06:00");
  const now = new Date();
  const diff = now - start;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById(
    "timer"
  ).innerText = `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`;
}

setInterval(updateTimer, 1000);
updateTimer();

function showLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

function hideLetter() {
  document.getElementById("letter").classList.add("hidden");
}
