import { Link } from '@remix-run/react';

type LinkButtonProps = React.ComponentProps<typeof Link>;

export const LinkButton = ({
  'aria-disabled': disabled,
  children,
  ...props
}: LinkButtonProps) => {
  return disabled ? (
    <span role="button" className="secondary outline" aria-disabled>
      {children}
    </span>
  ) : (
    <Link role="button" prefetch="intent" {...props}>
      {children}
    </Link>
  );
};
