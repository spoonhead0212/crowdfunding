
// mobile menu
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
    const menuList = document.querySelector(".nav-list");
    menuList.classList.toggle('mobile-menu');

// change menu icon on click
    if (menuIcon.src.match = ("images/icon-hamburger.svg")) {
        menuIcon.src = "images/icon-close-menu.svg";
        console.log("switch");
    } else {
        menuIcon.src = "images/icon-hamburger.svg";
        console.log('switch back');
    }
})





// project modal
const projectModal = document.querySelector('.start');

// call back button
const backProjectBtn = document.querySelector('.project-btn');
backProjectBtn.addEventListener('click', () => {
    projectModal.showModal()
})




// cancel btn
const cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener('click', () => {
    projectModal.close();
})
// ------------------------------------

// the 3 buttons
const selectRewardBtn = document.querySelectorAll('#pro-btn');

// the modal that is currently hidden
const openModal = document.querySelector('.success-modal');

for(i = 0; i < selectRewardBtn.length; i++) {
    selectRewardBtn[i].addEventListener("click", () => {
        openModal.show();
    })
}

// modal cancel button
const dismiss = document.querySelector(".got");
// modal
const successful = document.querySelector(".success-modal");
// eventlistener to the got button
dismiss.addEventListener("click", () => {
    successful.close();
});


    
