let main = document.querySelector("main");

let tabImages = ["img/Lille.jpg", "img/BXLVelo.jpg", "img/Cinquantenaire.jpg", "img/Noel.jpg", "img/Paris.jpg", "img/UnsReichts.jpg", /*"https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/fbbe4609-1b98-45e7-8d0c-ea0cc223e43f/d70d0vr-7c2d1f04-ab11-4e37-8f02-33995d1db2cf.png"/*, "https://cdn.pixabay.com/photo/2017/11/16/09/32/matrix-2953869_960_720.jpg", "https://cdn.pixabay.com/photo/2016/03/25/01/21/abstract-1278017_960_720.jpg"*/];
 
let indexPhoto = Math.floor(Math.random()  * tabImages.length);

let photo = tabImages[indexPhoto]

window.addEventListener("load", function() {
    main.style.backgroundImage = "url(" + photo + ")";
    main.style.backgroundSize = "contain";
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPosition= "center";
})