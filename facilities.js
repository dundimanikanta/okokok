const fbtn=document.querySelector('#fbtn');
const fcntr=document.querySelector('#facilities-container');
const cbtn=document.querySelector('#cbtn');
const clgcntr=document.querySelector('#clglifecontainer');
fcntr.classList.toggle('d-none');
fbtn.classList.toggle('d-none');
clgcntr.classList.toggle('d-none');
cbtn.classList.toggle('d-none');





fbtn.addEventListener('click',()=>{
  
 
   fcntr.classList.toggle('d-none');
   fbtn.classList.toggle('btn-danger');
   fbtn.classList.toggle('btn-primary');

   if(!clgcntr.classList.contains('d-none'))
   {  
      clgcntr.classList.toggle('d-none');
      cbtn.classList.toggle('btn-danger');
      cbtn.classList.toggle('btn-primary');
     
   }
   
  
})


cbtn.addEventListener('click',()=>{
  
 
   clgcntr.classList.toggle('d-none');
   cbtn.classList.toggle('btn-danger');
   cbtn.classList.toggle('btn-primary');

   
   if(!fcntr.classList.contains('d-none'))
   {  
      fcntr.classList.toggle('d-none');
      fbtn.classList.toggle('btn-danger');
      fbtn.classList.toggle('btn-primary');
   }
   


  
})