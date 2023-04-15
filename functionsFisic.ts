import {read} from './index';

function CalculateQuantity(massa: number, calorEspecifico: number, variacaoDeTemperatura: number, name: string) {
    console.log(`Q = ${massa * calorEspecifico * variacaoDeTemperatura}. Bons estudos ${name}!`)
};

function CalculateSpecificHeat(capacidadeTermica: number, massa: number, name: string) {
    console.log(`C = ${capacidadeTermica / massa}. Bons estudos ${name}!`)
};

function CalculateHeatCapacity(quantidadeDeCalorAbs: number, variacaoDeTemperatura: number, name: string) {
    console.log(`CT = ${quantidadeDeCalorAbs / variacaoDeTemperatura}. Bons estudos ${name}!`)
};


export function Fisic(name: string) {
    console.log('entrou')
    read.question(`Encontramos Calorimetria. Suas opcões são 1 para Quantidade, 2 para Calor Específico e 3 para Capacidade Térmica. Caso não queira, é só digitar S para sair.`,
        (value: string) => {

            if (value == "1") {
                read.question('Informe o valor da massa: ', (massa: number) => {
                    read.question('Informe o calor específico: ', (calorEspecifico: number) => {
                        read.question('Informe a variação de temperatura: ', (variacaoDeTemperatura: number) => {

                            CalculateQuantity(massa, calorEspecifico, variacaoDeTemperatura, name)
                            read.close()

                        })
                    })
                })
            }

            else if (value == "2") {
                read.question('Informe o calor específico: ', (capacidadeTermica: number) => {
                    read.question('Informe o valor da massa: ', (massa: number) => {

                        CalculateSpecificHeat(capacidadeTermica, massa, name)
                        read.close()

                    })
                })
            }

            else if (value == "3") {
                read.question('Informe a quantidade de calor absorvido pelo corpo (Q): ', (quantidadeDeCalorAbs: number) => {
                    read.question('Informe a variação de temperatura: ', (variacaoDeTemperatura: number) => {

                        CalculateHeatCapacity(quantidadeDeCalorAbs, variacaoDeTemperatura, name)
                        read.close()

                    })
                })
            }

            else if (value == "S" || value == "s") {
                console.log(`Desculpa não poder ajudar ${name}. Volte quando precisar!`);
                read.close();
            }
        })
};