import { execTyping } from "./functions/typingFunction.js";
import { animateBoxes } from "./functions/animateBoxes.js";
// import { scrollToTheTop, hasScrolledBefore, showGoToTopButton } from './functions/scrollToTopButton.js' 
import { getFormInfo } from './functions/getFormInfo.js'


document.addEventListener('DOMContentLoaded', () => {
    initApp()
})

function initApp() {
    console.log('APP IS INITIALIZED') 
    let ranOnce = false  
    showGoToTopButton()
    
    document.getElementById('btn-top').addEventListener('click', scrollToTheTop)

    document.getElementById('custom-form').addEventListener('submit', function(e) {
      e.preventDefault()
      getFormInfo()
    })
    
    window.onscroll = ()  => {
        console.log('scrolling')
        execTyping()
        
        if (document.documentElement.scrollTop > 1800 && !ranOnce) {
          animateBoxes()
          ranOnce = true
        }
        // runOnScrollPosition(1500, animateBoxes)
        
      };
        
}   

function scrollToTheTop() {
  console.log('HI')
  window.scrollTo({top: 0, behavior: 'smooth'});
}

let hasScrolledBefore = false;

function showGoToTopButton() {
  let mybutton = document.getElementById("btn-top");

  const opacityToOne = [
      { opacity: 0 },
      { opacity: 1 }
    ];
  
    
    const btnTime = {
      duration: 2000,
      iterations: 1,
    }

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      mybutton.style.display = "block";
      if (!hasScrolledBefore) {
          mybutton.animate(opacityToOne, btnTime)
          hasScrolledBefore = true
      }
    } else {
      hasScrolledBefore = false
      mybutton.style.display = "none";

    }

}









