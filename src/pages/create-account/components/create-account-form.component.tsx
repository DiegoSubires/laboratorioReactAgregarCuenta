import React from "react";
import {
  Account,
  createEmptyAccountVm,
  NewAccountError,
  createEmptyNewAccountError,
} from "../create-account.vm";
import { validateForm } from "../validations";
import classes from "./create-account.component.module.css";

interface Props {
  onNewAccount: (accountInfo: Account) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { onNewAccount } = props;
  const [newAccount, setNewAccount] = React.useState<Account>(
    createEmptyAccountVm()
  );

  const [errors, setErrors] = React.useState<NewAccountError>(
    createEmptyNewAccountError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(newAccount);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onNewAccount(newAccount);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              onChange={handleFieldChange}
              className={classes.large}
              title="selectAccountType"
            >
              <option value="">Seleccionar</option>
              <option value="1">Cuenta Corriente</option>
              <option value="2">Cuenta de Ahorro</option>
              <option value="3">Cuenta de Nómina</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              name="name"
              type="text"
              className={classes.large}
              onChange={handleFieldChange}
              title="inputName"
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button className={classes.button} type="submit">
          GUARDAR
        </button>
      </form>
    </div>
  );
};
