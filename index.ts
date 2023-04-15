import './interfaces.ts';
import { Fisic} from './functionsFisic';

export var readline = require('readline')

export var read = readline.createInterface(
    process.stdin, process.stdout
)

function SelectOperation() {
    read.question('Qual seu nome ? ', (name: string) => {
        read.question(`${name}, em qual matéria deseja entrar ? Digite M para Matemática ou F para Física. `,
            (value: any) => {

                if (value == "F" || value == "f") {
                    Fisic(name)

                }
            })

    })

}

SelectOperation()