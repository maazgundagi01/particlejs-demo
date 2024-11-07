import { component } from './particle-root.js'
export function particle(molecule) {
    return (new component(molecule))
}

// const particlesJS = window.particlesJS;
// particlesJS.load('particles-js', 'particles.json', null);

export const render = (part) => { return (part.createcomponent()) }