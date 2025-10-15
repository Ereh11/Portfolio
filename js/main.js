window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update active nav link
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });

    // Button actions
    const cvBtn = document.querySelector('.cv-btn');
    const hireBtn = document.querySelector('.hire-btn');
    const whatsappBtn = document.querySelector('.whatsapp-btn');

    cvBtn.addEventListener('click', function() {
      window.open('https://drive.google.com/file/d/1AG_KezQrcb3xy5ZcHhMpcIUil8SKl23B/view?usp=drive_link', '_blank');
    });

    hireBtn.addEventListener('click', function() {
      window.open('https://www.linkedin.com/in/hany-abdou-731b831a1/', '_blank');
    });

    whatsappBtn.addEventListener('click', function() {
      window.open('https://wa.me/01157173830', '_blank');
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'all 0.6s ease';
      observer.observe(section);
    });

    // Active nav on scroll
    window.addEventListener('scroll', function() {
      let current = '';
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
