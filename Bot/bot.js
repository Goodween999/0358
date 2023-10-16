// ==UserScript==
// @name         Bot for Bing 1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot
// @author       Kazakov Dmitri
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let searchBtn = document.getElementById("search_icon");
let input = document.getElementsByName("q")[0]; 
let keywords = ["Купить новый автомобиль", 
                "Автомобили из Китая", 
                "Купить грузовик",
                "Купить автомобиль с пробегом"];
let keyword = keywords[getRandom(0, keywords.length)]

if (searchBtn !== null) {
  input.value = keyword; 
  searchBtn.click();
} else {
for (let i = 0; i < links.length; i++) {
  if (links[i].href.includes("auto.ru")) { 
    let link = links[i];
    console.log("Нашел строку!" + link);
    link.click();
    break;
  }
}
}

function getRandom(min, max) {
return Math.floor(Math.random() * (max - min) + min);  
}
