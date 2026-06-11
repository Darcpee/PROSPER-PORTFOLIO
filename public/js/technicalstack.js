// Simple intersection observer for skill bar animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.width;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.bg-secondary-container, .bg-primary-container').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      bar.dataset.width = width;
      observer.observe(bar);
    });