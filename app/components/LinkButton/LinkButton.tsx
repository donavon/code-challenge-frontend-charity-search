import { Link } from '@remix-run/react';

type LinkButtonProps = React.ComponentProps<typeof Link>;

const buttonStyle =
  'inline-flex items-center no-underline py-1 px-2 rounded-md min-h-[40px] border-2 ';

export const LinkButton = ({
  'aria-disabled': disabled,
  className,
  children,
  ...props
}: LinkButtonProps) =>
  disabled ? (
    <span
      role="button"
      className={`${buttonStyle} bg-disabledbuttonbg text-disabledbuttontext border-gray-500`}
      aria-disabled
    >
      {children}
    </span>
  ) : (
    <Link
      role="button"
      prefetch="intent"
      {...props}
      className={`${buttonStyle} bg-primarybuttonbg-default text-primarybuttontext border-primarybuttonbg-default ${className}`}
    >
      {children}
    </Link>
  );
