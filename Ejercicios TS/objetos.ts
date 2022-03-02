console.clear();

//Crear una lista de profesiones
enum Profesion {
  Pintor = "Pintor",
  Programador = "Programador",
  Panadero = "Panadero"
};

//Creamos una interfaz mamífero
interface Mamifero {
  velocidad: number; //Metros por segundo
  caminar(distancia:number): void;
    };

//Clase persona con profesion opcional
class  Persona implements Mamifero {
    public  nombre: string;
    public  edad: number;
    public profesion: Profesion;
    public velocidad: number;
  
  public caminar(distancia:number):void{
  	let tiempo:number = distancia/this.velocidad;
  	console.log ("Tarda " + tiempo + " segundos en recorrer " + distancia + " metros");
  }
    
    constructor(nombre: string, edad: number,  velocidad:number,  profe?: Profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.velocidad = velocidad;
        this.profesion = profe;
       
    }
    public  saludar(): void {
        console.log("Hola, mi nombre es "+this.nombre+" y tengo "+this.edad+" años.");
    }
}

//Crear la clase perro con raza, color y el metodo ladrar
class Perro implements Mamifero{
	public raza: string;
  public color: string;
  public velocidad: number;
  
  public caminar(distancia:number):void{
  	let tiempo:number = distancia/this.velocidad;
  	console.log ("Tarda " + tiempo + " segundos en recorrer " + distancia + " metros");
  }
  
  constructor(raza: string, color:string, velocidad:number){
  	this.raza = raza;
    this.color =  color;
    this.velocidad = velocidad;
  }
  public  ladrar(): void {
        console.log("Guau!");
    }
}
//Crear una persona con mi nombre y edad
let persona1 : Persona = new Persona ('Gabo', 26, 10);

console.log(persona1.saludar());

let persona2 : Persona = new Persona ('Paquillo', 82, 10);

//Función que compare dos personas
function compararPersona (persona1: Persona,  persona2:Persona): void{
    
    if( persona1.edad > persona2.edad ){
        console.log('La persona mayor es ', persona1.nombre )
    }else{
        console.log('La persona mayor es ', persona2.nombre)
    }
}

compararPersona(persona1, persona2);

let persona3 : Persona = new Persona ('Pablo', 87, 10, Profesion.Panadero);

console.log(persona3);


//Creamos dos perros

let perro1 : Perro = new Perro ('Labrador', 'negro', 20);
let perro2 : Perro = new Perro ('Chihuaha', 'blanco', 20);

console.log('Perro 1: ',perro1);
console.log('Perro 2: ',perro2);

perro1.caminar(100);
persona1.caminar(100);



  