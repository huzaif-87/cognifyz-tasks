document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorBox = document.getElementById("error");

  const emailRegex = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;

  if (!name || !email || !message) {
    errorBox.textContent = "All fields are required.";
    return;
  }

  if (!emailRegex.test(email)) {
    errorBox.textContent = "Enter a valid email address.";
    return;
  }

  errorBox.textContent = "";
  alert("Thanks for reaching out, " + name + "!");
  this.reset();
});