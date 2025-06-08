'use client'

import { useEffect, useState } from 'react'

type RegistroChuva = {
  id: number
  data_ocorrencia: string
  local: string
  volume_mm: number
  observacoes: string
  usuario_id: number | null
}

export default function TableRecent() {
  const [dados, setDados] = useState<RegistroChuva[]>([])

  useEffect(() => {
    fetch('https://controlechuva-production.up.railway.app/api/registros-chuva')
      .then(res => res.json())
      .then(data => setDados(data))
      .catch(err => console.error('Erro ao buscar registros:', err))
  }, [])

  return (
    <div className="bg-slate-800 p-4 mt-8 rounded-lg border border-slate-700">
      <h3 className="font-semibold mb-4 text-white">📅 Registros Recentes</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-400">
            <th>Data</th>
            <th>Local</th>
            <th>Volume</th>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 text-slate-300">
          {dados.map((r) => (
            <tr key={r.id}>
              <td>{new Date(r.data_ocorrencia).toLocaleDateString('pt-BR')}</td>
              <td>{r.local}</td>
              <td>{r.volume_mm} mm</td>
              <td>{r.usuario_id ?? 'Anônimo'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
