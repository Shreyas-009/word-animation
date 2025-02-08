gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




var textContent = document.querySelectorAll("#page2 h1");
var page2 = document.querySelector("#page2");

textContent.forEach(function(Element){
    var clutter = "";
    var splitText = Element.textContent.split(""); 

    splitText.forEach((ElementLetter) => {
        clutter +=`<span>${ElementLetter}</span>`;
    })
    console.log(clutter);
    Element.innerHTML=clutter;
})

gsap.to("#page2 h1 span",{
    color:"rgb(67,75,52)",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 h1 span",
        start:"top 45%",
        end:"top -15%",
        // markers:true,
        scroller:"#main",
        scrub:0.5

    }
})