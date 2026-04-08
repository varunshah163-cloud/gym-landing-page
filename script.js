const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (top < triggerPoint) {
      section.classList.add("show");
    }
  });
});

//Form submit alert
document.querySelector("form").addEventListener("submit", function () {
  alert("Sending...");
});
