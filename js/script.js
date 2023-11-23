/***************JQuery Scroll po stránke***********/

(function ($) {
    $(function(){
        $(".jq--scroll-styl-malby").click(function(){
            $("html,body").animate({scrollTop:$(".jq--styl-malby").offset().top},500);
        });
        $(".jq--scroll-fotogaleria").click(function () {
            $("html,body").animate({ scrollTop: $(".jq--fotogaleria").offset().top }, 600);
        });
        $(".jq--scroll-kontakt").click(function () {
            $("html,body").animate({ scrollTop: $(".jq--kontakt").offset().top }, 700);
        });
    });

    /***************JQuery - mobile navigation***********/
    $(function () {
        $(".jq--nav-icon").click(function () {
            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });
    });
    /***************JQuery - hamburger menu***********/
    $(".jq--image-hamburger").click(function(){

        if ($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
        {
            $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
        }
        else 
        {
            $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
        }
    });
})(jQuery);


/*************** First screen - Javascript***********/               

const containerSlider = document.querySelector(".container-slider")
const slideLeft = document.querySelector(".slide-left")
const slideRight = document.querySelector(".slide-right")
const arrowDown = document.querySelector(".arrow-down")
const arrowUp = document.querySelector(".arrow-up")
const slidesLength = slideRight.querySelectorAll("div").length

let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLength-1)*100}vh`;

arrowUp.addEventListener("click", function () {
    changeSlide("up")
})

arrowDown.addEventListener("click", function() {
    changeSlide("down")
})

function changeSlide(direction) {
    const sliderHeight = containerSlider.clientHeight
    if (direction === "up") {
        numberActiveSlide ++
        if(numberActiveSlide >= slidesLength){
            numberActiveSlide = 0
        }
    } else {
        numberActiveSlide --
        if (numberActiveSlide < 0){
            numberActiveSlide = slidesLength -1
        }
    }
    slideRight.style.transform = `translateY(-${sliderHeight * numberActiveSlide}px)`
    slideLeft.style.transform = `translateY(${sliderHeight * numberActiveSlide}px)`
}

/*************** Scroll 1st. and 2nd. section - Javascript***********/

const firstItemMenu = document.querySelector(".first-item-menu")
let  scrollGoal = document.querySelector(".scroll-goal").offsetTop

firstItemMenu.addEventListener("click", function(){
    window.scrollTo({
        top: scrollGoal-60,
        behavior:"smooth"
    })
})

const secondItemMenu = document.querySelector(".second-item-menu")
let secondscrollGoal = document.querySelector(".secondScroll-goal").offsetTop
secondItemMenu.addEventListener("click", function () {
    window.scrollTo({
        top: secondscrollGoal-60,
        behavior: "smooth"
    })
})

// const thirdItemMenu = document.querySelector(".third-item-menu")
// let thirdscrollGoal = document.querySelector(".thirdScroll-goal").offsetTop
// thirdItemMenu.addEventListener("click", function () {
//     window.scrollTo({
//         top: thirdscrollGoal+110,
//         behavior: "smooth"
//     })
// })

// const fourthItemMenu = document.querySelector(".fourth-item-menu")
// let fourthscrollGoal = document.querySelector(".fourthScroll-goal").offsetTop
// fourthItemMenu.addEventListener("click", function () {
//     window.scrollTo({
//         top: fourthscrollGoal + 120,
//         behavior: "smooth"
//     })
// })

// const fifthItemMenu = document.querySelector(".fifth-item-menu")
// let fifthscrollGoal = document.querySelector(".fifthScroll-goal").offsetTop
// fifthItemMenu.addEventListener("click", function () {
//     window.scrollTo({
//         top: fifthscrollGoal +120,
//         behavior: "smooth"
//     })
// })

/***************Arrow back on top***********/ 

window.addEventListener("scroll",function (){
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight-this.window.innerHeight
    if(Math.ceil(scrolled) > (0,943)){        
        let toTop = document.querySelector(".top-page")
        toTop.style.display = "block"
        // behavior: "smooth"
        toTop.addEventListener("click", function(){
            toTop.style.display= "none"
        })
    }
})


/***************for luck***********/ 

console.log("Toto je môj webový projekt, kvôli vstupnému pohovoru :)")




