document.getElementById('year').textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  form.addEventListener('submit', async function(e){
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        btn.textContent = 'Message sent ✓';
        formNote.textContent = "Thanks — I'll get back to you soon.";
        form.reset();
      } else {
        btn.textContent = 'Could not send';
        formNote.textContent = "Something went wrong — email me directly at gikabajabezmuniu254@gmail.com instead.";
      }
    } catch (err) {
      btn.textContent = 'Could not send';
      formNote.textContent = "Something went wrong — email me directly at gikabajabezmuniu254@gmail.com instead.";
    }
    setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3000);
  });
