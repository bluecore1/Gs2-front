export const ChartRain = () => {
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        🌧️ Volume de Chuva (Últimos 10 dias)
      </h3>
      <div className="h-48 bg-slate-900 rounded-md flex items-center justify-center">
        <span className="text-slate-500">[Gráfico Aqui]</span>
      </div>
    </div>
  );
};
