// script.js
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Fetch form data
  const formData = new FormData(contactForm);
  const formDataObj = Object.fromEntries(formData.entries());

  // You can handle the form data here, e.g., send it to a server using AJAX or fetch

  // Show a success message or redirect to a thank-you page
  alert("Your message has been sent successfully!");
  contactForm.reset();
});
