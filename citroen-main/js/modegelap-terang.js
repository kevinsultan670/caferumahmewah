// function toggleMode() {
//   const body = document.body;
//   const toggleImage = document.getElementById("toggleImage");

//   if (body.classList.contains("light-mode")) {
//     body.classList.replace("light-mode", "dark-mode");
//     toggleImage.src = "image/bulan.png";
//     toggleImage.alt = "Mode Terang";
//   } else {
//     body.classList.replace("dark-mode", "light-mode");
//     toggleImage.src = "image/matahari.png";
//     toggleImage.alt = "Mode Gelap";
//   }
// }

// // Attach toggle mode function to button
// document.getElementById("toggle-mode-button").onclick = toggleMode;

document.addEventListener("DOMContentLoaded", () => {
  function toggleMode() {
      const body = document.body;
      const toggleImage = document.getElementById("toggleImage");

      if (body.classList.contains("light-mode")) {
          body.classList.replace("light-mode", "dark-mode");
          toggleImage.src = "image/bulan.png";
          toggleImage.alt = "Mode Terang";
      } else {
          body.classList.replace("dark-mode", "light-mode");
          toggleImage.src = "image/matahari.png";
          toggleImage.alt = "Mode Gelap";
      }
  }

  const toggleButton = document.getElementById("toggleImage");
  if (toggleButton) {
      toggleButton.onclick = toggleMode;
  }
});
