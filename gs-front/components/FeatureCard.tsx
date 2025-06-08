type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-[#1E293B] hover:bg-[#273549] border border-transparent hover:border-blue-600 rounded-lg p-6 transition-colors cursor-pointer">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="bg-blue-700 rounded-full p-3 mb-4">
          <span className="text-white text-xl">{icon}</span>
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </div>
  );
};
