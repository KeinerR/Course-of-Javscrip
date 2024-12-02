//7 if , else if , else
// if ( si )
// else ( si no){
//}
let age = 20
if (age == 20) {
    // bloque
    console.log('  la edad es 20')
} else {
    /// si no se cimplela condicion if  se ejecuta el else
    console.log(' la edad  no  es 20 ')
}

if (age == 20) {
    // bloque
    console.log('  la edad es 20')
} else if (age < 18) {
    console.log(' es menor de edad')
} else {
    /// si no se cimplela condicion if  se ejecuta el else
    console.log(' la edad  no  es 20 ')
}
/// operdaor ternario
const message = age == 20 ? 'la edad es 20 ternario ' : 'la edad no es 20  ternario'

console.log(message)



/// switch 

let day = 1

let dayName = null

/// muy tedioso hacer esto
// if (day == 0) {
//     dayName = 'Lunes'
// }
// else if (day == 2) {
//     dayName = 'Martes'
// }


switch (day) {
    case 0:
        dayName = 'Monday'
        break


    case 1:

        dayName = 'Tuesday'
        break
    case 2:

        dayName = 'Wednesday'
        break
    case 3:

        dayName = 'Thursday'
        break
    case 4:

        dayName = 'Friday'
        break
    case 5:

        dayName = 'Saturday'
        break
    case 6:

        dayName = 'Sunday'
        break
    default:
        dayName = ' Numero de la semana icorrecto'
}

console.log(dayName)