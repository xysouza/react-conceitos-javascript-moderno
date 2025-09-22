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
    <div className="component-box">
      <h2>Exemplo: Callback (função como parâmetro)</h2>

      <p>
        Callback = passar uma função para outra executar.
      </p>

      <div className="code-block">
        <strong>Código (curto)</strong>
        <pre>{codigo}</pre>
      </div>

      <div className="code-block">
        <strong>Saída esperada</strong>
        <pre>{saida}</pre>
      </div>

      <div className="code-block">
        <strong>Antes vs Depois (formato do callback)</strong>
        <pre>{antesDepois}</pre>
      </div>
    </div>
  );
}

export default Callbacks;