import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { SelectFieldProps } from "../models/types";
import { Controller } from "react-hook-form";

export const SelectField = (props: SelectFieldProps) => {
    const {name, label, control, rules, options, error} = props
  return (
    <FormControl fullWidth error={!!error} size="small">
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field }) => (
          <Select {...field} label={label}>
            <MenuItem value="">Select</MenuItem>
            {options?.map((opt: any) => (
              <MenuItem key={opt.id || opt} value={opt.id || opt}>
                {opt.name || opt}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};