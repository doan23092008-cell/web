// Mở / đóng menu 3 gạch
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuContainer = document.querySelector(".menu-container");

  menuToggle.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
  });

  // Hiệu ứng cuộn xuất hiện
  const elements = document.querySelectorAll("h2, p, figure");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
