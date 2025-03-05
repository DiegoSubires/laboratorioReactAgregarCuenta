import { validateForm } from "./create-account-form.validation";
import * as newAccountFieldValidation from "./create-account-field.validation";
import { Account } from "../create-account.vm";
import { vi } from "vitest";

describe("create-account-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are correct", () => {
      // Arrange
      const newAccount: Account = {
        type: "1",
        name: "pensión",
      };

      vi.spyOn(
        newAccountFieldValidation,
        "validateTypeAccountField"
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(newAccountFieldValidation, "validateAliasField").mockReturnValue(
        {
          succeeded: true,
        }
      );

      // Act
      const result = validateForm(newAccount);

      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: "",
      });
    });

    it("should return false when validateNameFieldAmount is incorrect", () => {
      // Arrange
      const newAccount: Account = {
        type: "",
        name: "",
      };

      vi.spyOn(
        newAccountFieldValidation,
        "validateTypeAccountField"
      ).mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });

      vi.spyOn(newAccountFieldValidation, "validateAliasField").mockReturnValue(
        {
          succeeded: true,
        }
      );

      // Act
      const result = validateForm(newAccount);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "1",
        name: "Error",
      });
    });
  });
});
