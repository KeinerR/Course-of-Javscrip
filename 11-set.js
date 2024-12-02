/// set 

// declaracion

let mySet = new Set()

console.log(mySet)

/// inicializacion 

mySet = new Set(["JUAN", "ROMERO", "AGUILAR", "MOSQUERA", "PEREIRA", "CAMACHO"])
console.log(mySet)


/// metodos comunes


/// add y delete

mySet.add('https://optimus.com')

console.log(mySet)

/// delete

mySet.delete('https://optimus.com')
console.log(mySet)
console.log(mySet.delete('JUAN'))
console.log(mySet)



/// has

console.log(mySet.has('JUAN'))
console.log(mySet.has('ROMERO'))


/// SIZE

console.log(mySet.size)

/// convertir un set a un array
let myArray = Array.from(mySet)
console.log(myArray)

/// covertir un array a un set
mySet = new Set(myArray)
console.log(mySet)


/// diferenncia es que  el set no permite duplicados

mySet.add('https://optimus.com')
mySet.add('https://optimus.com')
mySet.add('https://optimus.com')
mySet.add('https://optimus.com')
mySet.add('https://optimus.com')
mySet.add('https://optimus.com')
mySet.add('https://optimus.com')
mySet.add('https://optimus.com')

console.log(mySet)




