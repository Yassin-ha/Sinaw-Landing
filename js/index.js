
// bar click 
const barIcon = document.getElementById("bar-icon")
const menu = document.getElementById("menu")
const centerLine = document.getElementById("center-line")
var x = window.matchMedia("(max-width: 767px)")


window.addEventListener("resize", function () {
    if (x.matches) {
        menu.style.display = "none"
        centerLine.style.marginLeft = "0px";
    }else {
        menu.style.display = "block"
    }
});
barIcon.addEventListener("click", function() {
        if(menu.style.display === "block") {
            menu.style.display = "none";
            centerLine.style.marginLeft = "0px";
        } else {
            menu.style.display = "block";
            centerLine.style.marginLeft = "5px";
        }
        
        
})



// video slider 

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");



btnLeft.addEventListener("click", function () {
    const currentVid = document.querySelector(".current-video");
    const previousVid = document.querySelector('.previous-video');
    const nextVid = document.querySelector(".next-video");

    currentVid.children[0].removeAttribute("controls")
    nextVid.children[0].removeAttribute("controls")
    previousVid.children[0].removeAttribute("controls")

    currentVid.classList.remove("current-video");
    previousVid.classList.remove("previous-video");
    nextVid.classList.remove("next-video");

    currentVid.style.width = "30% !important"

    currentVid.classList.add("next-video");
    previousVid.classList.add("current-video");
    nextVid.classList.add("previous-video");

    const video = previousVid.children[0];
    video.setAttribute("controls", "controls")

})
btnRight.addEventListener("click", function() {
    const currentVid = document.querySelector(".current-video");
    const previousVid = document.querySelector('.previous-video');
    const nextVid = document.querySelector(".next-video");

    currentVid.children[0].removeAttribute("controls")
    nextVid.children[0].removeAttribute("controls")
    previousVid.children[0].removeAttribute("controls")

    currentVid.classList.remove("current-video");
    previousVid.classList.remove("previous-video");
    nextVid.classList.remove("next-video");

    currentVid.style.width = "30%"

    currentVid.classList.add("previous-video");
    nextVid.classList.add("current-video");
    previousVid.classList.add("next-video");
    

    const video = nextVid.children[0];
    video.setAttribute("controls", "controls")
})


