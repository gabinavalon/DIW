import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Prueba con Angular';
  descripcion:string = 'Este es el ejercicio de prueba primero para apender a utilizar Angular';

  estaOculto:boolean = false;
  estaSeleccionado:boolean= true;

  opcionMarcada: String = "";

  nombre:string = "";

  textoParrafo: string = "Este texto cambiará al pulsar el botón por el valor del input";

  setOption(event:Event){
    console.log(event);
    if((<HTMLInputElement>event.target).value == "Opcion1") this.opcionMarcada = "Se ha marcado la opcion 1"
    else this.opcionMarcada = "Se ha marcado la opcion 2"
  }

  saludar(){
    alert('Hola que pasa');
  }

  saludar2(event:Event){
    alert('Hola que pavoosss');
    event.stopPropagation();
  }

  saludar3(texto:string){
    this.textoParrafo = texto;

  }

}
