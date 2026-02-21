export function leftScroll() {
  //элеметы

  const body = document.body;
  const scrollBlocks = document.querySelectorAll(".scrollBlocks");
  const blocks = document.querySelectorAll(".blocks");
  const portfilio = document.querySelector(".portfolio");
  const portfolioBlock = document.querySelector(".prevPortfolio2");
  const contentBlock = document.querySelector(".contentBlock");
  const closePortfolio = document.querySelector("#closePortfolio");
  // const contentBlock3 = document.querySelector(".contentBlock3");

  var lastScrollPosition = document.documentElement.scrollLeft;
  let leftBool = false;
  let rightBool = false;
  let scrollDetals = "normal";
  let opasity = 1;
  let mouveUp = 0;
  let scale = 100;

 

  /*w
  функция для скролла который будет меняться при прокрутке
  */

  /* 
  Скролл в левую сторону
  */
  blocks.forEach((block) => {
    block.addEventListener("wheel", (evt) => {
      let e = evt;
 /*
     Отслеживание скролла влево и вправо / вверх и вниз
    */
    
    //  var currentScrollPosition = document.documentElement.scrollLeft;
    //    if (currentScrollPosition > lastScrollPosition) {
    //           // Прокрутка вправо
    //           rightBool = true;
    //           leftBool = false;
    //         } else if (currentScrollPosition < lastScrollPosition) {
    //           // Прокрутка влево
    //           rightBool = false;
    //           leftBool = true;
    //         }
    //         lastScrollPosition = currentScrollPosition;
            //////////////////////////////////////////////////////////////



            /*
            переключение между типами скролла
            */
 document.addEventListener('keydown', function(event) {
   if (e.key === 'Escape') {
       // Здесь вы можете добавить код, который будет выполнен при нажатии кнопки "esc"
       console.log('Escape key pressed');
       scrollDetals = "end";
   }
});

switch (scrollDetals) {
  case "normal":
    e.preventDefault();
    window.scrollBy(-e.deltaY, 0);
    break;
    case "down":         
            opasity -= 0.3 ;
            mouveUp -= 20;
            scale += 3;
            portfolioBlock.style.opacity = opasity; 
            portfolioBlock.style.transform = `translateY(${mouveUp}px)`;
            if (scale <= 110) {
              // portfilio.style.transform = `translateY(-400px)`;
              portfilio.style.transform = `scale(${scale}%)`;
              portfilio.style.border = "none";
            }else{
              portfilio.classList.add('portfolioON')
              closePortfolio.style.display = 'block'
              // portfilio.style.width = "80vw";
              // portfilio.style.height = "250vh";
              // portfilio.style.top= "-30";
              // portfilio.style.left= "0";
              // scrollDetals = "end";
            }    break; 
            case "end":
              console.log('cousePortf')
              break;     
              default:
                // e.preventDefault();
                // window.scrollBy(-e.deltaY, 0);
              }
              
              closePortfolio.addEventListener('click', ()=>{
                portfilio.classList.remove('portfolioON')
                portfolioBlock.style.opacity = `1`; 
                closePortfolio.style.display = 'none'
                opasity = 1
                mouveUp = 0
                scale = 100
        portfilio.style.transform = `scale(${scale}%)`
        portfolioBlock.style.transform = `translateY(0)`;
        portfilio.style.border = "1px solid white";
        scrollDetals = "normal";
        console.log(scrollDetals)
      })
      /*
      передвижение блоков
    */

      ///////////////////////////////////////

      if (e.currentTarget.attributes.name.value === "block1" && e.wheelDeltaY < 0) {
        blocks[0].scrollIntoView({ inline: "center", behavior: "smooth" });
      }

      if (e.currentTarget.attributes.name.value === "block2" && e.wheelDeltaY < 0) { 
        blocks[0].scrollIntoView({ inline: "center", behavior: "smooth" });
        leftBool = false;
      }
      if (e.currentTarget.attributes.name.value === "block1" && e.wheelDeltaY > 0) {
        
       
        blocks[1].scrollIntoView({ inline: "center", behavior: "smooth" });

      }

      if (e.currentTarget.attributes.name.value == "block2" && e.wheelDeltaY > 0) {
        blocks[2].scrollIntoView({ inline: "center", behavior: "smooth" });
        rightBool = false;
      }

      if (e.currentTarget.attributes.name.value == "block3" && e.wheelDeltaY < 0 && scrollDetals === "normal") {
        
        
        
          blocks[1].scrollIntoView({ inline: "center", behavior: "smooth" });
        
        

      }
      if (e.currentTarget.attributes.name.value == "block3" && e.wheelDeltaY > 0 && scrollDetals === "normal") {   
        
        blocks[2].scrollIntoView({ inline: "center", behavior: "smooth" });
       
        
      }
      portfilio.addEventListener("mouseover",()=>{

        scrollDetals = "down";
        console.log(scrollDetals)

        portfilio.addEventListener("wheel",()=>{
          document.body.style.overflowX = "hidden";          
          scrollDetals = "down";
          console.log('yes')
        })
        portfilio.addEventListener("mouseout",()=>{
          scrollDetals = "normal";
        })
      })
    });
  });
}






// case "down":         
//             opasity -= 0.07;
//             mouveUp -= 15;
//             scale += 3;
//             portfolioBlock.style.opacity = opasity; 
//             portfolioBlock.style.transform = `translateY(${mouveUp}px)`;
//             if (scale <= 130) {
//               // portfilio.style.width = "80vw";
//             portfilio.style.transform = `scale(${scale}%)`;
//             portfilio.style.border = "none";
//             }else{
//               portfilio.style.width = "80vw";
//               portfilio.style.height = "250vh";
//               portfilio.style.top= "-30";
//               portfilio.style.left= "0";
//               scrollDetals = "end";
//             }    break; 
//             case "end":
//               document.addEventListener('keydown', function(event) {
//                 if (event.key === 'Escape') {
//                     // Здесь вы можете добавить код, который будет выполнен при нажатии кнопки "esc"
//                     console.log('Escape key pressed');
//                     scrollDetals = "normal";
