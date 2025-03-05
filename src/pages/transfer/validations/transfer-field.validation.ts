import {
  isStringValueInformed,
  isValidIban,
  isPositiveNumber,
  isValueNotNullOrUndefined,
  isDateAfterToday,
  isEMailWellFormed,
  FieldValidationResult,
  errorMessages,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
  buildValidationFailedResult,
} from "@/common/validations";

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};

export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResult(errorMessages.INVALID_IBAN_MESSAGE);
  }

  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResult(errorMessages.INVALID_AMOUNT_MESSAGE);
  }

  return buildValidationSucceededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};

export const validateNotesField = (_: string): FieldValidationResult =>
  buildValidationSucceededResult();

export const validateRealDateTransferField = (
  value?: string
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSucceededResult();
  }

  if (value && !isDateAfterToday(value)) {
    return buildValidationFailedResult(
      errorMessages.INVALID_REAL_DATE_TRANSFER_MESSAGE
    );
  }

  return buildValidationSucceededResult();
};

export const validateEmailField = (value?: string): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSucceededResult();
  }

  if (value && !isEMailWellFormed(value)) {
    return buildValidationFailedResult(errorMessages.INVALID_EMAIL_MESSAGE);
  }

  return buildValidationSucceededResult();
};
