'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Registrar() {
  const [data, setData] = useState('')
  const [local, setLocal] = useState('')
  const [volume, setVolume] = useState('')
  const [observacoes, setObservacoes] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!data || !local || !volume) {
    setErro('Preencha todos os campos obrigatórios.');
    setSucesso('');
    return;
  }

  try {
    const res = await fetch('https://controlechuva-production.up.railway.app/api/registros-chuva', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data_ocorrencia: data,
        local,
        volume_mm: parseFloat(volume),
        observacoes,
        usuario_id: 1
      })
    });

    if (!res.ok) throw new Error('Erro ao salvar');

    setSucesso('Registro salvo com sucesso!');
    setErro('');
    setData('');
    setLocal('');
    setVolume('');
    setObservacoes('');
  } 
  catch {
  setErro('Erro ao registrar. Tente novamente.');
  setSucesso('');
}
  }


  return (
    <main className="bg-gradient-to-b from-[#1740a0] to-[#0B1120] min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Registrar Dados de Chuva</h1>
        <p className="text-slate-400 mb-6">
          Contribua com dados precisos para nossa base pluviométrica.
        </p>

        {erro && <p className="bg-red-700 text-white p-3 rounded mb-4">{erro}</p>}
        {sucesso && <p className="bg-green-600 text-white p-3 rounded mb-4">{sucesso}</p>}

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8 space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Data da Ocorrência *</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Local *</label>
            <input
              type="text"
              placeholder="Ex: São Paulo, SP"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Volume (mm) *</label>
            <input
              type="number"
              placeholder="Ex: 25.5"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Observações</label>
            <textarea
              rows={3}
              placeholder="Observações adicionais sobre a chuva..."
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Salvar Registro
            </button>
            <Link
              href="/"
              className="bg-slate-600 px-6 py-2 rounded-lg hover:bg-slate-700"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
