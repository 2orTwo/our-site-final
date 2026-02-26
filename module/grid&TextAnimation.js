export function textAnimation(blocks) {
  const textActive = document.querySelectorAll(".ivizible");
  const grid = document.querySelectorAll(".grid");
  const gridText = document.querySelectorAll(".findTes");
  const laserDiv = document.querySelector('.laserDiv');
  const contentBlock2 = document.querySelector('.contentBlock2');

  let block2Animated = false;

  // style for grid text animation
  const styleElement = document.createElement('style');
  const cssRule = `.textGrid {
    color: red;
    font-size: 20px;
    animation: gridTextAnimation 1s ease-in-out 0.2s 1 normal both
  }`;
  document.head.appendChild(styleElement);
  styleElement.sheet.insertRule(cssRule, 0);

  const option = { threshold: 1.0 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // Text animation
      textActive.forEach(text => {
        text.classList.remove("ivizible");
      });

      // block 2 animation
      if (entry.target.attributes.name.value === "block2" && !block2Animated) {
        block2Animated = true;
        grid[0].style.opacity = 1;
        grid[0].style.animation = "gridAnimation 1s ease-in-out 0s 1 normal both";
        gridText.forEach(text => {
          text.classList.add("textGrid");
        });

        // laser animation
        laserDiv.style.animation = "laser 2s ease-in-out 2s 1 normal both";
        contentBlock2.style.animation = "contentBlockAnimation 2s ease-in-out 2s 1 normal both";

        // Запуск анимации заголовка "Космический опыт"
        const cosmicTitle = document.querySelector('.cosmic-title');
        if (cosmicTitle) {
          cosmicTitle.classList.add('animate');
        }
      }
    });
  }, option);

  blocks.forEach(block => {
    observer.observe(block);
  });
}


