import cardValidator from "card-validator";

export const cardValid = value => cardValidator.number(value).isValid;

export const expireDateValid = value =>
  cardValidator.expirationDate(value).isValid;

export const cvvValid = value => cardValidator.cvv(value).isValid;
