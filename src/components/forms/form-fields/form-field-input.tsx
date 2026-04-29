import { FormField, FormItem } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import FormItemWrapper from "./form-item-wrapper";
import { Input } from "@/components/ui/input";

const FormFieldInput = ({
  name,
  label,
  placeholder,
  type = "text",
  isSubmitting,
  form,
  required,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  isSubmitting: boolean;
  form: UseFormReturn<any>;
  required?: boolean;
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItemWrapper label={label} required={required}>
        <Input
          placeholder={placeholder}
          type={type}
          {...field}
          onChange={
            type === "number"
              ? (e) => field.onChange(parseInt(e.target.value) || 0)
              : field.onChange
          }
          disabled={isSubmitting}
        />
      </FormItemWrapper>
    )}
  />
);

export default FormFieldInput;
