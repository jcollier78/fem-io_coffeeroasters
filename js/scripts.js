// Accordion script
let accLink = document.querySelectorAll('.accordion-link');

accLink.forEach(item => {
    item.addEventListener('click', (e) => {

        if(!item.classList.contains('disabled')){
            item.classList.toggle('open'); // animate chevron

            let accPanel = item.nextElementSibling;
            if(accPanel.style.maxHeight){
                accPanel.style.maxHeight = null;
            } else {
                accPanel.style.maxHeight = accPanel.scrollHeight + "px";
            }
        }  
    });
});


// mobile menu
let menuIcon = document.querySelector('.mobile-menu');

// icon animation
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
});