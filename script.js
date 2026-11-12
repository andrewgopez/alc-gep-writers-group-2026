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

  function updateLabel() {
    toggle.textContent = body.classList.contains("dark") ? "Light mode" : "Dark mode";
  }

  updateLabel();

  toggle.addEventListener("click", function () {
    var isDark = body.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
    updateLabel();
  });
})();