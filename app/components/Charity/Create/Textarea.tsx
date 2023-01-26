import { Label } from './Label';

type InputProps = {
  name: string;
  label: string;
  value?: string;
  error?: string;
};

export const Textarea = ({ name, label, value = '', error }: InputProps) => (
  <label>
    <Label label={label} error={error} />
    <textarea
      defaultValue={value}
      name={name}
      id={name}
      aria-errormessage={error}
      aria-invalid={error ? true : undefined}
    />
  </label>
);
