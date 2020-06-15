function animateOnScroll(target, triggerPosition, activeClass, reversible = false){
    let targetEl = document.querySelectorAll(target);
    targetEl.forEach(el=>{
      let targetElTop = el.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      if (targetElTop <= windowHeight * triggerPosition) {
        el.classList.add(activeClass);
      }
      else if (targetElTop >= windowHeight && reversible) {
        el.classList.remove(activeClass);
      }
    })
}       

window.addEventListener('scroll', ()=>{
  animateOnScroll('.aboutme', 0.8, 'appear', true)
  animateOnScroll('.willportrait', .6, 'appear', true)
  animateOnScroll('.banners', 0.9, 'appear', true)
  animateOnScroll('.section4', 0.9, 'appear', true)
})

//
var body = document.querySelector('body');

body.onmousemove = function(e) {
  body.style.setProperty("--cx", e.clientX + "px");
  body.style.setProperty("--cy", e.clientY + "px");
}

//
function mobileOpacity(mobileWindow) {
  if (mobileWindow.matches) { // If media query matches
    document.body.style.opacity = 1;
  }
}

var mobileWindow = window.matchMedia("(max-width: 700px)")
mobileOpacity(mobileWindow) // Call listener function at run time
mobileWindow.addListener(mobileOpacity) // Attach listener function on state changes

//