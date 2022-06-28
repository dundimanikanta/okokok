
 const skills = document.querySelectorAll(".skill");
 
const hero=document.querySelector('.hero');
const nav=document.querySelector('#nav');
const nam=document.querySelector('#name');

nav.classList.add('d-none');
nam.classList.add('d-none');

document.addEventListener("scroll", function () {
  const clientHeight = document.documentElement.clientHeight;
  const skillsY = skills[1].getBoundingClientRect().y;

  if (clientHeight > skillsY) {
          skills.forEach( el=>{
            el.style.animation ="fadeInUp 1s forwards cubic-bezier(0.87, 0, 0.13, 1)"
          })

  }else{
    skills.forEach( el=>{
      el.style.animation ="";
    })
    
}});


  

setTimeout( ()=>{
    hero.classList.add('d-none');
    nav.classList.remove('d-none');
    nam.classList.remove('d-none');

},3000);



