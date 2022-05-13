
class Persona {
    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

getDetalles()
{
    console.log(`Nombre: ${this.nombre}<br>`);
    console.log(`Apellido: ${this.apellido}<br>`);
    console.log(`Edad: ${this.edad}<br>`);
}
    
class Empleado extends Persona {
    constructor(nombre, apellido, edad, tipo) {
    super(nombre, apellido, edad);
    this.tipo = tipo;
    }
}

getDetalles() 
{
    super.getDetalles();
    console.log(`Tipo: ${this.tipo}<br>`);
}

class Nomina {
    constructor(nombre, apellido, edad, tipo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.tipo = tipo;
    }


}

calcularSueldo() 
{
    if (this.tipo = 'C')
        dias = 15;
        let sueldo = (dias * 500) - ((dias * 500 * 13)/100); 
        console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.edad + 
        ' quien es espleado de confianza con un sueldo de u$ ' + sueldo + ' por trabajar ' + dias + ' días') ;
    else
        dias = 15;
        let sueldo = (dias * 350) - ((dias * 350 * 10)/100); 
        console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.edad + 
        ' quien es empleado del Sindicato con un sueldo de u$ ' + sueldo + ' por trabajar ' + dias + ' días') ;
}

const persona1 = new Persona('Yeison', 'Jurado', 46);
persona1.getDetalles();

const empleado1 = new Empleado('Yeison', 'Jurado', 46, 'C');
empleado1.getDetalles();
empleado1.calcularSueldo();