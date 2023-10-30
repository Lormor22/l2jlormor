function cerrar_todo(){

    let elemento1 = document.getElementById("div1");
    elemento1.style.height = "0px"

    let elemento2 = document.getElementById("div2");
    elemento2.style.height = "0px"

    let elemento3 = document.getElementById("div3");
    elemento3.style.height = "0px"

}


function mostrar_elemento_1(){

    cerrar_todo();

    let mostrar_elemento_1 = document.getElementById("div1");
    mostrar_elemento_1.style.height = "200px";

}
function mostrar_elemento_2(){

    cerrar_todo();

    let mostrar_elemento_2 = document.getElementById("div2");
    mostrar_elemento_2.style.height = "200px";

}
function mostrar_elemento_3(){

    cerrar_todo();

    let mostrar_elemento_3 = document.getElementById("div3");
    mostrar_elemento_3.style.height = "200px";

}





let boton_cancel = document.getElementById("cancel");
    boton_cancel.addEventListener("click" , mostrar_elemento_1);

let boton_disarm = document.getElementById("disarm");
boton_disarm.addEventListener("click" , mostrar_elemento_2);

let boton_heavy = document.getElementById("heavy");
boton_heavy.addEventListener("click" , mostrar_elemento_3);



