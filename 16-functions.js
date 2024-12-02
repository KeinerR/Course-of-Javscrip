////// Function bloque de codigo para realizar tareas especificas

function myFunction() {
  console.log("!Hi, my Function ¡");
}
for (let i = 0; i < 5; i++) {
  /// Codigo

  myFunction();
}

///Con  Parametros

function myFunctionWithParamters(name) {
  console.log(`Hi, ${name}`);
}

myFunctionWithParamters('Keiner');
myFunctionWithParamters('Julian');


//// Function Anonimas

 const myFunction2 = function(name){
  console.log(`Hi, ${name}`);


}

myFunction2('Keiner Rivas')


////Arrow Functions

const myFunction3 = (name)=>{
  console.log(`Hi, ${name}`);

}


myFunction3('Julian Rivas')



const myFunction4  = (name)=> console.log(`Hi, ${name}`)

myFunction4('Bad Boys')



////// Parametros

function suma(a ,b){

  console.log(a + b )
}

suma(15 , 2)


function defaultSuma(a = 0 ,b = 0){

  console.log(a + b )
}

defaultSuma(15 )
defaultSuma( b =15 )

/////Reytorno de  valores


function Multtplicacion(a, b  ){

  return a * b
}



let result = Multtplicacion(25 ,2)
 console.log(result)


 //// functions Anidadas


 function externo(){

  console.log(` Function Externa`)

  function interna(){
    console.log(`Function Interna`)
  }

  interna()
 }

 externo()

 /////Functions de orden superiores

 function applyFunc(func,param){

  func(param)
 }

 applyFunc(myFunction4 ,'Function de orden superior')

 //// forEach

 let arrayAnimal = ['Zorro', 'Oso', 'Cocodrilo', 'Tiburon', 'Raton']


 arrayAnimal.forEach((value)=>console.log(value))



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


bookSet.forEach((value)=>console.log(value))

monthMap.forEach((value)=>console.log(value))