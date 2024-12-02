
////1 Crea un objeto con 3 propiedad




let Car = {

    color: 'Red',
    puerta: 4,
    marca: 'Tesla'

}
console.log(Car)

/////2 Accede  y muestra su valor

console.log(Car.marca)

//// 3 Agrega una nueva propiedad

Car.modelo = 'Tesla S'

console.log(Car)

//// 4  Elimina una  de las primeras propiedades

delete Car.puerta

console.log(Car)

/// 5  Agrega una  function al object

Car.Velocidad = () => {
    console.log(`su velocidad es de ${15000}`)
}


Car.Comodidad = function () {
    console.log(`The ${this.marca}  ${this.modelo} is super Comodo `)
}
Car.Velocidad()

//// 6 Itera  sobre las prpiedades  del objeto


for (data in Car) {

    console.log(` ${data} pertece a ${Car[data]}`)
}

///// 7 Crea un objeto Anidado


Car.newModels = {
    model: ['Tesla CyberTruck', 'Tesla Model 3', ' Tesla Roadster', ' Tesla Model Y', ' Tesla Model X', 'Tesla semi'],
    color: ['Red', 'Black', 'Withe', 'Red', 'Green', 'Blondo', 'Brown', 'Red', 'Blue']

}

////// 8 Accede  y muestra  el valopre de las propiedades anidadas

console.log(Car.newModels)

/// 9  Comprueba  si los dos objetos creados son iguales


console.log(Car == Car.newModels)

///// 10 Comprueba si dos  propiedades diferentes son iguales

console.log(Car.color == Car.newModels.color)

for (dataAnidada in Car) {

    // console.log(Car[dataAnidada])


    for (dataArray in Car[dataAnidada]) {
        // console.log(`${dataArray} :   ${Car.newModels[dataArray]}`)



        for (listArray of Car[dataAnidada][dataArray]) {

            // console.log(listArray)


            if (listArray.includes(Car.color)) {

                console.log(listArray.includes(Car.color));

            }
        }

    }

}






