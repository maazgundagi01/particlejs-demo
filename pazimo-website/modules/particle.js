import { component } from './particle-root.js'
export function particle(molecule) {
    return (new component(molecule))
}

export const render = (part) => { return (part.createcomponent()) }