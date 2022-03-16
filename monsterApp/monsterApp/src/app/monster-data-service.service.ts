import { Injectable } from '@angular/core';
import { Monster, Raza } from './monster.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataServiceService {

  misMonstruos: Monster[] = [
    new Monster("Paco, devorador de mundos", 1000, Raza.Orco, 300),
    new Monster("Felidar, hacedora de viudas", 800, Raza.Elfo, 400),
    new Monster("Imp, vasallo común", 100, Raza.Trasgo, 10),
    new Monster("Gramo, el grande", 300, Raza.Enano, 100)
  ];
  constructor() { }

  getMonstruos(): Monster[] {
    return this.misMonstruos;
  }

  addMonster(m:Monster): void{
    this.misMonstruos.push(m);
  }

  saludar(): void {
    alert("Hola");
  }
}
