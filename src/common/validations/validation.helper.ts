import { errorMessages } from "./validation.const";
import { FieldValidationResult } from "./validation.model";

export const buildValidationFailedResult = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSucceededResult = () => ({
  succeeded: true,
});

export const buildRequiredFieldValidationFailedResponse =
  (): FieldValidationResult =>
    buildValidationFailedResult(errorMessages.REQUIRED_FIELD_MESSAGE);
