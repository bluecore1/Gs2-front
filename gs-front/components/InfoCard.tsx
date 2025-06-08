type InfoCardProps = {
  title: string;
  items: { label: string; value: string }[];
  icon?: React.ReactNode;
};

export const InfoCard = ({ title, items, icon }: InfoCardProps) => {
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        {icon} {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label} className="flex justify-between">
            <span>{item.label}</span>
            <span className="text-slate-400">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
