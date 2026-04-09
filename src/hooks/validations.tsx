import { RegisterOptions } from "react-hook-form";
import { ValidationConfig } from "../models/types";


export const buildValidationRules = (
  validation: ValidationConfig
): RegisterOptions => {
  const rules: RegisterOptions = {};

  if (validation.required_error) {
    rules.required = validation.required_error;
  }

  if (validation.type === "string") {
    if (validation.min) {
      rules.minLength = {
        value: validation.min,
        message: validation.required_error,
      };
    }
  }

  if (validation.type === "number") {
    rules.valueAsNumber = true;

    if (validation.min !== undefined) {
      rules.min = {
        value: validation.min,
        message: validation.min_error,
      };
    }

    if (validation.max !== undefined) {
      rules.max = {
        value: validation.max,
        message: validation.max_error,
      };
    }
  }

  if (validation.type === "enum") {
    rules.validate = (value: string) =>
      validation.values?.includes(value) ||
      validation.required_error;
  }

  return rules;
};