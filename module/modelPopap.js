

export function popapWindow(eventElement, HTMLforFORM){

eventElement.addEventListener("click", (evnt)=>{
  let openModel = false
  let closeModel = false
  
//Темный задний фон модельного окна//.
const backgruondStyle = document.createElement("style")
const blackBackground = document.createElement("div")
const bgrStyleCode=` 
.bgrStyleCode {
display:flex;
justify-content: center;
align-items: center;
background-color: rgba(255,255,255,.5);
width: 100%;
height: 100%;
position: absolute;
z-index: 1;
backdrop-filter: blur(2px);
}`
document.head.appendChild(backgruondStyle)
backgruondStyle.sheet.insertRule(bgrStyleCode,0)
blackBackground.classList.add("bgrStyleCode")
document.body.appendChild(blackBackground)
///////////////////////////////////.



//Модельное окно///////////////////.
const styleModel = document.createElement("style")
const model = document.createElement("div")
const styleCodeModel = `
.styleCodeModel {
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
border:1px solid white;
border-radius:10px;
background-color: black;
min-width: 500px;
min-height: 600px;
z-index: 999;

}`
document.head.appendChild(styleModel)
styleModel.sheet.insertRule(styleCodeModel,0)
model.classList.add("styleCodeModel")
blackBackground.appendChild(model)
 model.innerHTML= HTMLforFORM;
//////////////////////////////////.
openModel = true
closeModel = true





// Кнопка закрытия модельного окна////////
blackBackground.addEventListener("click", (evnt)=>{
 
    document.body.removeChild(blackBackground)


})

})

}
