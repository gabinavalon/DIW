// @ts-check

let  notSure: any = 4;
notSure = "Nueva cadena de texto"; // Ahora pasará a ser un string
notSure = false; // Por último es de un tipo boolean
let  lista: any[] = [1, true, "Cadena"];
lista[1] = 100;


function construirNombre(nombre: string, apellido?: string): string{
    if (apellido) return nombre + apellido
    else return nombre
}

class  Persona {
    private  nombre: string;
    private  edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    public  saludar(): void {
        console.log("Hola, mi nombre es "+this.nombre+"y tengo "+this.edad+" años.");
    }
}


let  persona = new  Persona("Jonatan", 32);
persona.saludar();
// Hola, mi nombre es Jonatan y tengo 32 años.

let nombre: string = construirNombre(persona.nombre);
console.log(nombre);

