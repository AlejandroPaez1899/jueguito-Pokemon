let botonCHIKORITA = document.getElementById("Chikorita")
botonCHIKORITA.addEventListener("click", aparecerbotón)

let botonCyndaquil= document.getElementById("Cyndaquil")
botonCyndaquil.addEventListener("click", aparecerbotón)

let botonTotodile = document.getElementById("Totodile")
botonTotodile.addEventListener("click", aparecerbotón)


function aparecerbotón() {
    boton_pokémon.style.display= "flex"
}



let botonPokemon = document.getElementById("boton_pokémon")
botonPokemon.addEventListener("click", manejarClick)
let numeroAl = random(1,3)
let mivida = 5
let vidaEnemigo =  5
let spanMiVida = document.getElementById("vida")
let spanVidaRival = document.getElementById("vidaRival")




boton_pokémon.style.display= "none"

let secciónAtaque = document.getElementById("ataque")
secciónAtaque.style.display= "none"

let inputTotodile = document.getElementById("Totodile")
let inputChikorita = document.getElementById("Chikorita")
let inputCyndaquil = document.getElementById("Cyndaquil")
let spanpokemonJugador = document.getElementById("NombrePokemon")
let imagen_mipokemon = document.getElementById("imagen_mipokemon")
    
let puntosvida = document.getElementById("puntosVida")
let puntosRival = document.getElementById ("puntosRival")
let seccionChoose = document.getElementById("ChoosePkmn")
let seccionMensajes = document.getElementById("mensajes")
let subtitulo = document.getElementById("subtitulo")

seccionMensajes.style.display = "none"

class Pokémon{
    constructor(nombre, imágen){
        this.nombre = nombre;
        this.imágen = imágen;
        this.ataques = []
    };
};

let gastly = new Pokémon("Gastly", "/.gastly.png");
let Chikorita = new Pokémon("Chikorita", "/.gastly.png");
let Cyndaquil = new Pokémon("Cyndaquil", "/.gastly.png");
let Totodile = new Pokémon("Totodile", "/.gastly.png");

let array_Pokémon =  [Chikorita, Cyndaquil, Totodile];

console.log(array_Pokémon);

array_Pokémon.push(gastly);

const sectionVermapa = document.getElementById("ver_mapa")
const mapa = document.getElementById("mapa")
let lienzo = mapa.getContext("2d")


sectionVermapa.style.display = "none"





function manejarClick() {
    SelecciónPoke();
    SelecciónPokeEnemigo();
    let secciónAtaque = document.getElementById("ataque")
    secciónAtaque.style.display= "flex"
    seccionChoose.style.display= "none"
    seccionMensajes.style.display = "flex"
    botonPokemon.style.display = "none"
    subtitulo.style.display = "none"
    sectionVermapa.style.display = "flex"
   
    unirsealjuego()
  }

  function unirsealjuego(params) {
   fetch("http://localhost:8080/unirse")
   .then(function (res) {
    console.log(res)
   }) 
  }


function SelecciónPoke () {
    
    

    if (inputTotodile.checked == true) {
        spanpokemonJugador.innerHTML = "<span style='color: blue;'>Totodile</span>"
        imagen_mipokemon.innerHTML = '<img src="totodilesprite.png" id="TOTODILEIMG" >';
        puntosvida.innerHTML = mivida
        
    }
    else if (inputChikorita. checked) {
        spanpokemonJugador.innerHTML = "<span style='color: green;'>Chikorita</span>"
        imagen_mipokemon.innerHTML = '<img src="chikoritasprite.png" id="TOTODILEIMG" >';
        puntosvida.innerHTML = mivida
    } 
    else if (inputCyndaquil.checked) {
        spanpokemonJugador.innerHTML = "<span style='color: red;'>Cyndaquil</span>"
        imagen_mipokemon.innerHTML = '<img src="cyndaquilsprite.png" id="TOTODILEIMG" >';
        puntosvida.innerHTML = mivida
    }

    else {alert ("seleccione uno gran imbécil")}
};

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min)
};


let imagen_pokemonrival = document.getElementById("imagen_pokemonrival")

function SelecciónPokeEnemigo() {
    
    
    
    let spanpokemonEnemigo = document.getElementById("NombreRival")
    
    
    
    if (numeroAl == 1 ) {
        spanpokemonEnemigo.innerHTML = "<span style='color: blue;'>Totodile</span>"
        imagen_pokemonrival.innerHTML = '<img src="totodilesprite.png" id="TOTODILEIMG" >';
        puntosRival.innerHTML = vidaEnemigo
        
    }
        else if (numeroAl == 2){
            spanpokemonEnemigo.innerHTML = "<span style='color: green;'>Chikorita</span>"
            imagen_pokemonrival.innerHTML = '<img src="chikoritasprite.png" id="TOTODILEIMG" >';
            puntosRival.innerHTML = vidaEnemigo
        }
        else if (numeroAl == 3){
            spanpokemonEnemigo.innerHTML = "<span style='color: red;'>Cyndaquil</span>"
            imagen_pokemonrival.innerHTML = '<img src="cyndaquilsprite.png" id="TOTODILEIMG" >';
            puntosRival.innerHTML = vidaEnemigo
        }
        
    };

//SECCIÓN DE CANVAS






    //SECCIÓN COMBATE



let btnAtaqueFuego = document.getElementById("Lanzallamas")
btnAtaqueFuego.addEventListener("click", Lanzallamas)

let btnAtaquePlanta = document.getElementById("Hoja")
btnAtaquePlanta.addEventListener("click", HojaAfilada)

let btnAtaqueAgua = document.getElementById("Surf")
btnAtaqueAgua.addEventListener("click", Surf)


let mensajemivida = document.getElementById("puntosVida")

//ESTE ES PARA LA VIDA DEL RIVAL
function crearMensaje() {
    mensajevidarival.innerHTML = vidaEnemigo
}



let mensajevidarival = document.getElementById("puntosRival")
//este es para MI VIDA//
function crearMensaje_2() {
    
    mensajemivida.innerHTML = mivida
}




function Lanzallamas() {
    
    function random_2 (min, max) {
        return Math.floor(Math.random() * (max - min + 1 ) + min)};

    let ataqueRandom = random_2(1,3)
    
    if (numeroAl == 1){
        alert("Lanzallamas ha hecho 0.5 de daño")
        vidaEnemigo = (vidaEnemigo - 0.5)
        ataqueFUEGOEnemigo(ataqueRandom)
        crearMensaje()
       
    }
   else if (numeroAl == 2 ){
        alert("Lanzallamas ha hecho 2 de daño")
        vidaEnemigo = (vidaEnemigo - 2)
        ataqueFUEGOEnemigo(ataqueRandom)
        crearMensaje()
        
   }
    else if (numeroAl == 3){
        alert("Lanzallamas ha hecho 1 de daño")
        vidaEnemigo = (vidaEnemigo - 1)
        ataqueFUEGOEnemigo(ataqueRandom)
        crearMensaje()
    
    }

    console.log("El valor de ataqueRandom es: " + ataqueRandom);
};

function Surf() {
    function random_2(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let ataqueRandom = random_2(1, 3);

    if (numeroAl === 1) {
        alert("Surf ha hecho 1 de daño");
        vidaEnemigo = vidaEnemigo - 1;
        ataqueFUEGOEnemigo(ataqueRandom);
        crearMensaje();
    } else if (numeroAl === 2) {
        alert("Surf ha hecho 0.5 de daño");
        vidaEnemigo = vidaEnemigo - 0.5;
        ataqueFUEGOEnemigo(ataqueRandom);
        crearMensaje();
    } else if (numeroAl === 3) {
        alert("Surf ha hecho 2 de daño");
        vidaEnemigo = vidaEnemigo - 2;
        ataqueFUEGOEnemigo(ataqueRandom);
        crearMensaje();
    }

    FINALIZACION()

   

    console.log("El valor de ataqueRandom es: " + ataqueRandom);
}

function HojaAfilada() {
    function random_2(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let ataqueRandom = random_2(1, 3);

    if (numeroAl === 1) {
        alert("Hoja Afilada ha hecho 2 de daño");
        vidaEnemigo = vidaEnemigo - 2;
        ataqueFUEGOEnemigo(ataqueRandom);
        crearMensaje();
    } else if (numeroAl === 2) {
        alert("Hoja Afilada ha hecho 1 de daño");
        vidaEnemigo = vidaEnemigo - 1;
        ataqueFUEGOEnemigo(ataqueRandom);
        crearMensaje();
    } else if (numeroAl === 3) {
        alert("Hoja Afilada ha hecho 0.5 de daño");
        vidaEnemigo = vidaEnemigo - 0.5;
        ataqueFUEGOEnemigo(ataqueRandom);
        crearMensaje();
    }

    FINALIZACION()
    console.log("El valor de ataqueRandom es: " + ataqueRandom);
}


function ataqueFUEGOEnemigo(NOrandom) {
   
if (NOrandom == 1) {
    
    
    if (inputTotodile.checked == true) {
        alert("Lanzallamas enemigo hace 0.5 de daño")
        mivida = (mivida - 0.5)
        crearMensaje_2()
        FINALIZACION()
    }
    else if (inputChikorita. checked) {
        alert("Lanzallamas enemigo hace 2 de daño")
        mivida = (mivida - 2)
        crearMensaje_2()
        FINALIZACION()
    } 
    else if (inputCyndaquil.checked) {
        alert("Lanzallamas enemigo hace 1 de daño")
        mivida = (mivida - 1)
        crearMensaje_2()
        FINALIZACION()}
        
    }


else if (NOrandom == 2) {
    
    
        if (inputTotodile.checked == true) {
            alert("Hoja Afilada enmiga hace 2 de daño")
            mivida = (mivida - 2)
        crearMensaje_2()
        FINALIZACION()
        }
        else if (inputChikorita. checked) {
            alert("Hoja Afilada enemiga hace 1 de daño")
            mivida = (mivida - 1)
        crearMensaje_2()
        FINALIZACION()
        } 
        else if (inputCyndaquil.checked) {
            alert("Hoja Afilada enemiga hace 0.5 de daño")
            mivida = (mivida - 0.5)
            crearMensaje_2()
            FINALIZACION()
        }}

else if (NOrandom == 3)  {
    
    
    if (inputTotodile.checked == true) {
        alert("Surf enemigo hace 1 de daño")
        mivida = (mivida - 1)
        crearMensaje_2()
        FINALIZACION()
    }
    else if (inputChikorita. checked) {
        alert("Surf enemigo hace 0.5  de daño")
        mivida = (mivida - 0.5)
        crearMensaje_2()
        FINALIZACION()
    } 
    else if (inputCyndaquil.checked) {
        alert("Surf hace 2 de daño")
        mivida = (mivida - 2)
        crearMensaje_2()
        FINALIZACION()
    }
}
        

};

    //REINICIAR//

    let botonReiniciar = document.getElementById("boton_reiniciar")
    botonReiniciar.addEventListener("click", reload)

    function reload() {
        location.reload()
    }

    

      function FINALIZACION() {

        if (mivida <= 0 && vidaEnemigo <= 0) {
 alert("EMPATE 🤷‍♀️")
        }
        else if (mivida <=0){
            alert("Perdiste, burro")
        }
        else if (vidaEnemigo <= 0){
            alert("GANASTE 😎👍👀")
        }

        
      }

