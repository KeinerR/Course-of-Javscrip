/// map

// declaracion del map

let myMap = new Map()

console.log(myMap)

// incializacion clave valor

myMap = new Map([
    ['name', 'Keiner'],
    ['email', 'keinerrivas976@gmail.com'],
    ['age', 20]

])

console.log(myMap)

/// metodos y propiedades

/// set agregar mas elemntos al map

myMap.set('alias', 'The Shadow')
myMap.set('name', ' Keiner Rivas')
// KEYS NOS RETORNA UN LISTADO SOLO CON LAS CLAVES
console.log(myMap.keys())
console.log(myMap)


// get mostar los elemntos del map

console.log(myMap.get('name'))

// has validar si existe en el map


console.log(myMap.has('names'))


console.log(myMap.size)

/// delete se elimina por la clave del elemnto

myMap.delete('email')
console.log(myMap)
myMap.clear()
console.log(myMap)