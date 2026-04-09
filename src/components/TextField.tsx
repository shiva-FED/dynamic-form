import { TextFieldProps } from "../models/types";
import { TextField as MuiTextField } from "@mui/material";

export const TextField = (props: TextFieldProps) => {
    const {name, label, type, placeholder, register, rules, error} = props;
  return (
    <MuiTextField
      fullWidth
      label={label}
      type={type}
      placeholder={placeholder}
      {...register(name, rules)}
      error={!!error}
      helperText={error}
      variant="outlined"
      size="small"
    />
  );
};
