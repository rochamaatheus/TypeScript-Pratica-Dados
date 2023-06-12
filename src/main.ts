import fetchData from './fetchData';
import normalizarTransacao from './normalizarTransacao';

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json?'
  );

  if (!data) return;

  const transacoes = data.map(normalizarTransacao);
}

handleData();
