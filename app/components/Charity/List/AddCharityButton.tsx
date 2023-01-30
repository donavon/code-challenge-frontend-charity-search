import { LinkButton } from '~/components/LinkButton';

export const AddCharityButton = () => {
  return (
    <LinkButton to="/charities/new">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <span className="md:hidden pl-1">Add Charity</span>
    </LinkButton>
  );
};
