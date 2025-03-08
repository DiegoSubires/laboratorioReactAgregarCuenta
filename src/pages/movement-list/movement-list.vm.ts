export interface AccountVm {
  id: string;
  alias: string;
  iban: string;
  availableBalance: number;
}
export interface AccountListVm {
  id: string;
  alias: string;
  iban: string;
}

export interface MovementVm {
  id: string;
  description: string;
  amount: number;
  availableBalance: number;
  transactionDate: Date;
  realTransaction: Date;
  accountId: string;
}

export const createEmptyAccount = (): AccountVm => ({
  id: "",
  alias: "",
  iban: "",
  availableBalance: 0,
});

export interface TransferError {
  accountId: string;
  iban: string;
  name: string;
  amount: string;
  concept: string;
  notes: string;
  dateTransfer: string;
  realDateTransfer?: string;
  email: string;
}
export const createEmptyTransferError = (): TransferError => ({
  accountId: "",
  iban: "",
  name: "",
  amount: "",
  concept: "",
  notes: "",
  dateTransfer: "",
  realDateTransfer: "",
  email: "",
});
