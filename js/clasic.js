document.addEventListener("DOMContentLoaded", function() {
    // Cuando la página se carga, establece el valor seleccionado en 1
    document.getElementById("seleccion_othel").value = "1";
    document.getElementById("seleccion_aeore").value = "1";
    document.getElementById("seleccion_feoh").value = "1";
    document.getElementById("seleccion_iss").value = "1";
    document.getElementById("seleccion_sigel").value = "1";
    document.getElementById("seleccion_tyrr").value = "1";
    document.getElementById("seleccion_wynn").value = "1";
    document.getElementById("seleccion_yul").value = "1";

    // Llama a la función othell_rune para mostrar la imagen y resultados iniciales
    othel_rune();
    aeore_rune();
    feoh_rune();
    iss_rune();
    sigel_rune();
    tyrr_rune();
    wynn_rune();
    yul_rune();
});








function othel_rune() {
    // Obtén el elemento select
    let seleccion_othel = document.getElementById("seleccion_othel");
    
    // Obtén la opción seleccionada
    let opcionSeleccionada = seleccion_othel.options[seleccion_othel.selectedIndex];
    let numero = parseInt(opcionSeleccionada.value);

    
    if (numero >= 1 && numero <= 13) {
        
        let wtfNCsoft;

        if(numero == 11){
            wtfNCsoft = 1;
        }else{
            wtfNCsoft = 0;
        }
        
        // cuenta
        let resultado = 75 + (numero - 1) * 25;
        let resultado2 = (80 + (numero - 1) * 17) + wtfNCsoft;

        
        // Muestra el resultado en la página
        let resultadoElement = document.getElementById("othel_resultado");
        resultadoElement.textContent = "+" + resultado + " P.Critical Rate";

        let resultadoElement2 = document.getElementById("othel_resultado2");
        resultadoElement2.textContent =  "+" + resultado2 + " P.Critical Damage";
    
    if(numero >= 8 && numero <= 13){

        let wtfNCsoft2;

        if (numero == 11 || numero == 12){
            wtfNCsoft2 = 1;
        }else if(numero == 13){
            wtfNCsoft2 = 2;
        }
        else{
            wtfNCsoft2 = 0;
        }
        let resultado3 = (269 + (numero - 8) * 28 )- wtfNCsoft2;
        let resultado4 = (22 + (numero - 8) * 3);

        // Muestra el resultado en la página
        let resultadoElement = document.getElementById("othel_resultado3");
        resultadoElement.textContent = "+" +  resultado3 + " P.Critical Rate";

        let resultadoElement2 = document.getElementById("othel_resultado4");
        resultadoElement2.textContent = "+" +  resultado4 + "% Blow.Rate";
    }else{
        let resultadoElement = document.getElementById("othel_resultado3");
        resultadoElement.textContent =  "-";

        let resultadoElement2 = document.getElementById("othel_resultado4");
        resultadoElement2.textContent = "-";
    }

    let div_othel = document.getElementById(`img_othel`);
    div_othel.innerHTML = ""; 
    let img_othel = document.createElement("img");
    img_othel.src = `../img/clasic/othel_/othel_lv${numero}.png`;
    img_othel.alt = `othel ${numero}`;
    div_othel.appendChild(img_othel);
    }
}


function aeore_rune() {
    // Obtén el elemento select
    let seleccion_aeore = document.getElementById("seleccion_aeore");
    
    // Obtén la opción seleccionada
    let opcionSeleccionada = seleccion_aeore.options[seleccion_aeore.selectedIndex];
    let numero = parseInt(opcionSeleccionada.value);

    
    if (numero >= 1 && numero <= 13) {
        
        if(numero == 1){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +0.57";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +15.1";
        }
        if(numero == 2){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +0.88";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +18.5";
        }
        if(numero == 3){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +0.92";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +22.4";
        }
        if(numero == 4){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +0.95";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +24.5";
        }
        if(numero == 5){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +0.98";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +30.1";
        }
        if(numero == 6){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +1.01";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +35";
        }
        if(numero == 7){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +1.38";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +38.9";
        }
        if(numero == 8){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +1.41";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +42.7";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +1.44";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +45.3";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +1.47";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +50.6";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +1.5";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +54.4";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +1.53";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +58.2";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("aeore_resultado");
            resultadoElement.textContent = "HP Recovery bonus +1.96";

            let resultadoElement2 = document.getElementById("aeore_resultado2");
            resultadoElement2.textContent =  "Healing Power +62.1";
        }
        
        
    
    if(numero >= 8 && numero <= 13){

        
        if(numero == 8){
            let resultadoElement = document.getElementById("aeore_resultado3");
            resultadoElement.textContent = "MP Recovery bonus +9.5%";

            let resultadoElement2 = document.getElementById("aeore_resultado4");
            resultadoElement2.textContent =  "Received healing +46";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("aeore_resultado3");
            resultadoElement.textContent = "MP Recovery bonus +11%";

            let resultadoElement2 = document.getElementById("aeore_resultado4");
            resultadoElement2.textContent =  "Received healing +54";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("aeore_resultado3");
            resultadoElement.textContent = "MP Recovery bonus +12.5%";

            let resultadoElement2 = document.getElementById("aeore_resultado4");
            resultadoElement2.textContent =  "Received healing +62";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("aeore_resultado3");
            resultadoElement.textContent = "MP Recovery bonus +14%";

            let resultadoElement2 = document.getElementById("aeore_resultado4");
            resultadoElement2.textContent =  "Received healing +70";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("aeore_resultado3");
            resultadoElement.textContent = "MP Recovery bonus +15.5%";

            let resultadoElement2 = document.getElementById("aeore_resultado4");
            resultadoElement2.textContent =  "Received healing +78";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("aeore_resultado3");
            resultadoElement.textContent = "MP Recovery bonus +17%";

            let resultadoElement2 = document.getElementById("aeore_resultado4");
            resultadoElement2.textContent =  "Received healing +86";
        }
    }else{
        let resultadoElement = document.getElementById("aeore_resultado3");
        resultadoElement.textContent =  "-";

        let resultadoElement2 = document.getElementById("aeore_resultado4");
        resultadoElement2.textContent = "-";
    }
    let div_aeore = document.getElementById(`img_aeore`);
    div_aeore.innerHTML = ""; 
    let img_aeore = document.createElement("img");
    img_aeore.src = `../img/clasic/aeore_/aeore_lv${numero}.png`;
    img_aeore.alt = `aeore ${numero}`;
    div_aeore.appendChild(img_aeore);
}
}


function feoh_rune() {
    // Obtén el elemento select
    let seleccion_feoh = document.getElementById("seleccion_feoh");
    
    // Obtén la opción seleccionada
    let opcionSeleccionada = seleccion_feoh.options[seleccion_feoh.selectedIndex];
    let numero = parseInt(opcionSeleccionada.value);

    
    if (numero >= 1 && numero <= 13) {
        
        if(numero == 1){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +15.97, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +20";
        }
        if(numero == 2){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +19.84, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +27";
        }
        if(numero == 3){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +24.31, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +34";
        }
        if(numero == 4){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +30.48, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +41";
        }
        if(numero == 5){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +35.84, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +48";
        }
        if(numero == 6){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +49.24, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +55";
        }
        if(numero == 7){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +62.99, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +62";
        }
        if(numero == 8){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +75.86, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +69";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +87.22, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +76";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +99.39, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +83";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +112.26, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +90";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +125.66, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +97";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("feoh_resultado");
            resultadoElement.textContent = "M. Atk. +139.41, MP Consumption +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado2");
            resultadoElement2.textContent =  "M. Atk. +104";
        }
        
        
    
    if(numero >= 8 && numero <= 13){

        
        if(numero == 8){
            let resultadoElement = document.getElementById("feoh_resultado3");
            resultadoElement.textContent = "M. Critical Rate +10%";

            let resultadoElement2 = document.getElementById("feoh_resultado4");
            resultadoElement2.textContent =  "M. Atk. +84";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("feoh_resultado3");
            resultadoElement.textContent = "M. Critical Rate +11%";

            let resultadoElement2 = document.getElementById("feoh_resultado4");
            resultadoElement2.textContent =  "M. Atk. +92";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("feoh_resultado3");
            resultadoElement.textContent = "M. Critical Rate +12%";

            let resultadoElement2 = document.getElementById("feoh_resultado4");
            resultadoElement2.textContent =  "M. Atk. +100";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("feoh_resultado3");
            resultadoElement.textContent = "M. Critical Rate +13%";

            let resultadoElement2 = document.getElementById("feoh_resultado4");
            resultadoElement2.textContent =  "M. Atk. +104";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("feoh_resultado3");
            resultadoElement.textContent = "M. Critical Rate +14%";

            let resultadoElement2 = document.getElementById("feoh_resultado4");
            resultadoElement2.textContent =  "M. Atk. +108";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("feoh_resultado3");
            resultadoElement.textContent = "M. Critical Rate +15%";

            let resultadoElement2 = document.getElementById("feoh_resultado4");
            resultadoElement2.textContent =  "M. Atk. +112";
        }
    }else{
        let resultadoElement = document.getElementById("feoh_resultado3");
        resultadoElement.textContent =  "-";

        let resultadoElement2 = document.getElementById("feoh_resultado4");
        resultadoElement2.textContent = "-";
    }
    let div_feoh = document.getElementById(`img_feoh`);
    div_feoh.innerHTML = ""; 
    let img_feoh = document.createElement("img");
    img_feoh.src = `../img/clasic/feoh_/feoh_lv${numero}.png`;
    img_feoh.alt = `feoh ${numero}`;
    div_feoh.appendChild(img_feoh);
}
}


function iss_rune() {
    // Obtén el elemento select
    let seleccion_iss = document.getElementById("seleccion_iss");
    
    // Obtén la opción seleccionada
    let opcionSeleccionada = seleccion_iss.options[seleccion_iss.selectedIndex];
    let numero = parseInt(opcionSeleccionada.value);

    
    if (numero >= 1 && numero <= 13) {
        
        if(numero == 1){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +12%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +3.89";
        }
        if(numero == 2){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +12.72%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +5";
        }
        if(numero == 3){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +13.44%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +6.1";
        }
        if(numero == 4){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +14.16%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +7.2";
        }
        if(numero == 5){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +14.88%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +8.3";
        }
        if(numero == 6){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +15.6%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +9.4";
        }
        if(numero == 7){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +16.32%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +10.5";
        }
        if(numero == 8){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +17.04%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +11.6";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +17.76%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +12.7";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +18.48%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +13.8";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +19.2%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +14.9";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +19.92%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +16";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("iss_resultado");
            resultadoElement.textContent = "MP Recovery bonus +20.64%";

            let resultadoElement2 = document.getElementById("iss_resultado2");
            resultadoElement2.textContent =  "Max MP +17.1";
        }
        
        
    
    if(numero >= 8 && numero <= 13){

        
        if(numero == 8){
            let resultadoElement = document.getElementById("iss_resultado3");
            resultadoElement.textContent = "Casting Spd. +5%";

            let resultadoElement2 = document.getElementById("iss_resultado4");
            resultadoElement2.textContent =  "Speed +5";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("iss_resultado3");
            resultadoElement.textContent = "Casting Spd. +6%";

            let resultadoElement2 = document.getElementById("iss_resultado4");
            resultadoElement2.textContent =  "Speed +5.5";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("iss_resultado3");
            resultadoElement.textContent = "Casting Spd. +7%";

            let resultadoElement2 = document.getElementById("iss_resultado4");
            resultadoElement2.textContent =  "Speed +6";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("iss_resultado3");
            resultadoElement.textContent = "Casting Spd. +8%";

            let resultadoElement2 = document.getElementById("iss_resultado4");
            resultadoElement2.textContent =  "Speed +6.5";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("iss_resultado3");
            resultadoElement.textContent = "Casting Spd. +9%";

            let resultadoElement2 = document.getElementById("iss_resultado4");
            resultadoElement2.textContent =  "Speed +7";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("iss_resultado3");
            resultadoElement.textContent = "Casting Spd. +10%";

            let resultadoElement2 = document.getElementById("iss_resultado4");
            resultadoElement2.textContent =  "Speed +7.5";
        }
    }else{
        let resultadoElement = document.getElementById("iss_resultado3");
        resultadoElement.textContent =  "-";

        let resultadoElement2 = document.getElementById("iss_resultado4");
        resultadoElement2.textContent = "-";
    }
    let div_iss = document.getElementById(`img_iss`);
    div_iss.innerHTML = ""; 
    let img_iss = document.createElement("img");
    img_iss.src = `../img/clasic/iss_/iss_lv${numero}.png`;
    img_iss.alt = `iss ${numero}`;
    div_iss.appendChild(img_iss);
}
}


function sigel_rune() {
    // Obtén el elemento select
    let seleccion_sigel = document.getElementById("seleccion_sigel");
    
    // Obtén la opción seleccionada
    let opcionSeleccionada = seleccion_sigel.options[seleccion_sigel.selectedIndex];
    let numero = parseInt(opcionSeleccionada.value);

    
    if (numero >= 1 && numero <= 13) {
        
        if(numero == 1){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +20.2";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +73";
        }
        if(numero == 2){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +24.6";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +94";
        }
        if(numero == 3){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +29.8";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +129";
        }
        if(numero == 4){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +35.7";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +154";
        }
        if(numero == 5){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +42.6";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +185";
        }
        if(numero == 6){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +50.7";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +223";
        }
        if(numero == 7){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +57.9";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +249";
        }
        if(numero == 8){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +66.1";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +276";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +75.3";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +303";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +83.5";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +331";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +92.2";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +359";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +101.6";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +388";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("sigel_resultado");
            resultadoElement.textContent = "P. Def. +112.7";

            let resultadoElement2 = document.getElementById("sigel_resultado2");
            resultadoElement2.textContent =  "Max HP +418";
        }
        
        
    
    if(numero >= 8 && numero <= 13){

        
        if(numero == 8){
            let resultadoElement = document.getElementById("sigel_resultado3");
            resultadoElement.textContent = "P. Def. +80";

            let resultadoElement2 = document.getElementById("sigel_resultado4");
            resultadoElement2.textContent =  "Max HP +6%";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("sigel_resultado3");
            resultadoElement.textContent = "P. Def. +92";

            let resultadoElement2 = document.getElementById("sigel_resultado4");
            resultadoElement2.textContent =  "Max HP +7%";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("sigel_resultado3");
            resultadoElement.textContent = "P. Def. +104";

            let resultadoElement2 = document.getElementById("sigel_resultado4");
            resultadoElement2.textContent =  "Max HP +8%";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("sigel_resultado3");
            resultadoElement.textContent = "P. Def. +116";

            let resultadoElement2 = document.getElementById("sigel_resultado4");
            resultadoElement2.textContent =  "Max HP +9%";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("sigel_resultado3");
            resultadoElement.textContent = "P. Def. +128";

            let resultadoElement2 = document.getElementById("sigel_resultado4");
            resultadoElement2.textContent =  "Max HP +10%";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("sigel_resultado3");
            resultadoElement.textContent = "P. Def. +140";

            let resultadoElement2 = document.getElementById("sigel_resultado4");
            resultadoElement2.textContent =  "Max HP +12%";
        }
    }else{
        let resultadoElement = document.getElementById("sigel_resultado3");
        resultadoElement.textContent =  "-";

        let resultadoElement2 = document.getElementById("sigel_resultado4");
        resultadoElement2.textContent = "-";
    }
    let div_sigel = document.getElementById(`img_sigel`);
    div_sigel.innerHTML = ""; 
    let img_sigel = document.createElement("img");
    img_sigel.src = `../img/clasic/sigel_/sigel_lv${numero}.png`;
    img_sigel.alt = `sigel ${numero}`;
    div_sigel.appendChild(img_sigel);
}
}


function tyrr_rune() {
    // Obtén el elemento select
    let seleccion_tyrr = document.getElementById("seleccion_tyrr");
    
    // Obtén la opción seleccionada
    let opcionSeleccionada = seleccion_tyrr.options[seleccion_tyrr.selectedIndex];
    let numero = parseInt(opcionSeleccionada.value);

    
    if (numero >= 1 && numero <= 13) {
        
        if(numero == 1){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +2.8";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +2%";
        }
        if(numero == 2){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +3.8";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +2.25%";
        }
        if(numero == 3){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +5.1";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +2.5%";
        }
        if(numero == 4){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +7.8";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +2.75%";
        }
        if(numero == 5){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +10.1";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +3%";
        }
        if(numero == 6){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +12.9";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +3.25%";
        }
        if(numero == 7){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +15.3";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +3.5%";
        }
        if(numero == 8){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +18.1";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +3.75%";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +21.2";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +4%";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +24.3";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +4.25%";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +28";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +4.5%";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +31.9";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +4.75%";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("tyrr_resultado");
            resultadoElement.textContent = "P. Atk. +36.5";

            let resultadoElement2 = document.getElementById("tyrr_resultado2");
            resultadoElement2.textContent =  "Atk. Spd. +5%";
        }
        
        
    
    if(numero >= 8 && numero <= 13){

        
        if(numero == 8){
            let resultadoElement = document.getElementById("tyrr_resultado3");
            resultadoElement.textContent = "A chance to Stun upon Critical attack. +13%. Requires a polearm.";

            let resultadoElement2 = document.getElementById("tyrr_resultado4");
            resultadoElement2.textContent =  "Atk. Spd. +5%";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("tyrr_resultado3");
            resultadoElement.textContent = "A chance to Stun upon Critical attack. +15%. Requires a polearm.";

            let resultadoElement2 = document.getElementById("tyrr_resultado4");
            resultadoElement2.textContent =  "Atk. Spd. +6%";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("tyrr_resultado3");
            resultadoElement.textContent = "A chance to Stun upon Critical attack. +17%. Requires a polearm.";

            let resultadoElement2 = document.getElementById("tyrr_resultado4");
            resultadoElement2.textContent =  "Atk. Spd. +6.5%";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("tyrr_resultado3");
            resultadoElement.textContent = "A chance to Stun upon Critical attack. +19%. Requires a polearm.";

            let resultadoElement2 = document.getElementById("tyrr_resultado4");
            resultadoElement2.textContent =  "Atk. Spd. +7%";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("tyrr_resultado3");
            resultadoElement.textContent = "A chance to Stun upon Critical attack. +21%. Requires a polearm.";

            let resultadoElement2 = document.getElementById("tyrr_resultado4");
            resultadoElement2.textContent =  "Atk. Spd. +7.5%";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("tyrr_resultado3");
            resultadoElement.textContent = "A chance to Stun upon Critical attack. +23%. Requires a polearm.";

            let resultadoElement2 = document.getElementById("tyrr_resultado4");
            resultadoElement2.textContent =  "Atk. Spd. +8%";
        }
    }else{
        let resultadoElement = document.getElementById("tyrr_resultado3");
        resultadoElement.textContent =  "-";

        let resultadoElement2 = document.getElementById("tyrr_resultado4");
        resultadoElement2.textContent = "-";
    }
    let div_tyrr = document.getElementById(`img_tyrr`);
    div_tyrr.innerHTML = ""; 
    let img_tyrr = document.createElement("img");
    img_tyrr.src = `../img/clasic/tyrr_/tyrr_lv${numero}.png`;
    img_tyrr.alt = `tyrr ${numero}`;
    div_tyrr.appendChild(img_tyrr);
}
}


function wynn_rune() {
    // Obtén el elemento select
    let seleccion_wynn = document.getElementById("seleccion_wynn");
    
    // Obtén la opción seleccionada
    let opcionSeleccionada = seleccion_wynn.options[seleccion_wynn.selectedIndex];
    let numero = parseInt(opcionSeleccionada.value);

    
    if (numero >= 1 && numero <= 13) {
        
        if(numero == 1){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +2.665%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +1000";
        }
        if(numero == 2){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +3%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +1400";
        }
        if(numero == 3){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +3.33%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +1800";
        }
        if(numero == 4){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +3.66%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +2200";
        }
        if(numero == 5){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +4%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +2600";
        }
        if(numero == 6){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +4.32%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +3000";
        }
        if(numero == 7){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +4.65%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +3400";
        }
        if(numero == 8){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +4.98%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +3800";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +5.31%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +4200";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +5.64%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +4600";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +5.97%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +5000";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +6.3%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +5600";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("wynn_resultado");
            resultadoElement.textContent = "Casting Spd. +6.63%";

            let resultadoElement2 = document.getElementById("wynn_resultado2");
            resultadoElement2.textContent =  "Weight limit +5900";
        }
        
        
    
    if(numero >= 8 && numero <= 13){

        
        if(numero == 8){
            let resultadoElement = document.getElementById("wynn_resultado3");
            resultadoElement.textContent = "Max MP +12%";

            let resultadoElement2 = document.getElementById("wynn_resultado4");
            resultadoElement2.textContent =  "Weight limit +4100";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("wynn_resultado3");
            resultadoElement.textContent = "Max MP +14%";

            let resultadoElement2 = document.getElementById("wynn_resultado4");
            resultadoElement2.textContent =  "Weight limit +4500";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("wynn_resultado3");
            resultadoElement.textContent = "Max MP +16%";

            let resultadoElement2 = document.getElementById("wynn_resultado4");
            resultadoElement2.textContent =  "Weight limit +4900";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("wynn_resultado3");
            resultadoElement.textContent = "Max MP +18%";

            let resultadoElement2 = document.getElementById("wynn_resultado4");
            resultadoElement2.textContent =  "Weight limit +5500";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("wynn_resultado3");
            resultadoElement.textContent = "Max MP +20%";

            let resultadoElement2 = document.getElementById("wynn_resultado4");
            resultadoElement2.textContent =  "Weight limit +5800";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("wynn_resultado3");
            resultadoElement.textContent = "Max MP +22%";

            let resultadoElement2 = document.getElementById("wynn_resultado4");
            resultadoElement2.textContent =  "Weight limit +6400";
        }
    }else{
        let resultadoElement = document.getElementById("wynn_resultado3");
        resultadoElement.textContent =  "-";

        let resultadoElement2 = document.getElementById("wynn_resultado4");
        resultadoElement2.textContent = "-";
    }
    let div_wynn = document.getElementById(`img_wynn`);
    div_wynn.innerHTML = ""; 
    let img_wynn = document.createElement("img");
    img_wynn.src = `../img/clasic/wynn_/wynn_lv${numero}.png`;
    img_wynn.alt = `wynn ${numero}`;
    div_wynn.appendChild(img_wynn);
}
}


function yul_rune() {
    // Obtén el elemento select
    let seleccion_yul = document.getElementById("seleccion_yul");
    
    // Obtén la opción seleccionada
    let opcionSeleccionada = seleccion_yul.options[seleccion_yul.selectedIndex];
    let numero = parseInt(opcionSeleccionada.value);

    
    if (numero >= 1 && numero <= 13) {
        
        if(numero == 1){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +4";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +2.47";
        }
        if(numero == 2){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +4.5";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +2.67";
        }
        if(numero == 3){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +5";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +2.87";
        }
        if(numero == 4){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +5.5";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +3.07";
        }
        if(numero == 5){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +6";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +3.27";
        }
        if(numero == 6){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +6.5";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +3.47";
        }
        if(numero == 7){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +7";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +3.62";
        }
        if(numero == 8){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +7.5";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +3.77";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +8";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +3.92";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +8.5";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +4.07";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +9";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +4.22";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +9.5";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +4.37";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("yul_resultado");
            resultadoElement.textContent = "Speed +10";

            let resultadoElement2 = document.getElementById("yul_resultado2");
            resultadoElement2.textContent =  "Accuracy +4.52";
        }
        
        
    
    if(numero >= 8 && numero <= 13){

        
        if(numero == 8){
            let resultadoElement = document.getElementById("yul_resultado3");
            resultadoElement.textContent = "P. Atk. +196 upon Critical attack";

            let resultadoElement2 = document.getElementById("yul_resultado4");
            resultadoElement2.textContent =  "Accuracy +4";
        }
        if(numero == 9){
            let resultadoElement = document.getElementById("yul_resultado3");
            resultadoElement.textContent = "P. Atk. +216 upon Critical attack";

            let resultadoElement2 = document.getElementById("yul_resultado4");
            resultadoElement2.textContent =  "Accuracy +4.4";
        }
        if(numero == 10){
            let resultadoElement = document.getElementById("yul_resultado3");
            resultadoElement.textContent = "P. Atk. +236 upon Critical attack";

            let resultadoElement2 = document.getElementById("yul_resultado4");
            resultadoElement2.textContent =  "Accuracy +4.8";
        }
        if(numero == 11){
            let resultadoElement = document.getElementById("yul_resultado3");
            resultadoElement.textContent = "P. Atk. +256 upon Critical attack";

            let resultadoElement2 = document.getElementById("yul_resultado4");
            resultadoElement2.textContent =  "Accuracy +5.2";
        }
        if(numero == 12){
            let resultadoElement = document.getElementById("yul_resultado3");
            resultadoElement.textContent = "P. Atk. +276 upon Critical attack";

            let resultadoElement2 = document.getElementById("yul_resultado4");
            resultadoElement2.textContent =  "Accuracy +5.6";
        }
        if(numero == 13){
            let resultadoElement = document.getElementById("yul_resultado3");
            resultadoElement.textContent = "P. Atk. +286 upon Critical attack";

            let resultadoElement2 = document.getElementById("yul_resultado4");
            resultadoElement2.textContent =  "Accuracy +6";
        }
    }else{
        let resultadoElement = document.getElementById("yul_resultado3");
        resultadoElement.textContent =  "-";

        let resultadoElement2 = document.getElementById("yul_resultado4");
        resultadoElement2.textContent = "-";
    }
    let div_yul = document.getElementById(`img_yul`);
    div_yul.innerHTML = ""; 
    let img_yul = document.createElement("img");
    img_yul.src = `../img/clasic/yul_/yul_lv${numero}.png`;
    img_yul.alt = `yul ${numero}`;
    div_yul.appendChild(img_yul);
}
}

