// LET: declarar variable

let edad = prompt("Hola! ¿Cual es tu edad?")

if(edad < 18) {
    alert("Eres menor edad, no puedes comprar")

}

else if ( edad >=18 && edad < 25) {

    alert("Eres el primer usuario del dia! Tienes un 20% off")
}else {
  alert ("Puedes iniciar tu compra")
}

// Se utiliza ciclo for. Lo dejo como comentario para que no molesta

// for(let i = 1; i <=25; i++){
  // console.log(i)

//}


//Funcion global tradicional:

function BienvenidaAunCliente (){

  let nombre = prompt ("Cual es tu nombre?")

  alert (" Bienvenido, " + nombre )
}

BienvenidaAunCliente ()

// Parametro

function SumaDosProductos (productoUno, productoDos){

return productoUno + productoDos
}

//Argumento

let sumaTotal = SumaDosProductos (1690 + 1500)


// No encontre algo util para mi pagina para crear una funcion flecha. 

//Arrays : elegi join

const productos = ["malboro", "philips", "chesterfield", " parlamento" ]

const todosLosProductos = productos.join (", ")
console.log (todosLosProductos)

//Arrays : elegi index 

let indice = productos.indexOf ("chesterfield")
console.log (indice)

//Arrays : elegi push - shift ( Me da error no entiendo pporque :( ))

// ofertas.push (" Promociones comprando tres o mas productos")

//ofertas.unshift ("2x1")
//console.log (ofertas)

//ofertas.shift()
// console.log (ofertas)

// Arrays . Agregar - splice. Tambien me dio error. 

//const agregarProductos = (indice) => {

  //if(indice > productos.length) {
    // let nuevoValor = prompt ("Que valor quiere agregar?")

   //productos.splice (indice, 0 nuevoValor)

  //}else{

    //alert ("Su numero es mayor al del indice")
 // }
//}

//const productoABuscar = prompt ("Donde quiere agregar el producto?")