// No DOMContentLoaded needed here
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorDiv = document.getElementById("error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    errorDiv.textContent = "Please fill in all the fields.";
    return;
  }

  if (!emailPattern.test(email)) {
    errorDiv.textContent = "Please enter a valid email address.";
    return;
  }

  errorDiv.textContent = ""; // Clear error
  alert("Form submitted successfully!");
  this.reset();
});