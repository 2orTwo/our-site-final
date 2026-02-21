export function leftScroll(elm, magnetic, parCenter) {

//элеметы

const e = elm
const body = document.body
const scrollBlocks = document.querySelectorAll('.scrollBlocks');
const blocks = document.querySelectorAll('.blocks');



var lastScrollPosition =  document.documentElement.scrollLeft; 
body.style.overflowY = 'hidden'
let leftBool = false;
let rightBool = false;
let autoScrollOn = false;
/* 
Скролл в левую сторону
*/

blocks.addEventListener('wheel', (evt) => {
  let e = evt
 
    e.preventDefault();
    window.scrollBy(-e.deltaY, 0);


  // отслеживание скролла

  var currentScrollPosition = document.documentElement.scrollLeft;

  if (currentScrollPosition > lastScrollPosition) {
    // Прокрутка вправо
     rightBool = true;
     leftBool = false;
    
  

} else if (currentScrollPosition < lastScrollPosition) {
    // Прокрутка влево
    rightBool = false;
     leftBool = true;
    
  
}
lastScrollPosition = currentScrollPosition
if (!autoScrollOn) {
      return}
      else{
        // e.stopPropagation();
        // setTimeout(() => {
        //   e.preventDefault();
        // },200)
        console.log("yes");
        let autoScrollOn = false;
      }
});



/* 
Могнитное центрирование через observer
*/
const option ={
  root: null,
  rootMargin: '100px',
  threshold: [0.1,0.3,0.5,0.7,0.9]
}
///////////////////////////////////////

var observer = new IntersectionObserver(function(entries, observer){

  entries.forEach(entry => {   
    
    if (!entry.isIntersecting) {
      
return;
    } else {

      

     if (entry.target.attributes.name.value === "block1"&&leftBool) {
      
       blocks[0].scrollIntoView({inline: 'center',behavior: 'smooth'})
      
      
       
       
  
       
       
     }    
    if (entry.target.attributes.name.value  == 'block2'&&rightBool ) {
      
      blocks[1].scrollIntoView({inline: 'center',behavior: 'smooth'}) 
      
      
    
      
     }

    if (entry.target.attributes.name.value == 'block3'&&leftBool) {
     
       blocks[1].scrollIntoView({inline: 'center',behavior: 'smooth'})
      
       
        
      
    }
    if (entry.target.attributes.name.value =='block4'&&rightBool ) {
      
       blocks[2].scrollIntoView({inline: 'center', behavior: 'smooth'}) 
       
      
       
     
}}})
  
}
, option)



scrollBlocks.forEach(block => {
    observer.observe(block);})
}
