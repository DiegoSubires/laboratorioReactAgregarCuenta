import {
  isStringValueInformed,
  FieldValidationResult,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
} from "@/common/validations";

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};
