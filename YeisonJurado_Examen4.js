class Persona {
    constructor (nombre, apellido, edad) {
        this._nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    

get nombre(){
 return this._nombre;
}

set nombre(nuevoNombre){
  this._nombre = nuevoNombre;
 }
}


    
class Empleado extends Persona {
    constructor(nombre, apellido, edad, tipo) {
    super(nombre, apellido, edad);
    this._tipo = tipo;
    }
    get tipo(){
        return this._tipo;
       }
       
       set tipo(nuevotipo){
         this._tipo = nuevotipo;
        }
}



class Nomina {
   // propiedades = new Array(4);
   // propiedades=[Empleado.nombre,Empleado.apellido,Empleado.edad,Empleado.tipo]
   
   
    
    constructor(nombre, apellido, edad, tipo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.tipo = tipo;
    }

    
   

}
function calcularSueldo(Empleado)
{
    dias = Math.round(Math.random() * (15- 5) + 5);;
    if (Empleado.tipo == 'C') {

        let sueldoa = (dias * 500) - ((dias * 500 * 13)/100);
        console.log(Empleado.nombre + ' ' + Empleado.apellido + ' ' + Empleado.edad +
        ' quien es empleado de confianza con un sueldo de u$ ' + sueldoa + ' por trabajar ' + dias + ' días') ;
    } else {

        let sueldo = (dias * 250) - ((dias * 250 * 10)/100);
        console.log(Empleado.nombre + ' ' + Empleado.apellido + ' ' + Empleado.edad +
        ' quien es empleado del Sindicato con un sueldo de u$ ' + sueldo + ' por trabajar ' + dias + ' días') ;
    }
}    

const persona1 = new Persona('Yeison', 'Jurado', 46);
const persona2 = new Persona('Yaque', 'Martínez', 45);
const persona3 = new Persona('carlos', 'Jurado', 21);


const empleado1 = new Empleado('Yeison', 'Jurado', 46, 'C');
const empleado2 = new Empleado('Yaque', 'Martínez', 45, 'C');
const empleado3 = new Empleado('carlos', 'López', 21, 'S');

calcularSueldo(empleado1);
calcularSueldo(empleado2);
calcularSueldo(empleado3);