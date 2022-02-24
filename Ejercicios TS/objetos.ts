console.clear();

//Crear una lista de profesiones
enum Profesion {
  Pintor ,
  Programador  ,
  Panadero '
};


//Clase persona con profesion opcional
class  Persona {
    public  nombre: string;
    public  edad: number;
    public profesion: Profesion;
    
    constructor(nombre: string, edad: number, profe?: Profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profe;
    }
    public  saludar(): void {
        console.log("Hola, mi nombre es "+this.nombre+"y tengo "+this.edad+" años.");
    }
}
//Crear una persona con mi nombre y edad
let persona1 : Persona = new Persona ('Gabo', 26);

console.log(persona1);

let persona2 : Persona = new Persona ('Paquillo', 82);

//Función que compare dos personas
function compararPersona (persona1: Persona,  persona2:Persona): void{
    
    if( persona1.edad > persona2.edad ){
        console.log('La persona mayor es ', persona1.nombre )
    }else{
        console.log('La persona mayor es ', persona2.nombre)
    }
}

compararPersona(persona1, persona2);

let persona3 : Persona = new Persona ('Pablo', 87, Profesion.Panadero);

console.log(persona3);
