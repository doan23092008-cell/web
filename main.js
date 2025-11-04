    const toggle = document.querySelector(".menu-toggle");
    const dropdown = document.querySelector(".menu-dropdown");

    toggle.addEventListener("click", () => {
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", (e) => {
      if (!e.target.closest(".menu-container")) {
        dropdown.style.display = "none";
      }
    });