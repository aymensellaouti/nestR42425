import { ValidationArguments } from "class-validator"

export const minMaxErrorMessage = (isMin= true) => {
    const message = isMin ? "trop petite": "trop grande"
    
    return (validationArguments: ValidationArguments) => {
        return `La chaine ${validationArguments.value} est ${message}`
    }
}