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
// Variaveis
let precoProduto = 100;
let formaPagamento = 5;

/* código condição de pagamento:
 1- À vista Débito, receber 10% de desconto;
 2- À vista no dinheiro ou Pix, receber 15% de 
 desconto;
 3- Em duas vezes, preço normal de etiqueta 
 sem juros;
 4- Acima de duas vezes, preço normal de etiqueta
 mais juros de 10%;
 */

if (formaPagamento === 1){
    console.log (precoProduto - (precoProduto * 0.1));
} else if (formaPagamento === 2) {
    console.log (precoProduto - (precoProduto * 0.15));
} else if (formaPagamento === 3) {
    console.log (precoProduto);
} else if (formaPagamento === 4) {
    console.log (precoProduto + (precoProduto * 0.1));
} else {
    console.log("Condição de pagamento invalida. Por favor, escolha o codigo de 1 a 4" );
}