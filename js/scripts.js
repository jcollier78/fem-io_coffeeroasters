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
let menuPanel = document.querySelector('.primary-menu');

// icon animation
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    if(menuIcon.classList.contains('open')){
        document.querySelector('body').style.position = 'fixed';
        menuPanel.style.display = 'block';
        setTimeout(() => {
            menuPanel.classList.add('show');
        },1);  
    } else {
        document.querySelector('body').style.position = 'static';
        menuPanel.classList.remove('show');
        setTimeout(() => {
            menuPanel.style.display = 'none';
        },500);    
    }
    
});


// modal script
const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger');
const closeModal = document.querySelector('.close-modal');

function toggleModal(){
    modal.classList.toggle("show-modal");
}

function windowOnClick(event){
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

