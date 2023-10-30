function cabeza_zorak() {
    Toastify({
        text: "",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            fontSize:"30px",
            fontFamily:"Verdana",
            color:"white",
            background: "black"
        },

        node: document.createElement('div').appendChild(createCustomContent()),
    }).showToast();
    const toast = document.querySelector(".toastify");
    toast.style.border = "2px solid #FFFFF";
    toast.style.borderRadius = "10px";
    toast.style.padding = "10px";
}

function createCustomContent() {
    const customContent = document.createElement('div');
    customContent.style.display = "flex";
    customContent.style.alignItems = "center";
    const imgElement = document.createElement('img');
    imgElement.src = "https://cdn.betterttv.net/emote/5c548025009a2e73916b3a37/3x.gif";
    imgElement.alt = "Cara zorak";
    imgElement.width = 50;
    imgElement.height = 50;
    customContent.appendChild(imgElement);

    const textElement = document.createElement('span');
    textElement.textContent = "Baneado!";
    textElement.style.fontSize = "30px";
    textElement.style.color = "white";
    customContent.appendChild(textElement);

    return customContent;
}





let botoncrear = document.getElementById("zorakbeza");
    botoncrear.addEventListener("click" , cabeza_zorak);







    
