
// mobile menu
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
    const menuList = document.querySelector(".nav-list");
    menuList.classList.toggle('mobile-menu');

// change menu icon on click
if(menuIcon.src.match("images/icon-hamburger.svg")){
    menuIcon.src = "images/icon-close-menu.svg";
    console.log("hamburger");
} else {
    menuIcon.src = "images/icon-hamburger.svg";
    console.log("cancel");
}
})


const main = document.querySelector('main')

// project modal
const projectModal = document.querySelector('.start');

// call back button
const backProjectBtn = document.querySelector('.project-btn');
backProjectBtn.addEventListener('click', () => {
    projectModal.showModal()
    document.body.style.overflow = 'hidden'
})


// cancel btn
const cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener('click', () => {
    projectModal.close()
    document.body.style.overflow = 'auto'
})
// ------------------------------------

// the 3 buttons
const selectRewardBtn = document.querySelectorAll('#pro-btn');
const openModal = document.querySelector('.success-modal');

const dismiss = document.querySelector(".got");
const successful = document.querySelector(".success-modal");



const bkMarked = document.querySelector('.marked').addEventListener('click', function() {
    this.style.backgroundColor = 'hsl(176, 50%, 47%)'
})

    
const boxBodies = document.querySelectorAll('.start-inner')
const allRadio = document.querySelectorAll('.radio-btn')
boxBodies.forEach(boxBody => {
    boxBody.addEventListener('click', function() {
        boxBody.querySelector('.radio-btn').checked = !boxBody.querySelector('.radio-btn').checked;
        boxBody.querySelector('.radio-btn').classList.add('radio-check');
    })
    
})

const donation = {
    donated: [30000, 20000, 3000],
    total: 22,
    daysLeft: ''
}

// const donateTot = document.querySelector('.donate')
// const totalBackers = document.querySelector('.tot-donate')
// const daysLeft = document.querySelector('.don-days')

// const totAl = donation.donated.reduce((x, y) => x + y, 0)
// donateTot.textContent = totAl.toLocaleString() 

// totalBackers.textContent = donation.totalBackers
