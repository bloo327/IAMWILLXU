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

window.addEventListener('scroll', ()=> {
    animateOnScroll('.pic', 1.1, 'appear', true)
})
