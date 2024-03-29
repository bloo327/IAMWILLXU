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
  animateOnScroll('.sectiontitle', .7, 'appear', true)
  animateOnScroll('.aboutme', .8, 'appear', true)
  animateOnScroll('.willportrait', .7, 'appear', true)
  animateOnScroll('.col-md-8', .8, 'appear', true)
  animateOnScroll('.igbtn', .6, 'appear', true)
})



function burgerWtf(x){
  var content = document.getElementById("burgerdropdowncontent");
  var dropdown = document.querySelector('.hamburger');
  dropdown.addEventListener('click', ()=>{
    dropdown.classList.toggle('change');
    content.style.display = content.style.display === 'inline-block' ? "none" : 'inline-block';
  })
}
burgerWtf();
