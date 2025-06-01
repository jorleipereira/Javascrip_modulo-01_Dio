// faça um programa para calcular o valor de uma viagem.

// você terá 5 variaveis. sendo elas:
// 1 - preço do etanol;
// 2 - preço da gasolina;
// 3 - o tipo de combustivel que está no seu carro;
// 4 - gasto médio de combustivel do seu carro por KM;
// 5 - distancia em KM da viagem;

// imprima no console o valor que será gasto realizando esta viagem.

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmporLitros = 10;
const distanciaemKm = 100;
const tipoCombustivel = "Gasolina";

const litrosConsumidos = distanciaemKm / kmporLitros;

if (tipoCombustivel === "Etanol") {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else { 
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));

}

