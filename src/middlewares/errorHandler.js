import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."})
  } else if(erro instanceof mongoose.Error.ValidationError) {
    const errormessages = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ");
    res.status(400).send({message: `Houve um erro de validação de dados. ${errormessages}`});
  } else {
    res.status(500).json({ message: "Erro interno do servidor."});
  }
};

export default errorHandler;