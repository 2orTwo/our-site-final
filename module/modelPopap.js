

export function popapWindow(eventElements, HTMLforFORM, initFormCallback){

// Перебираем все элементы (если это коллекция)
if (eventElements && eventElements.length) {
  eventElements.forEach(el => {
	  
    el.addEventListener("click", (evnt)=>{
	    evnt.preventDefault();
      openModal(evnt, HTMLforFORM, initFormCallback)
    })
  })
} else if (eventElements) {
  eventElements.addEventListener("click", (evnt)=>{
    openModal(evnt, HTMLforFORM, initFormCallback)
  })
}

function openModal(evnt, HTMLforFORM, initFormCallback) {

//Темный задний фон модельного окна//.
const backgruondStyle = document.createElement("style")
const blackBackground = document.createElement("div")
const bgrStyleCode=`
.bgrStyleCode {
display:flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.7);
width: 100%;
height: 100%;
position: absolute;
z-index: 1;
backdrop-filter: blur(2px);
cursor: pointer;
}`
document.head.appendChild(backgruondStyle)
backgruondStyle.sheet.insertRule(bgrStyleCode,0)
blackBackground.classList.add("bgrStyleCode")
document.body.appendChild(blackBackground)
///////////////////////////////////.



//Модельное окно///////////////////.
const styleModel = document.createElement("style")
const model = document.createElement("div")
const styleCodeModel = `.styleCodeModel {
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
position: relative;
}
.close-btn {
position: absolute;
top: 10px;
right: 15px;
font-size: 28px;
font-weight: bold;
color: #fff;
cursor: pointer;
line-height: 1;
transition: color 0.3s;
}
.close-btn:hover {
color: #00ff88;
}`

document.head.appendChild(styleModel)
styleModel.textContent = styleCodeModel
model.classList.add("styleCodeModel")

// Добавляем кнопку закрытия (крестик)
const closeBtn = document.createElement("span")
closeBtn.classList.add("close-btn")
closeBtn.innerHTML = "&times;"

blackBackground.appendChild(model)
model.appendChild(closeBtn)
model.innerHTML = HTMLforFORM;

// Функция закрытия модального окна
function closeModelWindow() {
  if (blackBackground.parentNode) {
    document.body.removeChild(blackBackground)
  }
}

// Вызываем инициализацию формы после вставки HTML, передаём функцию закрытия
if (initFormCallback) initFormCallback(closeModelWindow);
//////////////////////////////////.

// Закрытие по клику на крестик
closeBtn.addEventListener("click", closeModelWindow)

// Закрытие по клику вне формы (на фон)
blackBackground.addEventListener("click", (e)=>{
  if (e.target === blackBackground) {
    closeModelWindow()
  }
})

}
}
