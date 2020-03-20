// grid toggle
const trigger = document.querySelector('#trigger');
const target = document.querySelector('main');

trigger.addEventListener('click', () => {
  
//   All the good stuff
   target.classList.toggle('grid');
   
});

//lightbox
lightGallery(document.getElementById('grid') , {
  
  mode : 'lg-lolipop', 
  speed : 300,
  download : false,
   
  
});