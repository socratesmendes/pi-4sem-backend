import BaseError from "./erroBase.js";

class NotFound extends BaseError {
    constructor(mensagem = "Página não encontrada") {
        super(mensagem, 404);
    }
}

export default NotFound;