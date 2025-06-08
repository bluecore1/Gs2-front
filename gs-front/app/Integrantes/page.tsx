export default function Integrantes() {
  const membros = [
    {
      nome: "Enzo Elia Tarraga",
      rm: "RM560901",
      foto: "/imagens/foto-enzo.jpg",
      linkedin: "https://www.linkedin.com/in/enzotarraga/",
    },
    {
      nome: "Rafael Terra Teodoro",
      rm: "RM560955",
      foto: "/imagens/foto-rafael.jpg",
      linkedin: "https://www.linkedin.com/in/rafael-terra-962289331/",
    },
    {
      nome: "Otoniel Arantes Barbado",
      rm: "RM560112",
      foto: "/imagens/foto-otoniel.jpg",
      linkedin: "https://www.linkedin.com/in/otoniel-barbado-7952b9329/",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-10">Integrantes do Projeto</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {membros.map((membro) => (
            <div
              key={membro.rm}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:shadow-xl hover:scale-105 transition-transform text-center"
            >
              <img
                src={membro.foto}
                alt={membro.nome}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500"
              />
              <h2 className="text-xl font-semibold text-white">{membro.nome}</h2>
              <p className="text-slate-400 mb-2">{membro.rm}</p>
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Ver LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
