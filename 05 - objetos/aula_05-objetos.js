class Carros {
    marca;
    cor;
    consumoPoKM;

    constructor (marca,cor,consumoPoKM){
        this.marca = marca;
        this.cor = cor;
        this.consumoPoKM = consumoPoKM;
    }

    calcularGastoDePercurso (distancia, precoCombustivel){
        return distancia * this.consumoPoKM * precoCombustivel;
    }
}

const uno = new Carros ('fiat', 'branco', 1/12);
console.log(uno.calcularGastoDePercurso (70,5));

const palio = new Carros ('fiat', 'preto', 1/10);
console.log (palio.calcularGastoDePercurso (70,5));

