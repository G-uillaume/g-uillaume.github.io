let main = document.querySelector("main");

let tabImages = ["https://i.pinimg.com/originals/78/71/5e/78715e76ef75d729e3e07f0423e1f9b9.jpg", "https://cdn.pixabay.com/photo/2016/04/19/01/00/chalkboard-1337809_960_720.jpg", "img/Lille.jpg", "img/BXLVelo-compressed.jpg", "img/Cinquantenaire-compressed.jpg", "img/Noel.jpg", "img/Paris-compressed.jpg", "img/UnsReichts-compressed.jpg"];
 


// window.addEventListener("load", function() {
//     main.style.backgroundImage = "url(" + photo + ")";
//     main.style.backgroundSize = "contain";
//     // main.style.backgroundRepeat = "no-repeat";
//     main.style.backgroundPosition= "center";
// })

const loadImg = () => {
    let indexPhoto = Math.floor(Math.random()  * tabImages.length);
    let photo = tabImages[indexPhoto]
    main.style.backgroundImage = "url(" + photo + ")";
    main.style.backgroundSize = "cover";
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPosition= "center";
    setTimeout(loadImg, 5000)
}

loadImg()