import { header } from './components/header/header.js'
import { main } from './components/main/main.js'
import { footer } from './components/footer/footer.js'

export function app() {
    return (`
    <div class='app'>
        ${header(`PAZIMO CONTINENTAL RESTAURANTS & FINE DINING`)}                       <!-- //props example -->
        ${main()}
        ${footer()}
    </div>
    `)
}