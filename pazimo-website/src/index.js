import { particle, render } from '../modules/particle.js'
import { app } from './app.js'

function index() {
    return (`
        <div class='app'>
            ${app()}
        </div>        
    `)
}
const master = particle(`
        ${index()}
     `)
render(master)