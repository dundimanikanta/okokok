const sho=document.querySelector('#registration');

sho.classList.toggle('d-none');
const registration=document.querySelector('#pop');
registration.classList.toggle('d-none');

sho.addEventListener('click',()=>{
  console.log('clicked');
  registration.classList.remove('d-none');
})

const clos=document.querySelector('#close');
 clos.classList.toggle('d-none');

clos.addEventListener('click',()=>{
  console.log('clicked');
  registration.classList.add('d-none');
})

