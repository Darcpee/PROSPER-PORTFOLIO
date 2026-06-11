// document.addEventListener('mousemove', (e) => {
//             const cards = document.querySelectorAll('.glass-card');
//             cards.forEach(card => {
//                 const rect = card.getBoundingClientRect();
//                 const x = e.clientX - rect.left;
//                 const y = e.clientY - rect.top;
                
//                 if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
//                     card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.05) 0%, rgba(18,18,20,0.7) 70%)`;
//                 } else {
//                     card.style.background = 'rgba(18, 18, 20, 0.7)';
//                 }
//             });
//         });

//         // Terminal typing effect logic (simple simulation)
//         const phrases = ["Robust Backends.", "Scalable APIs.", "Cloud Systems."];
//         let i = 0;
//         let j = 0;
//         let currentPhrase = "";
//         let isDeleting = false;
        
        /* Typing effect would go here if needed to be dynamic, 
           otherwise the CSS cursor provides the vibe. */