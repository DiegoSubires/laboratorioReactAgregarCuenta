import { NewAccountError, Account } from "../create-account.vm";
import { FormValidationResult } from "@/common/validations";
import {
  validateTypeAccountField,
  validateAliasField,
} from "./create-account-field.validation";

export const validateForm = (
  newAccount: Account
): FormValidationResult<NewAccountError> => {
  const fieldValidationResults = [
    validateTypeAccountField(newAccount.type),
    validateAliasField(newAccount.name),
  ];

  const formValidationResult: FormValidationResult<NewAccountError> = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };

  return formValidationResult;
};
