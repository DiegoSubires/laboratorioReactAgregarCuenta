import {
  isStringValueInformed,
  FieldValidationResult,
  //errorMessages,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
  //buildValidationFailedResult,
} from "@/common/validations";

export const validateTypeAccountField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};

export const validateAliasField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};
