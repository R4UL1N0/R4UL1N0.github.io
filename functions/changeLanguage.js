import { translation as en } from './languages/en'
import { translation as es } from './languages/es'
import { translation as pt } from './languages/pt'
import { translation as fr } from './languages/fr'


export function changeLanguage(language) {

    switch(language) {
        case "es":
            return es
        case "en":
            return en
        case "pt":
            return pt
        case "fr":
            return fr 
    }
}
