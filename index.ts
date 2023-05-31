import './interfaces.ts';
import {ThemesFisic} from './functions/functionsFisic';
import {ThemesMath} from './functions/functionsMath';

export var readline = require('readline')

export var read = readline.createInterface(
    process.stdin, process.stdout
)

function SelectOperation() {
    read.question('Qual seu nome ? ', (name: string) => {
        read.question(`${name}, em qual matéria deseja entrar ? Digite M para Matemática ou F para Física. `,
            (value: any) => {

                if (value == "F" || value == "f") {
                    ThemesFisic(name)

                }
                if (value == "M" || value == "m"){
                    ThemesMath(name)
                }

            })

    })

}

SelectOperation()