export interface AccountVm {
  id: string;
  alias: string;
  iban: string;
  availableBalance: number;
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
