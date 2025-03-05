import Axios from "axios";
import { Account, NewAccount } from "./create-account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveNewAccount = (newAccount: NewAccount): Promise<Account> =>
  Axios.post<Account>(urlAccount, newAccount).then(({ data }) => data);

export const getAccountList = (): Promise<Account[]> =>
  Axios.get<Account[]>(urlAccount).then(({ data }) => data);
