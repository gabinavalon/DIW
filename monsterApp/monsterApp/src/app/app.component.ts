import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MonsterDataServiceService } from './monster-data-service.service';
import { Monster, Raza } from './monster.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monstruos';

  //Todo lo de los nombres
  //Con un link banana de esos
  nombre1: string = "";
  arrayNombres: string[] = [];

  insertarNombre(): void {
    this.arrayNombres.push(this.nombre1);
  }

  myMonster: Monster;
  misMonstruos: Monster[] = [];

  constructor(private serviceMonster: MonsterDataServiceService) {

    this.misMonstruos = serviceMonster.getMonstruos();
  }

  nombreMonstruo: string;
  vidaMonstruo: number;
  razaMonstruo: string;
  ataqueMonstruo: number;

  razaFormateada: Raza = Raza.Orco; //Orco por defecto


  asignarRaza(): void {
    switch (this.razaMonstruo) {
      case "Orco":
        this.razaFormateada = Raza.Orco;
        break;
      case "Elfo":
        this.razaFormateada = Raza.Elfo;
        break;
      case "Enano":
        this.razaFormateada = Raza.Enano;
        break;
      case "Trasgo":
        this.razaFormateada = Raza.Trasgo;
        break;
    }
  }

  addMonster(): void {
    this.serviceMonster.saludar();

    let monster: Monster = new Monster(this.nombreMonstruo, this.vidaMonstruo, this.razaFormateada, this.ataqueMonstruo);

    this.serviceMonster.addMonster(monster);
  }






}
