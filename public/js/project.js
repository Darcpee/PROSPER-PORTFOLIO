// Micro-interaction for filter buttons
        const filterButtons = document.querySelectorAll('.flex.bg-surface-container-low button');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => {
                    b.classList.remove('bg-primary', 'text-on-primary');
                    b.classList.add('text-on-surface-variant');
                });
                btn.classList.add('bg-primary', 'text-on-primary');
                btn.classList.remove('text-on-surface-variant');
                
                // Trigger a small animation on cards
                const cards = document.querySelectorAll('.glass-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.4s ease';
                    }, index * 50);
                });
            });
        });


         //handle mobile menu    
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobileMenu");

// Open Menu
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.remove("hidden");
});

// Close Menu Button
closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
});

// Click Outside Menu
document.addEventListener("click", (e) => {

    if (
        !mobileMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        mobileMenu.classList.add("hidden");
    }

});


