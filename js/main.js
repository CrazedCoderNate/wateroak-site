// Water Oak Tech / shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Contact form: opens the visitor's email app with the message prefilled.
  // To switch to a hosted form service later (for example Formspree),
  // replace this handler with a normal form action attribute.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("cf-name").value.trim();
      var company = document.getElementById("cf-company").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var phone = document.getElementById("cf-phone").value.trim();
      var topic = document.getElementById("cf-topic").value;
      var message = document.getElementById("cf-message").value.trim();

      var subject = "Project inquiry: " + topic + " (" + (company || name) + ")";
      var bodyLines = [
        "Name: " + name,
        "Company: " + (company || "Not provided"),
        "Email: " + email,
        "Phone: " + (phone || "Not provided"),
        "Interested in: " + topic,
        "",
        message
      ];

      var mailto =
        "mailto:nathanshanehamilton@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      var status = document.getElementById("form-status");
      if (status) {
        status.classList.add("visible");
      }
    });
  }
});
