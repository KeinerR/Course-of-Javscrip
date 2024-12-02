///// 1 Uses destructuring to extract the first elements from an array


let arrayData = [1, 2, 3, 4, 5, 56, 7, 89, 21, 10, 12, 34, 2, 1, 334, 56, 7, 8, 565, 2, 1]




let [value1, value2] = arrayData

console.log(value1)
console.log(value2)

////// 2 Use Deconstruction in an array and assign a default value to a variable

let arrayDefaultValue = [2, 8, 6, 2]


let [value3, value4, value5, value6, value7 = 0] = arrayDefaultValue

console.log(value3)
console.log(value4)
console.log(value5)
console.log(value6)
console.log(value7)

/////// 3 Use Desconstruction  to extract two properties  from an object


let object1 = {
    personName: 'Kuro',
    alias: 'Shadow',
    age: 20
}



let { personName, alias } = object1

console.log(personName)
console.log(alias)


//// 4 Use Desconstruction to extract  two propeties from a object and assing them to new  variables with different names




let objectNewProperties = {
    carName: 'Tesla',
    model: 'Tesla S',
    kilometers: '1500'
}


let { carName: newCarName, model: newModel } = objectNewProperties


console.log(newCarName)
console.log(newModel)



///// 5 Use  Desconstruction to  extract two properties from an nested object


let objectNewNested = {

    employe: 'Juan Camilo',
    last_Name: 'Munera Roa',
    age: 24,
    job: {
        jobName: 'Developer',
        experience: '12 year',
        jobTitle: 'President'

    }
}


let { employe, age: employeAge, job: { jobName } } = objectNewNested


console.log(employe)

console.log(employeAge)
console.log(jobName)

//// 6  Use propagation to change two matrices into a new one




let newMatrix = [...arrayData, ...arrayDefaultValue, 100, 82, 150, 200]

console.log(newMatrix)

///// 7 Use propagation to create  a copy from the matrix


let copyMatryx = [...newMatrix, ...arrayData, ...arrayDefaultValue]
console.log(copyMatryx)



//////  8 Use propagation to join two objects  into a new one



let newObject = { ...object1, ...objectNewNested, newfield: 'prueba' }

console.log(newObject)
///// 9 Use propagation  to  create a copy from a object


let copyObjet = { ...newObject, ...objectNewProperties }

console.log(copyObjet)



///// 10  Join  Descontruction  and Propagation 





let { employe: employe2, job: { jobName: nameJob }, ...res } = objectNewNested


console.error(employe2)
console.error(nameJob)
console.error(res)





