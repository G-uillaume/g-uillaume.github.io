let main = document.querySelector("main");

let image = ["img/Lille.jpg", "img/BXLVelo.jpg", "img/Cinquantenaire.jpg", "img/Noel.jpg", "img/Paris.jpg", "img/UnsReichts.jpg"];
 
let numPhoto = Math.floor(Math.random()  * 6);

let photo = image[numPhoto]

window.addEventListener("load", function() {
    main.style.backgroundImage = "url(" + photo + ")";
    main.style.backgroundSize = "contain";
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPosition= "center";
})