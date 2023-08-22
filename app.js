// import {execTyping } from  "./functions/typingFunction.js";
import "./functions/changeLanguage.js"
// import './functions/animateBoxes.js'
import './functions/getFormInfo.js'

document.addEventListener('DOMContentLoaded', () => {
    initApp()
})

function initApp() {
    console.log('APP IS INITIALIZED') 
    // execTyping()
    

    document.getElementById('custom-form').addEventListener('submit', function(e) {
      e.preventDefault()
      getFormInfo()
    })
    
    window.onscroll = ()  => {
        console.log('scrolling')
        showGoToTopButton()
        
      };

      document.getElementById('btn-top').addEventListener('click', scrollToTheTop)
        
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
  ]

  const opacityToZero = [
    { opacity: 1 },
    { opacity: 0 }
  ]
  
    
  const btnTime = {
    duration: 400,
    iterations: 1,
  }

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    console.log('now u see it')
    if (!hasScrolledBefore) {
      mybutton.animate(opacityToOne, btnTime)
      hasScrolledBefore = true
      mybutton.style.opacity = 1
    }
  } else {
    if (hasScrolledBefore) {
      hasScrolledBefore = false
      mybutton.animate(opacityToZero, btnTime)
      mybutton.style.opacity = 0;
    }
  }

}









