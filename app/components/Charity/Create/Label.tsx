type LabelProps = {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export const Label = ({ label, error, className, children }: LabelProps) => (
  <label className={`w-full flex flex-col gap-1 ${className}`}>
    <div className="flex justify-between">
      <div>{label}</div>
      {error && (
        <div className="flex items-center gap-1 text-rose-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <div aria-hidden>{error}</div>
        </div>
      )}
    </div>
    {children}
  </label>
);
