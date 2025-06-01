/*
2) o IMC - Indice de Massa Corporal é um criterio da 
Organização Mundial da Saude para dar uma Indicação
sobre a condição de peso de uma pessoal adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de 
um adulto mostre sua condição de acordo com 
a tebela abaixo.

IMC em adultos condição:
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 25 e 30 Acima do peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obesidade Grave;
*/

// Variaveis
let nomePessoa = "Jorlei";
let pesoPessoa = 96;
let alturaPessoa = 1.76;

// calculo 
let calculoImc = pesoPessoa / (alturaPessoa * alturaPessoa);
console.log (`O IMC do ${nomePessoa} é ${calculoImc.toFixed(2)}`);

// classificação condição IMC
if (calculoImc < 18.5) {
    console.log (`IMC Abaixo do peso`);
} else if ( calculoImc >= 25 && calculoImc <= 30) {
    console.log ( `IMC Acima do peso`);
} else if (calculoImc >= 30 && calculoImc <= 40) {
    console.log (`IMC Obeso`);
} else {
    console.log (`IMC Obesidade Grave`);
}