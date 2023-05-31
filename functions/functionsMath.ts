import {read} from '../index';


function distanceTwoPoints(xPonto1: number, xPonto2: number, yPonto1: number, yPonto2: number, name: string){ 
    var distance = Math.round(Math.sqrt((xPonto1 - xPonto2) ** 2 + (yPonto1 - yPonto2 ) ** 2))
    console.log(`A distância entre esses pontos é ${distance}. Bons estudos ${name}!`)
}


export function ThemesMath(name: string){
    read.question("Encontramos Geometria Analítica. Digite 1 para Distância entre dois pontos. Ou S para sair.", (value: string) => {

        if (value == "1"){
            read.question('Digite o valor da abscissa do primeiro ponto: ', (xPonto1: number) => {
                read.question('Digite o valor da abscissa do segundo ponto: ', (xPonto2: number) => {
                    read.question('Digite o valor da ordenada do primeiro ponto: ', (yPonto1: number) => {
                        read.question('Digite o valor da ordenada do primeiro ponto: ', (yPonto2: number) => {
                            distanceTwoPoints(xPonto1, xPonto2, yPonto1, yPonto2, name)
                            read.close()
                        })
                    })
                })
            })
        }

        if(value == "S" || value == "s"){
            console.log(`Desculpa não poder ajudar ${name}. Volte quando precisar!`);
            read.close();
        }
    }) 

    
}