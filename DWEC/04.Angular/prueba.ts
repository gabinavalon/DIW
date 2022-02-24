const listaNumeros: Array<Number> = [1];

const listaFrutas: string[] = ['Apple', 'Orange', 'Banana']; 

const lista: Array<string | number> = ['Apple', 2, 3, 4, 'Banana']; 

listaNumeros.push(2);

console.log(listaFrutas[0])
console.log(lista);

// Bucles for

for(var index in listaFrutas)
{ 
    console.log(listaFrutas[index]);  // output: Apple Orange Banana
}

listaFrutas.pop(); //Remueve el ultimo elemento

for(var i = 0; i < listaFrutas.length; i++)
{ 
    console.log(listaFrutas[i]); // output: Apple Orange
}

listaFrutas.sort(); 

for(var i = 0; i < listaFrutas.length; i++)
{ 
    console.log(listaFrutas[i]); // output: Apple Orange
}
