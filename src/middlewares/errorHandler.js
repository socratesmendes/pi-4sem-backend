import mongoose from "mongoose";
import BaseError from "../errors/erroBase.js";
import WrongRequisition from "../errors/wrongRequisition.js";
import ValidationError from "../errors/validationError.js";
import NotFound from "../errors/notFound.js";

// eslint-disable-next-line no-unused-vars
function errorHandler (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new WrongRequisition().sendResponse(res);
  } else if(erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).sendResponse(res);
  } else if(erro instanceof NotFound) {
    erro.sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
};

export default errorHandler;