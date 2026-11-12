"use strict";

(function () {
  var body = document.body;
  var toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  var saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {}

  if (saved === "dark") {
    body.classList.add("dark");
  }

  function updateButton() {
    var isDark = body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
    toggle.title = isDark ? "Light mode" : "Dark mode";
  }

  updateButton();

  toggle.addEventListener("click", function () {
    var isDark = body.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
    updateButton();
  });
})();