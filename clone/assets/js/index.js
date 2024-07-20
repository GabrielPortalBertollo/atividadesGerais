let selectedCarousel=0;
document.querySelector("#rightButton").onclick=changeCarousel;
document.querySelector("#leftButton").onclick=changeCarousel;

function changeCarousel() {
    if(selectedCarousel==0){selectedCarousel=1}
    else{selectedCarousel=0}
    const ajax = new XMLHttpRequest()
    ajax.open('GET', './assets/json/carousel.json')
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            const JSONAbout = ajax.responseText
            const objJSONAbout = JSON.parse(JSONAbout)
            document.getElementById("carouselTitle").textContent=objJSONAbout[selectedCarousel].title;
            document.getElementById("carouselButtons").innerHTML="";
            if(selectedCarousel==0){
            let button1= document.createElement("button");
            button1.classList.add("purpleButton");
            button1.innerHTML=objJSONAbout[selectedCarousel].buttons[0];
            let button2= document.createElement("button");
            button2.classList.add("normalButton");
            button2.innerHTML=objJSONAbout[selectedCarousel].buttons[1];
            document.getElementById("carouselButtons").append(button1,button2);
            }
            else{
            let button1= document.createElement("button");
            button1.classList.add("normalButton");
            button1.innerHTML=objJSONAbout[selectedCarousel].buttons[0];
            document.getElementById("carouselButtons").append(button1);
            }
        }
    }
    ajax.send()
}