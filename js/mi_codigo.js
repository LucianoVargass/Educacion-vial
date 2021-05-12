/* 
Archivo mi_codigo.js
En este archivo programaremos el código correspondiente
al juego de Trivia.
 */


/*console.log(
preguntas[indice].pregunta);*/


var puntos=0;
var indice=0;
var options=document.getElementsByClassName("trivia-opcion");
const nombre="lucho";
const preguntasto=4;
const puntovich=100;


document.querySelector("#inicio-boton-jugar").addEventListener("click",daleperrote);
document.querySelector("#boton-verificar").addEventListener("click",averga);




function daleperrote(){
    document.getElementsByTagName("nav")[0].classList.add("d-none");
    document.querySelector("#pantalla-inicio").classList.add("d-none");
     document.querySelector("#header").classList.remove("d-none");
      document.querySelector("#pantalla-juego").classList.remove("d-none");
    cambiodolar();
}
function cambiodolar(){
    //BOTON NUMERO
    var cambiarN=document.querySelector("#pregunta-numero");
    cambiarN.innerText=indice+1+")";
    var cambiarT=document.querySelector("#pregunta-texto");
    cambiarT.innerText=preguntas[indice].pregunta;
    //CAMBIO IMAGEN
    var cambiarI=document.querySelector("#pregunta-imagen");
    cambiarI.setAttribute("src",preguntas[indice].imagen_src);
    //CAMBIO OPCIONES

    for(var i =0;i<3;i++){
        options[i].querySelector("label").innerText=preguntas[indice].opciones[i];
    
    }
    //BOTON VERIFICAR 
    var dalee=document.getElementById("boton-verificar");
    dalee.addEventListener("click",averga,laconchadelalora);
    //dalee.classList.add("d-none");
    }
function averga(){
    for(var i =0;i<3;i++){
        if(options[i].querySelector("input").checked==true){
            if(options[i].querySelector("label").innerText==preguntas[indice].respuesta_correcta){
                options[i].style.backgroundColor="#009900";
                puntos= puntos + 100;
            }
            else{
                options[i].style.backgroundColor="#990000";
                for(var compi=0;compi<3;compi++){
                    if(options[compi].querySelector("label").innerText==preguntas[indice].respuesta_correcta){
                options[compi].style.backgroundColor="#009900";
                        puntos=puntos-50;
            }
                }
            }
        }
    }
  
    document.getElementById("boton-verificar").classList.add("d-none");
      var OKEY=document.getElementById("boton-siguiente");
    OKEY.addEventListener("click",laconchadelalora);
    OKEY.classList.remove("d-none");
}

function laconchadelalora(){
    for(var i=0;i<3;i++){
        options[i].style.backgroundColor="#ffffff";
        options[i].querySelector("input").checked=false;
     
    }
    indice++;
    if(indice<4){
        cambiodolar();
    }
    else{
        bienahi();
    }
    document.querySelector("#boton-siguiente").classList.add("d-none");
    document.querySelector("#boton-verificar").classList.remove("d-none");
}

function bienahi(){
    document.getElementById("pantalla-juego").classList.add("d-none");
    document.getElementById("pantalla-resultado").classList.remove("d-none");
    document.getElementById("resultado-puntos").innerText=puntos;
}

 var volvete =document.getElementById("resultado-boton-volver-a-jugar");
    volvete.addEventListener("click",devuelta);
    
function devuelta(){
    //document.getElementById("pantalla-juego").classList.remove("d-none");
    document.getElementById("pantalla-resultado").classList.add("d-none");
     document.getElementById("header").classList.add("d-none");
    document.getElementById("pantalla-inicio").classList.remove("d-none");
    
    indice=0;
    puntos=0;
}
