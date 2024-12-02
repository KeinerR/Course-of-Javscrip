// arrays
/// declaracion
let myArray = []

let myArray2 = new Array()
console.log(typeof myArray)
console.log(myArray)
console.log(myArray2)

//INICIALIZACION 

myArray = [1, 22, 5, 5, 6, 6]
myArray2 = new Array(1, 2, 23, 6, 8,)
console.log(myArray)
console.log(myArray2)


myArray = ['JUAN', 'ROMERO', 'AGUILAR', 'MOSQUERA', 'PEREIRA', 'CAMACHO']
myArray2 = new Array('JUAN', 'ROMERO', 'AGUILAR', 'MOSQUERA', 'PEREIRA', 'CAMACHO')
console.log(myArray)
console.log(myArray2)


myArray2 = new Array(3)
myArray2[0] = 'Carlos'
myArray2[1] = 'Mario'
myArray2[2] = 'Daniel'

console.log(myArray2)

myArray = []
myArray[1] = 'Carlos'
myArray[2] = 'Carla'


/// metodos comunes
myArray = []


// push pop

/// PUSH AGREGA LOS ELEMNTOS AL FINAL DEL ARRAY
myArray.push('Carla')
myArray.push('Juan')
myArray.push('David')
myArray.push(20)

console.log(myArray)
/// POP ELIMINA EL ULTIMO VALOR DEL ARRAY Y LO DEVUELVE
console.log(myArray.pop())
console.log(myArray)


/// SHIFT  Y UNSHIFT

//SHIFT ELIMINA EL PRIMER  ELEMENTO DEL ARRAY

myArray.shift()

console.log(myArray)

/// UNSHIFT  AGREGA  UNO O MAS ELEMNETO DE UN ARRAY AL INICIO

myArray.unshift('Keiner', 'Juliana')
console.log(myArray)

/// length
/// devuelve el tamaño del array

console.log(myArray.length)


//// para eliminar el contenido de un array  hayq ue volver a inicializar

myArray = []


// u opcional no recomendable
myArray.length = 0

/// slice  devuelve un pedazo del array que  yo le pida
myArray = ['JUAN', 'ROMERO', 'AGUILAR', 'MOSQUERA', 'PEREIRA', 'CAMACHO']

let myNewArray = myArray.slice(1, 2)

console.log(myNewArray)

/// splice  elimina los valores desde el indice que le decimos hata el valor que le asignamos
myArray.splice(1, 3)

console.log(myArray)
myArray = ['JUAN', 'ROMERO', 'AGUILAR', 'MOSQUERA', 'PEREIRA', 'CAMACHO']
myArray.splice(1, 4, 'nueva entrada')

console.log(myArray)