type CardProps = {
  title: string;
  value: string;
};

export const Card = ({ title, value }: CardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);
