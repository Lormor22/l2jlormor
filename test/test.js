function othell_rune() {
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
            }
        }