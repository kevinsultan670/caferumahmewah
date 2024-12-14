document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown-content a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("data-target");
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
          } else {
              console.warn(`Target element with ID '${targetId}' not found.`);
          }
      });
  });
});
