import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniCalculadora';
  operacion:string = "";

  resultado:number = 0;

  op1:number = 0;
  op2:number = 0;

  sumar():void{
    this.resultado = this.op1+this.op2;
  }
  restar():void{
    this.resultado = this.op1-this.op2;
  }
  multiplicar():void{
    this.resultado = this.op1*this.op2;
  }

  // CLase sobre directivas

  nombre:string = "Hola";
  tieneNombre: boolean = false;
  nombres:string[] = ["Paco", "Juana", "Antonio", "Matilde"];

  color:string = 'red';

  setNombre(){
    this.nombres.push(this.nombre);
    this.tieneNombre = true;
    this.color = 'blue';
  }

  esNombreEspecial():boolean{

    return this.nombre == "Antonio";
  }

  esNombreNormal():boolean{

    return this.nombre.length > 5;
  }
}
