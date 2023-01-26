type LabelProps = {
  label: string;
  error?: string;
};

export const Label = ({ label, error }: LabelProps) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>{label}</div>
    {error && <div aria-hidden>{error}</div>}
  </div>
);
