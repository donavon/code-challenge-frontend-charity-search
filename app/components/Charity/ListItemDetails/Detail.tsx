type DetailProps = {
  title: string;
  children: React.ReactNode;
};

export const Detail = ({ title, children }: DetailProps) => (
  <div>
    <dt className="text-xl font-medium">{title}</dt>
    <dd>{children}</dd>
  </div>
);
