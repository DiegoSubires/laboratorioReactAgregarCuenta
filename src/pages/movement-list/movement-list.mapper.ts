import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount,
    availableBalance: movement.balance,
    transactionDate: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
    accountId: movement.accountId,
  }));

export const mapAccountListFromApiToVm = (
  account: apiModel.Account
): viewModel.AccountVm => {
  return {
    id: account.id,
    alias: account.name,
    iban: account.iban,
    availableBalance: account.balance,
  };
};
