import { RadioField } from "./RadioField.tsx";
import { SelectField } from "./SelectField.tsx";
import { TextField } from "./TextField.tsx";

const fieldComponentMap: Record<string, React.ComponentType<any>> = {
    text: TextField,
    number: TextField,
    select: SelectField,
    radio: RadioField,
  }

export const FieldRenderer = (props: any) => {
  
  const { field } = props;

  const Component = fieldComponentMap[field.ui.type];

  if (!Component) return null;

  return <Component {...props} type={field.ui.type} />;
};