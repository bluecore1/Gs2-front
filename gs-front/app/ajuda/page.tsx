export default function Ajuda() {
  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen p-6">
      <div className="max-w-3xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">❓ Ajuda e Perguntas Frequentes</h1>

        <div className="space-y-6 text-slate-300">
          <div>
            <h2 className="font-semibold text-lg">Como faço para registrar uma chuva?</h2>
            <p>
              Vá até a aba <strong>&quot;Registrar&quot;</strong>, preencha os campos obrigatórios e clique em <strong>&quot;Salvar Registro&quot;</strong>.
            </p>

          </div>

          <div>
            <h2 className="font-semibold text-lg">Quais campos são obrigatórios?</h2>
            <p>Data, Local e Volume (mm) são campos obrigatórios para o registro.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Consigo editar ou excluir um registro?</h2>
            <p>Ainda não. Essa funcionalidade será disponibilizada em versões futuras.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Preciso de conta para usar o sistema?</h2>
            <p>Não. O sistema está aberto para uso sem necessidade de login.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
