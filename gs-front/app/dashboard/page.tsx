'use client'

import { useEffect, useState } from 'react'
import TableRecent from '@/components/TableRecent'
import RainChart from '@/components/RainChart'

type RegistroChuva = {
  id: number
  data_ocorrencia: string
  local: string
  volume_mm: number
  observacoes: string
  usuario_id: number | null
}

export default function Dashboard() {
  const [registros, setRegistros] = useState<RegistroChuva[]>([])

  useEffect(() => {
    fetch('https://controlechuva-production.up.railway.app/api/registros-chuva')
      .then(res => res.json())
      .then(data => setRegistros(data))
      .catch(() => console.error('Erro ao carregar dados'))
  }, [])

  const totalVolume = registros.reduce((acc, r) => acc + r.volume_mm, 0)
  const media = registros.length > 0 ? totalVolume / registros.length : 0

  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white">Dashboard Pluviométrico</h1>
        <p className="text-slate-400">Acompanhe os dados de chuva em tempo real</p>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="text-sm text-slate-400">Volume Total (Mês)</h3>
            <p className="text-2xl font-bold mt-2 text-white">{totalVolume.toFixed(1)} mm</p>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="text-sm text-slate-400">Registros Hoje</h3>
            <p className="text-2xl font-bold mt-2 text-white">{registros.length}</p>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="text-sm text-slate-400">Média Diária</h3>
            <p className="text-2xl font-bold mt-2 text-white">{media.toFixed(1)} mm</p>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="text-sm text-slate-400">Usuários Ativos</h3>
            <p className="text-2xl font-bold mt-2 text-white">–</p> {/* Se tiver info real, colocar */}
          </div>
        </div>

        {/* Gráfico e registros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 h-[420px] flex flex-col justify-start">
            <h3 className="font-semibold mb-4 text-white">🌧️ Volume de Chuva (Últimos 10 dias)</h3>
            <div className="flex-1 bg-slate-900 rounded-md px-2 pt-4 pb-4">
              <RainChart />
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="font-semibold mb-4 text-white">📍 Locais Recentes</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              {registros.map((r) => (
                <li key={r.id}>
                  {r.local} – {r.volume_mm.toFixed(1)} mm
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Registros Recentes */}
        <TableRecent />
      </div>
    </main>
  )
}
  