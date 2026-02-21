export function gridCenterStuff(){
const centerGrid = document.querySelector('.centerGrid')
const grid = document.querySelector('.grid')

grid.addEventListener('mouseover',()=>{
    centerGrid.classList.remove('lonlyBigGrid')
})
grid.addEventListener('mouseout',()=>{
    centerGrid.classList.add('lonlyBigGrid')
})
centerGrid.addEventListener('mouseover',()=>{
    centerGrid.classList.add('lonlyBigGrid')
})
}