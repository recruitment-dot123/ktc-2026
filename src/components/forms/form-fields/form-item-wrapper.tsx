import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";

interface FormItemWrapperProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export default function FormItemWrapper({
  label,
  required = false,
  children,
}: FormItemWrapperProps) {
  return (
    <FormItem>
      <FormLabel>
        {label}
        {required && <span>*</span>}
      </FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
