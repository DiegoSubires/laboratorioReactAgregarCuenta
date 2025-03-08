import { TransferError, TransferVm } from "../../transfer/transfer.vm";
import { FormValidationResult } from "@/common/validations";
import { validateAccountIdField } from "./movement-field.validation";

export const validateForm = (
  transfer: TransferVm
): FormValidationResult<TransferError> => {
  const fieldValidationResults = [validateAccountIdField(transfer.accountId)];

  const formValidationResult: FormValidationResult<TransferError> = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      accountId: fieldValidationResults[0].errorMessage ?? "",
      iban: fieldValidationResults[1].errorMessage ?? "",
      name: fieldValidationResults[2].errorMessage ?? "",
      amount: fieldValidationResults[3].errorMessage ?? "",
      concept: fieldValidationResults[4].errorMessage ?? "",
      notes: fieldValidationResults[5].errorMessage ?? "",
      realDateTransfer: fieldValidationResults[6].errorMessage ?? "",
      email: fieldValidationResults[7].errorMessage ?? "",
      dateTransfer: "",
    },
  };

  return formValidationResult;
};
