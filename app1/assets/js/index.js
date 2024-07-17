let carouselImgs=[];
carouselImgs.push({link:"assets/images/SKPCarousel.jpg",name:"Soul Knight Prequel"});
carouselImgs.push({link:"assets/images/PKCarousel.jpg",name:"PostKnight 2"});
carouselImgs.push({link:"assets/images/SKCarousel.jpg",name:"Soul Knight"});
carouselImgs.push({link:"assets/images/COCCarousel.jpg",name:"Clash Of Clans"});
let selectedImage=0;

let leftButton= document.getElementById("left")
leftButton.addEventListener("click", function(){
let image=document.getElementById("carouselImage");
let name=document.getElementById("carouselNameGame");
selectedImage--;
selectedImage=verifySelected();
image.src=carouselImgs[selectedImage].link;
name.textContent=carouselImgs[selectedImage].name;
});

let rightButton= document.getElementById("right")
rightButton.addEventListener("click", function(){
let image=document.getElementById("carouselImage");
let name=document.getElementById("carouselNameGame");
selectedImage++;
selectedImage=verifySelected();
image.src=carouselImgs[selectedImage].link;
name.textContent=carouselImgs[selectedImage].name;
});



function verifySelected() {
    if(selectedImage<0){
        return 3;
    }
    else if(selectedImage>3){
        return 0;
    }
    else{return selectedImage}
}




let mode=document.getElementById("checkbox");
mode.addEventListener('change', function() {
    if (this.checked) {
        toWhiteMode();
    } else {
        toDarkMode();
    }
    
});


function toWhiteMode() {
    let body=document.getElementsByClassName("darkBody");//elemento body, preto para branco
    let textWTB=document.getElementsByClassName("darkModeCW");//textos brancos para preto
    let textBTW=document.getElementsByClassName("darkModeCB");//textos pretos para branco
    let title= document.getElementsByClassName("darkModeNW");//neon do titulo, branco para preto
    let cards= document.getElementsByClassName("darkModeBNW");//neon dos cards de branco para preto 
    let modes= document.getElementsByClassName("darkModeBNB");//neon da div dos modos de preto para branco
    let links= document.getElementsByClassName("hoverNW");//neon dos links ao passar o mouse, de branco para preto
    for (let i = body.length-1; i >= 0; i--) {
        body[i].classList.add("whiteBody");
        body[i].classList.remove("darkBody");
    }
    for (let i = textWTB.length-1; i >= 0; i--) {
        textWTB[i].classList.add("whiteModeCB");
        textWTB[i].classList.remove("darkModeCW");
    }
    for (let i = textBTW.length-1; i >= 0; i--) {
        textBTW[i].classList.add("whiteModeCW");
        textBTW[i].classList.remove("darkModeCB");
    }
    for (let i = title.length-1; i >= 0; i--) {
        title[i].classList.add("whiteModeNB");
        title[i].classList.remove("darkModeNW");
    }
    for (let i = cards.length-1; i >= 0; i--) {
        cards[i].classList.add("whiteModeBNB");
        cards[i].classList.remove("darkModeBNW");
    }
    for (let i = modes.length-1; i >= 0; i--) {
        modes[i].classList.add("whiteModeBNW");
        modes[i].classList.remove("darkModeBNB");
    }
    for (let i = links.length-1; i >= 0; i--) {
        links[i].classList.add("hoverNB");
        links[i].classList.remove("hoverNW");
    }
}

function toDarkMode() {
    let body=document.getElementsByClassName("whiteBody");//elemento body, branco para preto
    let textWTB=document.getElementsByClassName("whiteModeCB");//textos pretos para branco
    let textBTW=document.getElementsByClassName("whiteModeCW");//textos branco para pretos
    let title= document.getElementsByClassName("whiteModeNB");//neon do titulo, preto para branco
    let cards= document.getElementsByClassName("whiteModeBNB");//neon dos cards de preto para branco
    let modes= document.getElementsByClassName("whiteModeBNW");//neon da div dos modos de branco para preto
    let links= document.getElementsByClassName("hoverNB");//neon dos links ao passar o mouse, de preto para branco



    for (let i = body.length - 1; i >= 0; i--) {
        body[i].classList.add("darkBody");
        body[i].classList.remove("whiteBody");
    }
    
    for (let i = textWTB.length - 1; i >= 0; i--) {
        textWTB[i].classList.add("darkModeCW");
        textWTB[i].classList.remove("whiteModeCB");
    }
    
    for (let i = textBTW.length - 1; i >= 0; i--) {
        textBTW[i].classList.add("darkModeCB");
        textBTW[i].classList.remove("whiteModeCW");
    }
    
    for (let i = title.length - 1; i >= 0; i--) {
        title[i].classList.add("darkModeNW");
        title[i].classList.remove("whiteModeNB");
    }
    
    for (let i = cards.length - 1; i >= 0; i--) {
        cards[i].classList.add("darkModeBNW");
        cards[i].classList.remove("whiteModeBNB");
    }
    
    for (let i = modes.length - 1; i >= 0; i--) {
        modes[i].classList.add("darkModeBNB");
        modes[i].classList.remove("whiteModeBNW");
    }
    
    for (let i = links.length - 1; i >= 0; i--) {
        links[i].classList.add("hoverNW");
        links[i].classList.remove("hoverNB");
    }
    
}