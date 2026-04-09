import { FormConfig } from "./models/types";

export const vehicleJsonFormSchema001: FormConfig = {
  formName: "vehicleForm",
  formTitle: "Add New Vehicle",
  fields: [
    {
      name: "rooftop_id",
      ui: {
        label: "Rooftop",
        type: "text",
        placeholder: "Select rooftop",
      },
      validation: {
        type: "string",
      },
    },
    {
      name: "make",
      ui: {
        label: "Manufacturer",
        type: "text",
        placeholder: "Enter manufacturer",
      },
      validation: {
        type: "string",
      },
    },
    {
      name: "model",
      ui: {
        label: "Model",
        type: "text",
        placeholder: "Enter model",
      },
      validation: {
        type: "string",
        min: 1,
        min_error: '',
        required_error: "Model is required",
      },
    },
    {
      name: "year",
      ui: {
        label: "Manufacture Year",
        type: "number",
        placeholder: "Enter year",
      },
      validation: {
        type: "number",
        min: 1886,
        required_error: "Year is required",
        min_error: "Year must be after 1886",
      },
    },
    {
      name: "veh_listing_type",
      ui: {
        label: "Listing Type",
        type: "number",
      },
      validation: {
        type: "number",
        required_error: "Listing type is required",
      },
    },
    {
      name: "miles",
      ui: {
        label: "Mileage",
        type: "number",
        placeholder: "Enter mileage",
      },
      validation: {
        type: "number",
        min: 0,
        required_error: "Mileage is required",
        min_error: "Mileage cannot be negative",
      },
    },
    {
      name: "status",
      ui: {
        label: "Status",
        type: "radio",
        options: ["Active", "Inactive"],
      },
      validation: {
        type: "enum",
        values: ["Active", "Inactive"],
        required_error: "Status is required",
      },
    },
  ],
  crossFieldValidations: [
    {
      type: "crossField",
      fields: ["veh_listing_type", "miles"],
      helper: "validateUsedCarMileage",
      args: [],
      message: "Used cars must have mileage greater than 0",
    },
  ],
};
