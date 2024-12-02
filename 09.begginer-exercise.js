// 1 imprime por consola tu nombre si una variable toma su valor
let value = 'Keiner'

if (value.toLowerCase() === 'keiner' || value.toUpperCase() === 'Keiner') {

    console.log(`Tu nombre es ${value}`)
}
else {
    console.log(` No es tu nombre ${value}`)
}

/// 2 impriome por consola un mensaje  si el usuario y contraseña  coinciden con unos establecidos  
const user = 'KeinerRivas'
const password = 'keiner2004'

if (user == 'KeinerRivas' && password == 'keiner2004') {
    console.log(`Bienvenido al Programa ${user} `)
}
else {
    console.log(`El usuario no se encuentra con las credenciales autenticadas `)

}

// 3 verificar si un numero es positivo o negativo

let num = -5

if (num < 0) {
    console.log('el numero es negativo')
}
else if (num > 0) {
    console.log('el numero es positivo')
}
else {
    console.log('el numero es cero')
}





///4  verifica si una persona puede votar o no (mayor o iqgual a 10) e indica cuanto años le faltan

let yourAge = 15

if (yourAge >= 18) {
    console.log(`Puedes Vota ya que tiene ${yourAge}`)
}
else {
    console.log(`No puedes votar. Tu edad es ${yourAge} y te faltan ${18 - yourAge} años para poder votar.`);
}

/// 5  un operadopr ternario para asignar el valor ''adulto o menor  a una variable  dependiendo de la edad

let agePerson = 10;

const person = agePerson > 18 ? 'La persona es un adulto' : 'La persona es un menor de edad';
console.log(agePerson);
console.log(person);

/// 6 muestra en que estacion del año nos encontramos dependiendo del valor de una variable 'mes'


const mes = null

let stationMes = null

let daysMonth = null
switch (mes) {

    case 1:
        stationMes = 'spring'

        daysMonth = 31
        break
    case 2:
        stationMes = ' spring'
        daysMonth = 29

        break

    case 3:
        stationMes = 'spring'
        daysMonth = 30

        break
    case 4:
        stationMes = ' Summer'
        daysMonth = 31

        break
    case 5:
        stationMes = 'Summer'
        daysMonth = 30

        break
    case 6:
        stationMes = ' Summer'
        daysMonth = 30

        break
    case 7:
        stationMes = 'fall'
        daysMonth = 31

        break
    case 8:
        stationMes = ' fall'
        daysMonth = 30

        break
    case 9:
        stationMes = 'fall'
        daysMonth = 31

        break
    case 10:
        stationMes = ' winter'
        daysMonth = 31

        break
    case 11:
        stationMes = 'winter'
        daysMonth = 30

        break
    case 12:
        stationMes = ' winter'
        daysMonth = 31

        break

    default:
        stationMes = ' we are not any station of month'
}


console.log(stationMes)

/// 8 un switch para mostarr un saludo dependiendo del  idioma

const lenguagues = 'Japones'
let greetings = null
switch (lenguagues

) {

    case 'English':
        greetings = ' Hi see you later'
        break
    case 'Español':
        greetings = ' Hola como estas'

        break
    case 'French':
        greetings = ' Bonjourn'

        break
    case 'Chino':
        greetings = ' Ni Hao'

        break
    case 'Ruso':

        greetings = ' Private'
        break
    case 'Aleman':
        greetings = ' Hallo'

        break
    case 'Italiano':
        greetings = ' Ciao'

        break
    case 'Japones':
        greetings = ' Konnichiwa'

        break

    default:
        greetings = 'Hi how about'

}

console.log(greetings)