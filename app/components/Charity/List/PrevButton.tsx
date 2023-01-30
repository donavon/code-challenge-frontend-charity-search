import { LinkButton } from '~/components/LinkButton';

type PrevButtonProps = Omit<
  React.ComponentProps<typeof LinkButton>,
  'children'
>;

export const PrevButton = ({
  'aria-disabled': disabled,
  ...props
}: PrevButtonProps) => {
  return (
    <LinkButton aria-disabled={disabled} aria-label="previous page" {...props}>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      <span className="md:hidden pl-1">Prev</span>
    </LinkButton>
  );
};
