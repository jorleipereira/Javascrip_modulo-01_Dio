function escreverNome (nome){
    console.log(`Meu nome é ` + nome);
}

escreverNome("jorlei");
verificarIdade (36);
escreverNome('Samuel');
verificarIdade(7);

function verificarIdade (idade){
    if (idade >= 18 ) {
        console.log('você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    } 
}
