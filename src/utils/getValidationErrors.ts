import { ValidationError } from 'yup';

interface Errors {
  // pra se tornar dinamico utilizamos um array na interface. qualquer palavra pode ser utilizada
  // mas como ela é uma chave de errors optamos por esse nome
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
