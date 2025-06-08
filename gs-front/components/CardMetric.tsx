type CardMetricProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

export const CardMetric = ({ title, value, subtitle, icon }: CardMetricProps) => {
  return (
    <div className="bg-[#172554] p-4 rounded-lg">
      <div className="flex items-center gap-2 text-slate-300 text-sm mb-1">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      {subtitle && <div className="text-green-500 text-xs">{subtitle}</div>}
    </div>
  );
};
