export enum Raza{
  Orco = "Orco",
  Enano = "Enano",
  Trasgo = "Trasgo",
  Elfo = "Elfo"
}

export class Monster {
  nombre:string = "";
  vida:number = 0;
  raza:Raza;
  ataque:number;

  constructor(nom:string, vid:number, raz:Raza, atk:number){
    this.nombre = nom;
    this.vida = vid;
    this.raza = raz;
    this.ataque = atk;
  }

  atacar():void{
    //A rellenar
  }

  ataqueEspecial():void{
    //a rellenar
  }

  isAlianza():boolean{
    if(this.raza == Raza.Elfo || this.raza == Raza.Enano ){
      return true;
    }
    return false;
  }

  isHorda():boolean{
    if(this.raza == Raza.Orco || this.raza == Raza.Trasgo ){
      return true;
    }
    return false;
  }
}
