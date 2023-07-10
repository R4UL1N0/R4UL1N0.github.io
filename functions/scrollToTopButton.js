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