let punto1 = document.getElementById("puntito1");
let punto2 = document.getElementById("puntito2");
let punto3 = document.getElementById("puntito3");
let index = 1;

function  pintar_todas(){
    punto1.style.backgroundColor  = "#353535";
    punto2.style.backgroundColor  = "#353535";
    punto3.style.backgroundColor  = "#353535";

}
function pintar_cero(){
    pintar_todas()
    punto1.style.backgroundColor  = "#8a8787";
}
function pintar_uno(){
    pintar_todas()
    punto2.style.backgroundColor  = "#8a8787";
}
function pintar_dos(){
    pintar_todas()
    punto3.style.backgroundColor  = "#8a8787";
}


function go_to_cero(){
    index = 0;
    pintar_todas();
    pintar_cero();
    cambio();
}
function go_to_uno(){
    index = 1;
    pintar_todas();
    pintar_uno();
    cambio();
}
function go_to_dos(){
    index = 2;
    pintar_todas();
    pintar_dos();
    cambio();
}



let sliderInner = 
document.querySelector(".slider--inner");



let images = sliderInner.querySelectorAll("img");


function cambio(){

    let percentage = index * -100;

    sliderInner.style.transform = 
    "translateX(" + percentage + "%)";
    index++;
    if(index > (images.length - 1)){
        index = 0;
    }
}





setInterval(function () {
    
    pintar_todas();

    if(index == 0){
        pintar_cero();
    }
    if(index == 1){
        pintar_uno();
    }
    if(index == 2){
        pintar_dos();
    }   
    cambio();
    

},10000);



    punto1.addEventListener("click" , go_to_cero);
    punto2.addEventListener("click" , go_to_uno);
    punto3.addEventListener("click" , go_to_dos);

