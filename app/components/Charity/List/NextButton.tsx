import { LinkButton } from '~/components/LinkButton';

type NextButtonProps = Omit<
  React.ComponentProps<typeof LinkButton>,
  'children'
>;

export const NextButton = ({
  'aria-disabled': disabled,
  ...props
}: NextButtonProps) => {
  return (
    <LinkButton aria-disabled={disabled} aria-label="next page" {...props}>
      <span className="md:hidden pr-1">Next</span>
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
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </LinkButton>
  );
};
