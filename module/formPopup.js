export function initFormPopup(HTMLforFORM, initFormCallback) {
  // Добавляем стили один раз
  const styleElement = document.createElement("style");
  styleElement.textContent = `
.bgrStyleCode {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(2px);
  cursor: pointer;
}
.styleCodeModel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
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
}`;
  document.head.appendChild(styleElement);

  // Делегирование событий - ловим клики на document
  document.addEventListener('click', (e) => {
    const button = e.target.closest('[id="buyButton"]');
    if (button) {
      e.preventDefault();
      openModal(e, HTMLforFORM, initFormCallback);
    }
  });

  function openModal(evnt, HTMLforFORM, initFormCallback) {
    // Находим родительский блок кнопки
    const parentBlock = evnt.target.closest('.blocks');

    const blackBackground = document.createElement("div");
    blackBackground.classList.add("bgrStyleCode");

    // Добавляем фон внутрь родительского блока
    if (parentBlock) {
      parentBlock.style.position = 'relative';
      parentBlock.appendChild(blackBackground);
    } else {
      document.body.appendChild(blackBackground);
    }

    // Модельное окно
    const model = document.createElement("div");
    model.classList.add("styleCodeModel");

    // Добавляем кнопку закрытия (крестик)
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times;";

    blackBackground.appendChild(model);
    model.appendChild(closeBtn);
    model.innerHTML = HTMLforFORM;

    // Функция закрытия модального окна
    function closeModelWindow() {
      if (blackBackground.parentNode) {
        blackBackground.parentNode.removeChild(blackBackground);
      }
    }

    // Вызываем инициализацию формы после вставки HTML
    if (initFormCallback) initFormCallback(closeModelWindow);

    // Закрытие по клику на крестик
    closeBtn.addEventListener("click", closeModelWindow);

    // Закрытие по клику вне формы (на фон)
    blackBackground.addEventListener("click", (e) => {
      if (e.target === blackBackground) {
        closeModelWindow();
      }
    });
  }
}
