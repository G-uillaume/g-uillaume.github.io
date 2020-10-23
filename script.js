let main = document.querySelector("main");

let image = ["img/Lille.jpg", "img/BXLVelo.jpg", "img/Cinquantenaire.jpg", "img/Noel.jpg", "img/Paris.jpg", "img/unsReichts.jpg"];
 
let numPhoto = Math.floor(Math.random()  * 6);

let photo = image[numPhoto]

window.addEventListener("load", function() {
    main.style.backgroundImage = "url(" + photo + ")";
    main.style.backgroundSize = "cover";
})