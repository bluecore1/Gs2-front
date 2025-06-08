import Link from 'next/link';

export default function Home() {
  const funcionalidades = [
    {
      titulo: 'Registro Simples',
      descricao: 'Interface intuitiva para cadastrar dados de chuva de forma rápida e eficiente.',
    },
    {
      titulo: 'Análises Visuais',
      descricao: 'Gráficos e dashboards para visualizar padrões e tendências pluviométricas.',
    },
    {
      titulo: 'Acesso Mobile',
      descricao: 'Plataforma responsiva que funciona perfeitamente em dispositivos móveis.',
    },
    {
      titulo: 'Dados Abertos',
      descricao: 'Informações democráticas e acessíveis para toda a comunidade.',
    },
  ];

  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Cadastro da <span className="text-blue-500">Chuva</span>
        </h1>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Democratizando o acesso a dados pluviométricos para agricultores,
          pesquisadores, estudantes e órgãos públicos através de uma plataforma
          simples e moderna.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <Link
            href="/registrar"
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Registrar Chuva
          </Link>
          <Link
            href="/dashboard"
            className="bg-slate-900 px-6 py-2 rounded-lg border border-slate-700 hover:bg-slate-800"
          >
            Ver Dashboard
          </Link>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6">
            Funcionalidades Principais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {funcionalidades.map((item) => (
              <div
                key={item.titulo}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500"
              >
                <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
                <p className="text-sm text-slate-400">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center mb-16">
            <div className="flex-1 text-left">
              <h3 className="text-xl font-semibold mb-4">Para Quem é Útil?</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Agricultores monitorando irrigação</li>
                <li>• Pesquisadores coletando dados</li>
                <li>• Municípios planejando infraestrutura</li>
                <li>• Estudantes em projetos ambientais</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p>📊 <strong>1.250+</strong> Registros</p>
              <p>🌍 <strong>45+</strong> Cidades</p>
              <p>👥 <strong>95+</strong> Usuários</p>
              <p>💯 <strong>100%</strong> Gratuito</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              Comece a Contribuir Hoje
            </h3>
            <Link
              href="/registrar"
              className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Fazer Primeiro Registro
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
