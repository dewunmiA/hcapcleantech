/* HCapital CleanTech — minimal interactivity, no dependencies. */
(function () {
  "use strict";

  // Mobile menu toggle
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    var iconMenu = toggle.querySelector(".icon-menu");
    var iconClose = toggle.querySelector(".icon-close");
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (iconMenu && iconClose) {
        iconMenu.classList.toggle("is-hidden", open);
        iconClose.classList.toggle("is-hidden", !open);
      }
    });
    // Close the menu when a link is chosen
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        if (iconMenu && iconClose) {
          iconMenu.classList.remove("is-hidden");
          iconClose.classList.add("is-hidden");
        }
      });
    });
  }

  // Contact form — demo only, nothing is sent
  var form = document.getElementById("contact-form");
  var success = document.getElementById("contact-success");
  var again = document.getElementById("send-another");
  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.classList.add("is-hidden");
      success.classList.remove("is-hidden");
      success.focus();
    });
  }
  if (again && form && success) {
    again.addEventListener("click", function () {
      success.classList.add("is-hidden");
      form.classList.remove("is-hidden");
      form.reset();
    });
  }
})();
