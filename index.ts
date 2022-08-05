var readline = require('readline')

var read = readline.createInterface(
    process.stdin, process.stdout
)

interface  Quantity {
    massa: number,
    calorEspecifico: number,
    variacaoDeTemperatura: number
}

interface SpecificHeat {
    capacidadeTermica: number,
    massa: number
}

interface HeatCapacity {
    quantidadeDeCalorAbs: number,
    variacaoDeTemperatura: number
}

interface Name {
    name: string
}


function SelectOperation() {
    read.question('Qual seu nome ? ', (name: string) => {
    read.question(`${name}, qual operação deseja fazer ? Suas opções são Quantity, SpecificHeat e HeatCapacity. `, (value: any) => {

        if (value == "Quantity") {
            read.question('Informe o valor da massa: ', (massa: number) => {
            read.question('Informe o calor específico: ', (calorEspecifico: number) => {
            read.question('Informe a variação de temperatura: ', (variacaoDeTemperatura: number) => {

            CalculateQuantity(massa, calorEspecifico, variacaoDeTemperatura, name)
            read.close()
            
            })
            })
            })
            
        }

        else if (value == "SpecificHeat") {
            read.question('Informe o calor específico: ', (capacidadeTermica: number) => {
            read.question('Informe o valor da massa: ', (massa:number) => {

            CalculateSpecificHeat(capacidadeTermica, massa, name)
            read.close()

            })
            })
        }

        else if (value == "HeatCapacity") {
            read.question('Informe a quantidade de calor absorvido pelo corpo (Q): ', (quantidadeDeCalorAbs: number) => {
            read.question('Informe a variação de temperatura: ', (variacaoDeTemperatura: number) => {

            CalculateHeatCapacity(quantidadeDeCalorAbs, variacaoDeTemperatura, name)
            read.close()

            })
            })
        }
    
    })       
    })

       
}

function CalculateQuantity(massa: number, calorEspecifico: number, variacaoDeTemperatura: number, name: string) {
    console.log(`Q = ${massa * calorEspecifico * variacaoDeTemperatura}. Bons estudos ${name}!`)
}

function CalculateSpecificHeat(capacidadeTermica: number, massa: number, name: string) {
    console.log(`C = ${capacidadeTermica / massa}. Bons estudos ${name}!`)
}

function CalculateHeatCapacity(quantidadeDeCalorAbs: number, variacaoDeTemperatura: number, name: string) {
    console.log(`CT = ${quantidadeDeCalorAbs / variacaoDeTemperatura}. Bons estudos ${name}!`)
}


    SelectOperation()