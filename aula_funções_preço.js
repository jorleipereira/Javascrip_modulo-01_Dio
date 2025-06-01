/*
3) Elabore um algoritimo que calcule o que deve ser 
pago por um produto, considerando o preço normal de
etiqueta e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler 
qual a condição de pagamento escolhida e efetuar 
o calculo adequado.

código condição de pagamento:
 1- À vista Débito, receber 10% de desconto;
 2- À vista no dinheiro ou Pix, receber 15% de 
 desconto;
 3- Em duas vezes, preço normal de etiqueta 
 sem juros;
 4- Acima de duas vezes, preço normal de etiqueta
 mais juros de 10%;
*/

//função para calcular desconto
function aplicarDesconto (valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

// Função para Calcular Juros
function aplicarJuros (valor, juros){
    return (valor + (valor * (juros / 100)));
}

// Variaveis
let precoEtiqueta = 100;
let formaPagamento = 4;


if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else if (formaPagamento === 4) {
    console.log (aplicarJuros(precoEtiqueta, 10));
} else {
    console.log('Colocar apenas formas de pagamento entre 1 e 4');
}
