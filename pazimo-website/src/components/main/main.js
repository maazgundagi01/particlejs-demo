import { cards } from './cards.js'
import { s3 } from './sections/s3.js'
import { s4 } from './sections/s4.js'
import { s5 } from './sections/s5.js'
export function main(name) {
    return (`
        ${cards()}
        ${s3()}
        ${s4()}
        ${s5()}
    
    `)
}