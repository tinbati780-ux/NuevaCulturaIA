// Small JS for nav toggle and simple form handling with accessible messages
document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if(toggle && navList){
    toggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(expanded){ navList.style.display = 'none'; }
      else { navList.style.display = 'flex'; }
    });
  }

  // Donation form: fake submit and announce
  const donationForm = document.getElementById('donation-form');
  const donationMessage = document.getElementById('donation-message');
  if(donationForm){
    donationForm.addEventListener('submit', function(e){
      e.preventDefault();
      const amount = document.getElementById('amount').value;
      if(!amount || Number(amount) <= 0){
        donationMessage.textContent = 'Ingrese un monto válido.';
        donationMessage.className = '';
        return;
      }
      donationMessage.textContent = 'Gracias por su aporte. Seremos contactados para procesar la donación.';
      donationMessage.className = '';
      donationForm.reset();
    });
  }

  // Contact form: basic validation and aria-live update
  const contactForm = document.getElementById('contact-form');
  const contactStatus = document.getElementById('contact-status');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        contactStatus.textContent = 'Por favor complete todos los campos.';
        contactStatus.className = '';
        return;
      }
      contactStatus.textContent = 'Mensaje enviado. Gracias por contactarnos.';
      contactForm.reset();
    });
  }
});
