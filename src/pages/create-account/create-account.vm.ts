export interface AccountVm {
  id: string;
  type: string;
  alias: string;
  iban: string;
}

export interface Account {
  type: string;
  name: string;
}

export const createEmptyAccountVm = (): Account => ({
  type: "",
  name: "",
});

export interface NewAccountError {
  type: string;
  name: string;
}

export const createEmptyNewAccountError = (): NewAccountError => ({
  type: "",
  name: "",
});

export interface FieldValidationResult {
  succeeded: boolean;
  errorMessage?: string;
}

export interface FormValidationResult {
  succeeded: boolean;
  errors: NewAccountError;
}
