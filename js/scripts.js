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


// order script
const options = document.querySelectorAll("input[type=radio]");
let html;
let htmlModal;

// add click event to each radio input to 
options.forEach(elem => {
    elem.addEventListener('click', (event)=>{
        
        //check if coffee type is capsule and disable grind options acoordion
        if (document.getElementById('capsule').checked) {
            if (document.getElementById('grind-option').classList.contains("open")) {
                document.getElementById('grind-option').classList.remove("open");
                document.getElementById('grind-option').nextElementSibling.style.maxHeight = null;
            }
            document.getElementById('grind-option').classList.add("disabled");
        } else {
            document.getElementById('grind-option').classList.remove("disabled");
        }

        updateOrder();
        
    });
});


function updateOrder() {
    let coffee = type = quantity = grind = deliver = '_____';

    document.getElementsByName('drink-coffee').forEach(e => { 
        if (e.checked) {
            coffee = e.value;
        }
    });

    document.getElementsByName('coffee-type').forEach(e => { 
        if (e.checked) {
            type = e.value;
        }
    });

    document.getElementsByName('quantity').forEach(e => { 
        if (e.checked) {
            quantity = e.value;
        }
    });

    document.getElementsByName('grind').forEach(e => { 
        if (e.checked) {
            grind = e.value;
        }
    });

    document.getElementsByName('deliver').forEach(e => { 
        if (e.checked) {
            deliver = e.value;
        }
    });


    if (document.getElementById('capsule').checked){
        html = `"I drink my coffee as <span class="selected-item">Capsules</span>, with a <span class="selected-item">${type}</span> type of bean. <span class="selected-item">${quantity}g</span> sent to me <span class="selected-item">${deliver}</span>."`;

        htmlModal = html + `<p class="confirm-text">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p><button class="btn-main checkout">Checkout - $14.00 / mo</button>`;
    } else {
        html = `     "I drink my coffee as <span class="selected-item">${coffee}</span>, with a <span class="selected-item">${type}</span> type of bean. <span class="selected-item">${quantity}g</span> ground ala <span class="selected-item">${grind}</span>, sent to me <span class="selected-item">${deliver}</span>."`;

        htmlModal = html + `<p class="confirm-text">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p><button class="btn-main checkout">Checkout - $14.00 / mo</button>`;
    }

    document.getElementsByClassName('summary-body-text')[0].innerHTML = html;
    document.getElementsByClassName('order-summary-body-text')[0].innerHTML = html;
}



