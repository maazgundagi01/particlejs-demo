import { nav } from './nav.js'
export function header(title) {

    return (`
        <div class="landing">
        <div class="heads">
            <header>
                <h4>PAZIMO</h4>
                ${nav()}
            </header>
        </div>
        <div class="s1">
            <p class="title1"> ${title} </p>
        </div>
    </div>
    `)
}
