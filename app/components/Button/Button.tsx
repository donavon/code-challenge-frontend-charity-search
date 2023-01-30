type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonStyle =
  'inline-flex items-center no-underline py-1 px-3 rounded-md min-h-[40px]';

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${buttonStyle} bg-primarybuttonbg-default text-primarybuttontext border-2 border-primarybuttonbg-default ${className}`}
    >
      {children}
    </button>
  );
};
