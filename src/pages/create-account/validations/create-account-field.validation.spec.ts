import {
  validateTypeAccountField,
  validateAliasField,
} from "./create-account-field.validation";

import { errorMessages } from "@/common/validations";

describe("create-account-field.validation specs", () => {
  describe("validateTypeAccountField", () => {
    it("should return false when account type is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateTypeAccountField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(errorMessages.REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when concept is informed", () => {
      // Arrange
      const value = "John Doe";

      // Act
      const result = validateTypeAccountField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateAliasField", () => {
    it("should return false when account type is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateAliasField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(errorMessages.REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when concept is informed", () => {
      // Arrange
      const value = "John Doe";

      // Act
      const result = validateAliasField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
