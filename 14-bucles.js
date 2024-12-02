//// loops o bucles



// // for 


// for (let i = 0; i < 5; i++) {
//     /// codigo 

//     console.log(` Hola ${i}`)
// }

// const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']
// for (let i = 0; i < numbers.length; i++) {
//     /// codigo
//     console.log(` Elemto ${numbers[i]}`)
// }

// while evalua primero la condición

// let i = 0
// while (i < 5) {

//     // codigo
//     console.log(`Hi ${i}`)

//     i++
// }


/// Bucle infinito

// while (true){

// }
/// do while me aseguro que se ejecute al menos un avez luego ña codidicon

// i = 9
// do {
//     console.log(`Hi ${i}`)
//     i++
// } while (i < 5)

// for of

let arrayAnimal = ['Zorro', 'Oso', 'Cocodrilo', 'Tiburon', 'Raton']
let bookSet = new Set(['50 Sombras de Gray', '100 Años de soledad ', 'Pinocho', 'Blanca Nieves', 'Cenicienta'])

let monthMap = new Map()

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
for (let value of arrayAnimal) {

    console.log(value)
}
for (let value of bookSet) {

    console.log(value)
}
for (let value of monthMap) {

    console.log(value)
}

myString = "Hola JavaScrip"

for (let value of myString) {

    console.log(value)
}

/// buenas practicas  no provocar bucles infinitos
/// break continue
for (let i = 0; i < 10; i++) {
    /// codigo

    if (i == 6) {
        continue
    } else if (i == 8) {
        break
    }
    console.log(` Elemto ${i}`)
}
