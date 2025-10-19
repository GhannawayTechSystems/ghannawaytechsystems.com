// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if(btn && menu){
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  // Contact form (example: Formspree integration)
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const endpoint = contactForm.getAttribute('data-endpoint'); // set to your endpoint or leave empty
      if(!endpoint){
        alert('No backend configured. Replace data-endpoint on the form with a Formspree or server endpoint.');
        return;
      }
      try{
        const res = await fetch(endpoint, { method: 'POST', body: formData });
        if(res.ok){
          alert('Message sent — thank you! We will contact you soon.');
          contactForm.reset();
        } else {
          alert('There was an error sending your message.');
        }
      }catch(err){
        console.error(err);
        alert('Network error. Check console.');
      }
    });
  }
});
