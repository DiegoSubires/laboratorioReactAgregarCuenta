import { validateAccountIdField } from "./movement-field.validation";

import { errorMessages } from "@/common/validations";

describe("transfer-field.validation specs", () => {
  describe("validateAccountIdField", () => {
    it("should return false when account id is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateAccountIdField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(errorMessages.REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when account id is informed", () => {
      // Arrange
      const value = "1";

      // Act
      const result = validateAccountIdField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
