// Open Menu

let dropnav_open = document.querySelectorAll('.offcnvs-nav');
dropnav_open.forEach(function (dropnav_opens) {
    dropnav_opens.addEventListener('click', function () {
        document.querySelector(".nav-canvas-items").classList.add('canvas-active');
      document.querySelector(".canvas-main").classList.add('cnvsmain-active');
      document.querySelector(".canvas-main").classList.add('canvas-main-fixed');
    })
      
})

// Close Menu

let dropnav_close = document.querySelector('.canvas-main')
dropnav_close.addEventListener('click', function () {
      document.querySelector(".nav-canvas-items").classList.remove('canvas-active');
      document.querySelector(".canvas-main").classList.remove('cnvsmain-active');
      document.querySelectorAll(".nav-items-tabs").classList.add('nav-items-tabs-dnone');
      document.querySelector(".canvas-main").classList.remove('canvas-main-fixed');
      
})








// //Click Outside Display None
// document.body.addEventListener('click', event => {
//     // check if the clicked element is the 'my-element' element or one of its children
//     const clickedElement = event.target;
//     const myElement = document.querySelector('.menuopen');
//     if (myElement.contains(clickedElement)) {
//       // do nothing if the clicked element is the 'my-element' element or one of its children
//       return;
//     }

//     // remove the 'active' class from the 'my-element' element
//     document.querySelector('.menucnvs').classList.remove('menucnvs-active')
//   });








// CUSTM NAV TABS

// let industrylink = document.querySelector('.industry');
// industrylink.addEventListener('click', function () {
//     document.querySelector(".industrysection").classList.toggle('d-none');
// })

// let commitmentlink = document.querySelector('.commitment');
// commitmentlink.addEventListener('click', function () {
//     document.querySelector(".commitmentsection").classList.toggle('d-none');
// })

// let companylink = document.querySelector('.company');
// companylink.addEventListener('click', function () {
//     document.querySelector(".companysection").classList.toggle('d-none');
    
// })







// NAVLINK tabs

document.querySelectorAll('.offcnvs-nav').forEach(function(link) {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-items-tabs').forEach(function(section) {
            section.classList.add('dnone');
        });

        let targetSection = document.querySelector(`.${this.dataset.target}`);
        if (targetSection) {
            targetSection.classList.remove('dnone');
        }
    });
});













// Header Height Selection

const headerHeight = document.getElementById('header').offsetHeight;
document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

















// Blog Slider

$(document).ready(function(){
    $('.blog-main').owlCarousel({
        margin:20,
        // infinite:true,
        // loop:true,
        nav: false,
        dots:true,
        dotsEach: true,
        autoplay:true,
        slideToScroll:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1300:{
                items:3
            },
            1500:{
                items:3
            }
        }
      })
});














// MOBILE INNER NAVDROPDOWN

// Function to hide innerdrop-item elements
function hideInnerdropItems() {
    document.querySelectorAll('.innerdrop-item').forEach(function (section) {
        section.classList.add('dnone');
    });
}

// Event listener for innerdrop links
document.querySelectorAll('.innerdrop').forEach(function (mobilelink) {
    mobilelink.addEventListener('click', function () {
        // Hide other innerdrop-item elements
        hideInnerdropItems();

        // Show the target innerdrop-item element
        let targetSection = document.querySelector(`.${this.dataset.target}`);
        if (targetSection) {
            targetSection.classList.remove('dnone');
        }
    });
});

// Event listener for clicks outside innerdrop
document.addEventListener('click', function (event) {
    // Check if the clicked element is not inside any innerdrop
    if (!event.target.closest('.innerdrop')) {
        // Hide all innerdrop-item elements
        hideInnerdropItems();
    }
});
