import { useForm } from "react-hook-form";
import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
import { FieldRenderer } from "./FieldRenderer.tsx";
import { SchemaConfig } from "../models/types";
import { buildValidationRules } from "../hooks/validations.tsx";
import { useEffect } from "react";

const DynamicForm = (props: SchemaConfig) => {
  const { schema } = props;
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const values = watch();
  // const miles = watch('miles');

  useEffect(() => {
    console.log("trigered...!");
    
    schema.crossFieldValidations?.forEach((rule) => {
      if (rule.helper === "validateUsedCarMileage") {
        if (
          values.veh_listing_type === "Used" &&
          (!values.miles || values.miles <= 0)
        ) {
          setError("miles", { message: rule.message });
        } else {
          clearErrors("miles");
        }
      }
    });
  }, [values.miles]);

  const onSubmit = (data: any) => {
    console.log("Submitted:", data);
    reset();
  };

  const onError = (err: any) => {
    console.log("error:", err);
  };

  return (
    <Card sx={{ maxWidth: 700, margin: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {schema.formTitle}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid container spacing={2}>
            {schema.fields.map((field) => {
              const rules = buildValidationRules(field.validation);

              return (
                <Grid key={field.name} container spacing={2} sx={{ width: '100%' }}>
                  <Grid size={{ xs: 12 }}>
                    <FieldRenderer
                      field={field}
                      name={field.name}
                      label={field.ui.label}
                      options={
                        field.ui.type === "select" || field.ui.type === "radio"
                          ? field.ui.options
                          : undefined
                      }
                      control={control}
                      register={register}
                      rules={rules}
                      error={errors[field.name]?.message}
                    />
                  </Grid>
                </Grid>
              );
            })}

            <Grid size={{ xs: 12 }}>
              <Button type="submit" variant="contained" fullWidth size="large">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default DynamicForm;
