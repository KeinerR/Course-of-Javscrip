// Strings

let myName = 'Keiner'
let greeting = ' Hola ' + myName + ' !'

console.log(greeting)
console.log(typeof greeting)

// longitud
console.log(greeting.length)
// acceso caracteres
console.log(greeting[0])

/// metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf('Hola'))
console.log(greeting.indexOf('Jamaica'))
console.log(greeting.includes('Hola'))
console.log(greeting.includes('Jamaica'))
console.log(greeting.slice(0, 12))
console.log(greeting.replace('Hola', ' Hi'))

// Template literals (plantillas literrale)

let message = ` Hi
 this is my 
course of
 JavsScript`

console.log(message)


let emails = 'keinerrivas@gmail.com'
console.log(` Hi  ${myName} and my emails is ${emails}`)

