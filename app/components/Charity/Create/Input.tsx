import { Label } from './Label';

type InputProps = {
  name: string;
  label: string;
  className?: string;
  value?: string;
  error?: string;
  type?: 'short' | 'long';
};

export const Input = ({
  name,
  label,
  className = '',
  value = '',
  error,
  type = 'short',
}: InputProps) => {
  const errorStyles = error ? '' : '';
  const inputStyles = `${errorStyles} w-full rounded-md p-2 bg-slate-800 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-highlight-5`;

  const props = {
    name,
    id: name,
    defaultValue: value,
    'aria-errormessage': error,
    'aria-invalid': error ? true : undefined,
  };

  return (
    <Label className={className} label={label} error={error}>
      {type === 'short' ? (
        <input className={inputStyles} type="text" {...props} />
      ) : (
        <textarea className={`h-24 ${inputStyles}`} {...props} />
      )}
    </Label>
  );
};
