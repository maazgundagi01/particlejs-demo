import { useState } from "../../modules/particle-state.js"
const body = document.getElementById("root");
let createID = 0;
let styleID = 0;

function formatter(myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export class component {
    constructor(content) {
        this.content = content;
        this.uIdPrefix = "component";
    }
    createcomponent() {
        let content = this.content;
        // console.log(content);
        const component = document.createElement("div");
        let uIdPrefix = this.uIdPrefix;
        component.dataset.createID = `${uIdPrefix}${createID}`;
        component.classList.add(`${uIdPrefix}${createID}`);
        component.classList.add(`component`);
        component.innerHTML = `${content}`;
        body.append(component);
        // console.log("function envoked");
        createID++
    }
    componentStyle(elementID, style) {
        let subject = Array.from(document.getElementsByClassName(`${elementID}`));
        // let styleKeys = ""; //legacy variables
        let styleKeysArr = [];
        let styleValuesArr = [];
        // let uIdPrefix = this.uIdPrefix; //legacy variables
        subject = subject[0];
        // console.log(subject);
        // console.log(style);
        for (const [key, value] of Object.entries(style)) {
            styleKeysArr.push(`${formatter(key)}`);
            styleValuesArr.push(value);
            style += `${formatter(key)}: ${value};`;
        }
        // console.log(styleKeysArr);
        // console.log(styleValuesArr);
        let styleText = `margin:0;padding:0;`
        function setStyles(target) {
            for (let i = 0; i < styleKeysArr.length; i++) {
                styleText += styleKeysArr[i] + ":" + styleValuesArr[i] + ";";
            }
            // console.log(styleText);
            target.style.cssText += styleText;
        }
        setStyles(subject);
        styleID++;
    }
}


