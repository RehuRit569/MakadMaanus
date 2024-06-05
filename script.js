var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y- 250 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #4b94c1c6"
        crsr.style.backgroundColor = "transparent"
    })
})



gsap.to("#nav", {
    backgroundColor :"#000",
    height:"110px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor :"rgba(0, 0, 0,)",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})


gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    }
})

gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})


gsap.from("#blue-div h4", {
    y:50,
    scrollTrigger:{
        trigger: "#blue-div",
    scroller: "body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:3,
    }
})

gsap.from("#page3 p", {
    y:50,
    scrollTrigger:{
        trigger: "#page3",
    scroller: "body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:3,
    }
})


gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger: "#page4",
    scroller: "body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:3,
    }
})