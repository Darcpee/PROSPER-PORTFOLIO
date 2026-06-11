//  document.getElementById('contact-form').addEventListener('submit', function(e) {
//             e.preventDefault();
//             const btn = e.target.querySelector('button');
//             const originalText = btn.innerHTML;
            
//             btn.innerHTML = 'TRANSMITTING... <span class="material-symbols-outlined animate-spin" data-icon="sync">sync</span>';
//             btn.disabled = true;
            
//             setTimeout(() => {
//                 btn.innerHTML = 'DATA_RECEIVED <span class="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>';
//                 btn.classList.replace('bg-primary', 'bg-secondary-container');
//                 btn.classList.replace('text-on-primary', 'text-on-secondary-container');
                
//                 setTimeout(() => {
//                     btn.innerHTML = originalText;
//                     btn.classList.replace('bg-secondary-container', 'bg-primary');
//                     btn.classList.replace('text-on-secondary-container', 'text-on-primary');
//                     btn.disabled = false;
//                     e.target.reset();
//                 }, 3000);
//             }, 1500);
//         });

//         // Interactive Glow following mouse on cards
//         const cards = document.querySelectorAll('.glass-card');
//         cards.forEach(card => {
//             card.addEventListener('mousemove', e => {
//                 const rect = card.getBoundingClientRect();
//                 const x = e.clientX - rect.left;
//                 const y = e.clientY - rect.top;
//                 card.style.setProperty('--mouse-x', `${x}px`);
//                 card.style.setProperty('--mouse-y', `${y}px`);
//             });
//         });





        //Transmit Data Whatapp 
        document.getElementById("contact-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    const text =
`Hello Prosper,

Name: ${name}
Email: ${email}

Project Details:
${message}`;

    window.open(
      `https://wa.me/2348012345678?text=${encodeURIComponent(text)}`,
      "_blank"
    );
});