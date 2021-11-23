const NO_CLEAN = false
const CLEAN = true

export default class CalculatorModel {
    #value: string
    #acumulator: number
    #screenClean: boolean
    #operation: string

    constructor(
        value: string = null, 
        acumulator: number = null, 
        operation: string = null, 
        screenClean: boolean = false
        ) 
    {
        this.#value = value
        this.#acumulator = acumulator
        this.#screenClean = screenClean
        this.#operation = operation
    }

    get value(){
        return this.#value?.replace('.', ',') || '0'
    }
    
    numberDigit(newValue: string) {
        return new CalculatorModel(
            (this.#screenClean || !this.#value) ? newValue : this.#value + newValue,
            this.#acumulator,
            this.#operation,
            NO_CLEAN,

        )
    }

    dotDigit(newValue: string) {
        return new CalculatorModel(
            this.#value?.includes('.') ? this.#value : this.#value + '.',
            this.#acumulator,
            this.#operation,
            NO_CLEAN,
        )
    }

    clear() {
        return new CalculatorModel()
    }

    opDigit(nextOps: string) {
        return this.calculate(nextOps)
    }

    calculate(nextOps: string = null) {
        const acumulator = !this.#operation
            ? parseFloat(this.#value)
            : eval(`${this.#acumulator} ${this.#operation} ${this.#value}`)

        const finalValue = !this.#operation ? this.#value : `${acumulator}`

        return new CalculatorModel(
            finalValue,
            acumulator,
            nextOps,
            nextOps ? CLEAN : NO_CLEAN
        )
    } 

}

const calc = new CalculatorModel()
calc.value