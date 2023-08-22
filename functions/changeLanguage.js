const languageIcons = document.querySelectorAll(".language-icon")
const currentLanguage = localStorage.getItem('language') || "en"
console.log(currentLanguage)

languageIcons.forEach((el) => {
    el.addEventListener('click', (e) => {
    console.log('Language Icon Clicked')
    localStorage.setItem('language', e.target.lang)
    changeLanguage(e.target.lang)
    console.log(e.target.lang)
})
})

function changeLanguage(lang) {
    console.log(`from changeLanguage() : ${lang}`)
    fetch(`languages/${lang}.json`)
        .then((data) => data.json())
        .then((json) => {
            console.log(json)

            const elementsToUpdate = document.querySelectorAll('[data-translate]');
            elementsToUpdate.forEach(element => {
                const translationKey = element.getAttribute('data-translate');
                element.innerText = json[translationKey];
            });
        })

}

changeLanguage(currentLanguage)
