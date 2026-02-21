const portfolioDiv= document.querySelector('.portfolio') 
import {dbObject} from '../db/dbObject'
export function createGods() {
  
  const DB =dbObject;
  

  for (let i = 0; i < DB.length; i++){



const god = document.createElement('div');
god.classList.add('god');
portfolioDiv.appendChild(god);

const godPic = document.createElement('img');
godPic.classList.add('portfolioPic');
godPic.src = `${DB[i].Pic}`;
god.appendChild(godPic);

const godBlackDiv = document.createElement('div');
godBlackDiv.classList.add('god-black-div');
god.appendChild(godBlackDiv);

const godH1 = document.createElement('h6');
godH1.classList.add('portfolioH1');
godH1.textContent = `${DB[i].h1}`;
godBlackDiv.appendChild(godH1);

const godDesription = document.createElement('p');
godDesription.classList.add('portfolioDesription');
godDesription.textContent = `${DB[i].descreption}`;
godBlackDiv.appendChild(godDesription);
    //menu event
    god.addEventListener('click', ()=> {
      const menuDescription= document.querySelector('#menuDesc')
      const URLmenu = document.querySelector('#portfolio-menu-buttons')
      const h1Menu= document.querySelector('#h1Menu')
      const nameMenuSite = document.querySelector('#nameMenuSite')
      const closeMenuX = document.querySelector('#closeMenuP')
      const bigPic = document.querySelector('#bigPic')
      const menuDiv = document.querySelector('.portfolio-menu-div')
      const menuDiv2 = document.querySelector('.portfolio-menu-div2')
	    console.log(bigPic)
      // Event Move
     console.log(h1Menu);
     h1Menu.innerHTML = `${DB[i].h1}`;
     menuDescription.innerHTML = `${DB[i].descreption}`;
     URLmenu.setAttribute('href',`${DB[i].URL}`);
     nameMenuSite.innerHTML = `${DB[i].URL}`;
	    bigPic.src = `${DB[i].bigImg}`; 
	    menuDiv.classList.add("portfolio-menu-div-ON")
     menuDiv2.classList.toggle("portfolio-menu-div-ON2")

    // closeMenuX.addEventListener('click',()=>{
     // menuDiv.classList.toggle("portfolio-menu-div-ON")
     // menuDiv2.classList.toggle("portfolio-menu-div-ON2") })

     menuDiv.addEventListener("click",function onesAndDead(){
     menuDiv.classList.toggle("portfolio-menu-div-ON")
     menuDiv2.classList.toggle("portfolio-menu-div-ON2")
    menuDiv.removeEventListener("click", onesAndDead);
        })
      })
    }
}
