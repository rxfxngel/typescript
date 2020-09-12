
console.log("Hello World");

//---------------------tipo de datos

//string
var myString:string="Hello world";
myString=22+"";
//entero
var myNumber:number=223;
//booleano
var myBool:boolean=false;
//any (acepta varios tipos de datos)
var myVar:any="Hello";
myVar=false;

//Arrays
var stringArray:string[]=["item1","item2",""];
var numberArray:number[]=[1,2,3,4];
var booleanArray:boolean[]=[true,false,true];
var anyArray:any[]=[1,2,true,"hello",[],{}];

//tuple
var strNumTuple:[string,number];
strNumTuple=["hello",22];
strNumTuple=["world",245];

//void, undefined, null
let myVoid:void=undefined;
let myNull:null = null;
let myUndefined:undefined=undefined;


//funciones
let mySum=(num1:number|string,num2:number|string):number=>{
    if(typeof(num1)==='string'){
        num1=parseInt(num1);
    }

    if(typeof(num2)==='string'){
        num2=parseInt(num2);
    }

    return num1+num2
}

console.log(mySum(1,2));
document.write(typeof(strNumTuple));

//funcion flecha
const getname = (nombre:string,apellido:string):string=>`${nombre} ${apellido}`;

console.log(getname("juan","perez"));

//funcion void - no retorna nada
function myVoidFunction():void{
    return;
}

//interfaces (estructura de un dato ejemplo objetos)
interface IRafaObject{
    title:string;
    text:string;
}
// usamos la interfaz en una funcion
const showTodo= (todo:IRafaObject)=> console.log(`${todo.title} ${todo.text}`);

showTodo(
    {
        title:'Magus',
        text:'nice content'
    }
);

//clases

class Usuario{
    private name:string;
    private email:string;
    private age:number;

    constructor(name,email,age){
        this.name=name;
        this.email=email;
        this.age=age;
    }

    registrar(){
        console.log(`${this.name} esta registrado`);
    }

    mostrarEdad(){
        return this.age;
    }

    pagarFactura(){
        console.log("ya pago!!!!");
    }

    getName(){
        return this.name;
    }
}

let juan = new Usuario("juan","email",22);
juan.registrar();

document.write(juan.getName());


//herencia

class Trabajador extends Usuario{
    id:number;

    constructor(name,email,age,id){
        super(name,email,age);
        this.id=id;
    }

    pagarFacturax(){
        super.pagarFactura();
        console.log("222");
    }
}

const  pepe = new Trabajador("predro","mail",22,1);


pepe.pagarFacturax();