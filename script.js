//copy menu for mobile
function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector(".header-nav nav");
    var navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header .wrapper to thetop-nav
    var topNav = document.querySelector(".header-top");
    var topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;


}
copyMenu();




//show mobile menu
const menuButton = document.querySelector('.trigger');
const closeButton = document.querySelector('.t-close');
const addClass = document.querySelector('.site');

menuButton.addEventListener('click', () => {
    addClass.classList.toggle('showmenu');
})

closeButton.addEventListener('click', () => {
    addClass.classList.remove('showmenu');
})




//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child');
const submenuIcon = document.querySelectorAll('.has-child .icon-small');

submenu.forEach((menu) => {
    menu.addEventListener('click', togglee);
});

function togglee(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
            this.closest('.has-child').classList.toggle('expand');    

}

//SLIDER
const swiper = new Swiper('.swiper', {

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
});


//show search
const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close');
const showClass = document.querySelector('.site');

searchButton.addEventListener('click', ()=>{
  showClass.classList.toggle('showsearch');
})

tClose.addEventListener('click', ()=>{
  showClass.classList.remove('showsearch');
})