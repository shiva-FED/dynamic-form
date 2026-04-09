import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { RadioFieldProps  } from "../models/types";
import { Controller } from "react-hook-form";

export const RadioField = (props: RadioFieldProps ) => {
    const {name, label, rules, options, error, control} = props
  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <RadioGroup row {...field} value={field.value || ""}>
            {options.map((opt) => (
              <FormControlLabel
                key={opt}
                value={opt}
                control={<Radio />}
                label={opt}
              />
            ))}
          </RadioGroup>
        )}
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};