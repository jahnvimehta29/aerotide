// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===== Contact form =====
// Uses Netlify's built-in form handling (data-netlify="true" in the HTML) -
// no custom backend needed. Netlify intercepts the POST and emails/stores
// the submission automatically once the site is deployed there.
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  formNote.textContent = 'Sending...';

  try {
    const formData = new FormData(contactForm);
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
    formNote.textContent = "Thank you! We've received your enquiry and will get back to you shortly.";
    contactForm.reset();
  } catch (err) {
    formNote.textContent = 'Sorry, something went wrong. Please email Vishwanath@aerotide.co.in directly.';
  } finally {
    submitBtn.disabled = false;
  }
});
