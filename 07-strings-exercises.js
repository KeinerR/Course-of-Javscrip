//// concatena dos cadenas de texto 1

let myName = 'Keiner'
let lastName = 'Rivas'

console.log(' your name is ' + myName + ' ' + lastName)

// 2  muestra la longitud de un cadena de text

console.log(myName.length)

// 3 muestra el primery ultoo caracter de un string 

console.log('first character ' + myName[0] + ' last character ' + myName[5])

// 4 convierte mayuscula y minuscula a un string

console.log(myName.toLowerCase())
console.log(myName.toUpperCase())

// 5 crea una cadena de texto en varias lineas

let cadenaTexto = ` Hi world

how are you 
i fine 
traveling`

/// interpola el  valor de una variable en un string 6 

console.log(`${myName}  send you  this ${cadenaTexto}`)

///7 remplza todos los espacios e blanco de un string por guiones
console.log(cadenaTexto.replace(' ', '_'))
// 8  comprueba si una cadena de texto  contiene una palabra concreta 

console.log(cadenaTexto.includes('sombrero'))
//  9 comprueba si dos string son iggales 
console.log(cadenaTexto === myName)

/// comprueba si dos cadenas de texto tiene la misma longitud
console.log(cadenaTexto.length === myName.length)
