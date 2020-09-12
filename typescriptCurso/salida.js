var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World");
//---------------------tipo de datos
//string
var myString = "Hello world";
myString = 22 + "";
//entero
var myNumber = 223;
//booleano
var myBool = false;
//any (acepta varios tipos de datos)
var myVar = "Hello";
myVar = false;
//Arrays
var stringArray = ["item1", "item2", ""];
var numberArray = [1, 2, 3, 4];
var booleanArray = [true, false, true];
var anyArray = [1, 2, true, "hello", [], {}];
//tuple
var strNumTuple;
strNumTuple = ["hello", 22];
strNumTuple = ["world", 245];
//void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//funciones
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum(1, 2));
document.write(typeof (strNumTuple));
//funcion flecha
var getname = function (nombre, apellido) { return nombre + " " + apellido; };
console.log(getname("juan", "perez"));
//funcion void - no retorna nada
function myVoidFunction() {
    return;
}
// usamos la interfaz en una funcion
var showTodo = function (todo) { return console.log(todo.title + " " + todo.text); };
showTodo({
    title: 'Magus',
    text: 'nice content'
});
//clases
var Usuario = /** @class */ (function () {
    function Usuario(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Usuario.prototype.registrar = function () {
        console.log(this.name + " esta registrado");
    };
    Usuario.prototype.mostrarEdad = function () {
        return this.age;
    };
    Usuario.prototype.pagarFactura = function () {
        console.log("ya pago!!!!");
    };
    Usuario.prototype.getName = function () {
        return this.name;
    };
    return Usuario;
}());
var juan = new Usuario("juan", "email", 22);
juan.registrar();
document.write(juan.getName());
//herencia
var Trabajador = /** @class */ (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador(name, email, age, id) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Trabajador.prototype.pagarFacturax = function () {
        _super.prototype.pagarFactura.call(this);
        console.log("222");
    };
    return Trabajador;
}(Usuario));
var pepe = new Trabajador("predro", "mail", 22, 1);
pepe.pagarFacturax();
