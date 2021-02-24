
//inicializo la Funcion Juego
function juego(elegida){

//Inicializo el array con las opciones
var listado = ["piedra", "papel", "tijera"];

//de manera aleatoria se selecciona una opcion que corresponde a la PC
aleatorio = Math.floor(Math.random()*(listado.length));

//Asigno la opción aleatoria elegida en la variable maquina
maquina=listado[aleatorio];

//Muestro en pantalla la opcion elegida aleatoriamente por la PC
console.log("La Maquina Eligio: "+maquina);

//Estructura condicional if para validar el juago y mostrar el resultado
    if(elegida!=maquina){
        if(elegida=="piedra" && maquina=="tijera" ||
        elegida=="papel" && maquina=="piedra" ||
        elegida=="tijera" && maquina=="papel" ){
            console.log("Ganaste Felicitaciones");
        }
        else {
            console.log("Gano la Maquina");
        }
    
    }else{
        console.log("Empate");
    }
}





