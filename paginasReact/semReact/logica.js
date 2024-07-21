let buttons= document.querySelectorAll(".button");
buttons.forEach((eventButton) => {
    eventButton.addEventListener("click" , function(){
        buttons.forEach(button=>button.classList.remove("clicked"));
        this.classList.add("clicked");
        changeContent(this.value);
    });
});

function changeContent(position){
    const ajax = new XMLHttpRequest()
    ajax.open('GET', './dados.json')
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            const JSONDados = ajax.responseText
            const objJSONDados = JSON.parse(JSONDados)
            let ul=document.getElementById("list");
            ul.innerHTML="";
            for (let i = 0; i < objJSONDados.length; i++) {
                let newLi= document.createElement("li");
                newLi.textContent=objJSONDados[position][i];
                ul.append(newLi);
            }
            
            
            
            /*document.getElementById("textAbout").textContent=objJSONAbout[selected].text;
            document.getElementById("imgAbout").src=objJSONAbout[selected].linkImg;*/
        }
    }
    ajax.send()
}