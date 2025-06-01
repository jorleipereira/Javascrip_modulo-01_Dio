/*
1) faça um algoritimo que dado as 3 notas tiradas
tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua media e a sua classificação
conforme a tabela abaixo.

media = (nota 1 + nota 2 + nota 3) / 3;

classificação:
 - media menor que 5, reprovado;
 - media entre 5 e 7, recuperação;
 - media acima de 7, passou de semestre;
*/

// -- Variaveis --
let nomeAluno = "Jorlei";
let nota01 = 8;
let nota02 = 9;
let nota03 = 7;

// -- calculo da media do aluno
let mediaAluno = (nota01 + nota02 + nota03) / 3;

// -- saida para usuario
console.log(`A média do aluno ${nomeAluno} é: ${mediaAluno.toFixed(2)}`);

// -- Classificação
if (mediaAluno < 5) {
    console.log("Situação: Reprovado");
} else if (mediaAluno >= 5 && mediaAluno <= 7) {
    console.log("Situação: Recuperação");
} else {
    console.log("Situação: Passou de semestre")
}