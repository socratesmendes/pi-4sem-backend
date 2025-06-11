import wrongRequisition from "./wrongRequisition.js";

class ValidationError extends wrongRequisition {
    constructor(erro) {
        const errormessages = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ");
        super(`Houve um erro de validação de dados. ${errormessages}`);
    }
}

export default ValidationError;