let main = document.querySelector("main");

let tabImages = ["img/Lille.jpg", "img/BXLVelo-compressed.jpg", "img/Cinquantenaire-compressed.jpg", "img/Noel.jpg", "img/Paris-compressed.jpg", "img/UnsReichts-compressed.jpg"];
 
let indexPhoto = Math.floor(Math.random()  * tabImages.length);

let photo = tabImages[indexPhoto]

window.addEventListener("load", function() {
    main.style.backgroundImage = "url(" + photo + ")";
    main.style.backgroundSize = "contain";
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPosition= "center";
})