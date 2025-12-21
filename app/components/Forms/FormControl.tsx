import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function FormControl({
  formId,
  defaultValues,
  formValidationSchema,
  onSubmit,
  styles,
  render,
}: any) {
  const methods = useForm({
    resolver: zodResolver(formValidationSchema),
    defaultValues,
  });

  return (
    <form id={formId} onSubmit={methods.handleSubmit(onSubmit)} style={styles}>
      {render(methods.control, methods.formState.errors, methods)}
    </form>
  );
}
