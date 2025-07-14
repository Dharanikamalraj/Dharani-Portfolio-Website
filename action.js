//Toggle Mobile Menu with Scroll Close 
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    if (menuIcon.classList.contains('bx-x')) {
                 menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    }
  });

  //modal for CV Download 


  function showModal(message) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left ='0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '2000';

    const box = document.createElement('div');

    box.style.background = '#fff';
     box.style.padding = '2rem 3rem';

    box.style.borderRadius = '1rem';
    box.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
    box.innerHTML = `<p style="font-size:1.7rem;">${message}</p>
      <button id="close-modal" style="margin-top:1rem;padding:0.5rem 1.5rem;border:none;background:#007f73;color:#fff;border-radius:0.5rem;font-size:1.3rem;cursor:pointer;">Close</button>`;

    modal.appendChild(box);
          document.body.appendChild(modal);

    document.getElementById('close-modal').onclick = () => modal.remove();
  }

  // Animation
  const revealElements = document.querySelectorAll('.services-box, .about-content, .testimonial-item');

  function revealOnScroll() {
    revealElements.forEach(el => {
       const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - 100) {
        el.style.transition = 'all 1.5s';
            el.style.transform = 'translateY(0)';
        el.style.opacity = 1;
      } else {
        el.style.transition = 'all 3s';
        el.style.transform = 'translateY(60px)';
         el.style.opacity = 0;
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
   revealOnScroll();
  // Greeting in Console
  const name = "Dharani Kamalraj";
  const role = "Web Developer";
  console.log(`Welcome ${name}! You are a ${role}.`);
  //Typing Effect
  new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Medium Blogger'],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
  });
});
