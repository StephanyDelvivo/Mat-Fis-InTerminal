interface Quantity {
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

interface DistanceTwoPoints {
    xPonto1: number, 
    xPonto2: number, 
    yPonto1: number, 
    yPonto2: number
}