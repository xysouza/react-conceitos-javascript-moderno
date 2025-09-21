import React from 'react';

function Callbacks() {
  const codigo = [
    'function executar(callback) {',
    "  console.log('Iniciando execução do callback...');",
    '  callback();',
    "  console.log('Callback executado com sucesso!');",
    '}',
    '',
    'executar(() => {',
    "  console.log('Executando o callback passado como parâmetro.');",
    '});',
  ].join('\n');

  const saida = [
    'Iniciando execução do callback...',
    'Executando o callback passado como parâmetro.',
    'Callback executado com sucesso!',
  ].join('\n');

  const antesDepois = [
    '// Antes',
    'executar(function () {',
    "  console.log('Executando o callback passado como parâmetro.');",
    '});',
    '',
    '// Depois (arrow)',
    'executar(() => {',
    "  console.log('Executando o callback passado como parâmetro.');",
    '});',
  ].join('\n');

  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h2>Exemplo: Callback (função como parâmetro)</h2>

      <p style={{ marginBottom: 8 }}>
        Callback = passar uma função para outra executar.
      </p>

      <div style={{ background: '#f8f8f8', padding: 8, borderRadius: 6, marginBottom: 10 }}>
        <strong>Código (curto)</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{codigo}</pre>
      </div>

      <div style={{ background: '#f8f8f8', padding: 8, borderRadius: 6, marginBottom: 10 }}>
        <strong>Saída esperada</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{saida}</pre>
      </div>

      <div style={{ background: '#f8f8f8', padding: 8, borderRadius: 6 }}>
        <strong>Antes vs Depois (formato do callback)</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{antesDepois}</pre>
      </div>
    </div>
  );
}

export default Callbacks;