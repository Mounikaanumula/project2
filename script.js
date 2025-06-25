//header 
  function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
  }

  function toggleDropdown(event) {
    const dropdown = event.target.closest('.dropdown');
    if (window.innerWidth <= 768) {
      event.preventDefault();
      dropdown.classList.toggle('open');
    }
  }
 

// word by word text
 const lines = [
    "Welcome To RR Modulars",
   "your one-stop destination for elegant, functional, and fully customized interior solutions. We specialize in transforming your spaces into stunning, modular masterpieces that reflect your lifestyle, needs, and taste."
  ];

  const container = document.getElementById("text-container");
  let delay = 0;
  const wordDelay = 110; // ms between each word

  lines.forEach((line) => {
    const lineDiv = document.createElement("div");

    line.split(" ").forEach((word) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = word;
      lineDiv.appendChild(span);
      lineDiv.appendChild(document.createTextNode(" "));

      setTimeout(() => {
        span.classList.add("visible");
      }, delay);

      delay += wordDelay;
    });

    container.appendChild(lineDiv);
  });

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });
//section reveal
  function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    for (const section of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = section.getBoundingClientRect().top;
      const revealPoint = 150; // adjust if needed

      if (elementTop < windowHeight - revealPoint) {
        section.classList.add('active');
      } else {
        section.classList.remove('active'); // Optional: remove to reset
      }
    }
  }

  window.addEventListener('scroll', revealSections);
  window.addEventListener('load', revealSections); // Initial load check
