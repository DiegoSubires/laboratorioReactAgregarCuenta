import * as apiModel from "./api";
import * as viewModel from "./create-account.vm";

export const mapNewAccountFromVmToApi = (
  newAccount: viewModel.Account
): apiModel.NewAccount => ({
  type: newAccount.type,
  name: newAccount.name,
});
