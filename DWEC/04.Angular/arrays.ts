//Crear un array con 20 números aleatorios

console.clear();

let arrNum: number[] = [];

for (let i = 0; i < 20; i++) {
    
    arrNum[i] = Math.floor(Math.random() * (101 - 1) + 1);
    
}

console.log(arrNum);

//Mostrar el número con máximo valor, con el mínimo, y la posición de estos
let maximo: number = Math.max.apply(null, arrNum);
let minimo: number = Math.min.apply(null, arrNum)
console.log(`Máximo ${maximo} en la posición ${arrNum.indexOf(maximo)}`);
console.log(`Mínimo ${minimo} en la posición ${arrNum.indexOf(minimo)}`);

//Mostrar la media de todo el array

let media : number = 0;

for (let i = 0; i < arrNum.length; i++) {
    
   media += arrNum[i];
    
}

console.log('Media', media/20);

//Mostrar el array ordenado

console.log(arrNum.sort());

//Generar un arrray con los números primos del array anterior y mostrarlo

let arrPrimos : number[] = [];

/*
for (let i = 0; i < arrNum.length; i++) {
    let numero: number = arrNum[i];

	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0){
            
        }else{
            arrPrimos.push(numero);
        }
	}
    
}

console.log('Números primos', arrPrimos);*/