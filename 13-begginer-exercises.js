/// 1 Cree un array que lmacene 5 animales

let arrayAnimal = ['Zorro', 'Oso', 'Cocodrilo', '  Tiburon', 'Raton']

console.log(arrayAnimal)



/// 2 Añade dos mas uno al principio y uno al final

arrayAnimal.unshift('Perro')

console.log(arrayAnimal)

arrayAnimal.push('Pelicano')

console.log(arrayAnimal)


///  3 ELIMINA EL QUE SE ENCUENTR EN TERCERA POSICION


console.log(arrayAnimal)
arrayAnimal.splice(2, 1)
console.log(arrayAnimal)


//4 crea un set que alacene 5 libros


bookSet = new Set()

bookSet = new Set(['50 Sombras de Gray', '100 Años de soledad ', 'Pinocho', 'Blanca Nieves', 'Cenicienta'])

console.log(bookSet)

///5  Añade dos mas. uno de ellos repetido

bookSet.add('Black cover')
bookSet.add('Naruto')
bookSet.add('Bleach')
bookSet.add('Empereor magic')

console.log(bookSet)

// 6 Elimina uno concreto a tu eleccion

bookSet.delete('Pinocho')
console.log(bookSet)


// 7 Crea un Map que asocie el numero de mes a su nombre

let monthMap = new Map()
console.log(monthMap)

monthMap = new Map([
    ['1', 'January'],
    ['2', 'February'],
    ['3', 'March'],
    ['4', 'April'],
    ['5', 'May'],
    ['6', 'June'],
    ['7', 'July'],
    ['8', 'Agost'],
    ['9', 'September'],
    ['10', 'October'],
    ['11', 'November'],
    ['12', 'December']
])

console.log(monthMap)

/// 8 Comprueba si el mes 5  existe en el map e imprime su balor

console.log(monthMap.has('5'))
console.log(monthMap.get('5'))

/// 9 Añade  al map una clave con un array como que almacene los mese de verano

monthMap.set('monthSummer', [' June', 'July', 'Agost'])
console.log(monthMap)


/// 10  cre un array transformalo en un set y  almacenalo en un map

let arraySetMap = ['A', 'B', 'C', 'D', 'F']
console.log(arraySetMap)

let setArrayMap = new Set()

setArrayMap = new Set(
    arraySetMap
)

console.log(setArrayMap)

let mapSetArray = new Map()

mapSetArray = new Map([
    ['setArrayMap', setArrayMap]
])


console.log(mapSetArray)