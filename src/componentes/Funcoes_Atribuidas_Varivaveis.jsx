import React from 'react';

function Funcoes_Atribuidas_Varivaveis() {
  const nome = 'Adriano';

  // Antes (declaração tradicional)
  function saudacaoAntes(n) {
    return 'Olá, ' + n + '!';
  }

  // Depois (função expressão + arrow)
  const saudacaoExpr = function (n) {
    return 'Olá, ' + n + '!';
  };
  const saudacaoArrow = n => `Olá, ${n}!`;

  // Exemplos
  const rAntes = saudacaoAntes(nome);
  const rExpr = saudacaoExpr(nome);
  const rArrow = saudacaoArrow(nome);

  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h2>Exemplo: Funções atribuídas a variáveis</h2>

      <p style={{ marginBottom: 8 }}>
        Funções são valores: podem ser guardadas em const e passadas como parâmetro.
      </p>

      <div style={{ background: '#f8f8f8', padding: 8, borderRadius: 6, marginBottom: 10 }}>
        <strong>Antes vs Depois</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// Antes (declaração)
function saudacao(n) {
  return 'Olá, ' + n + '!';
}

// Depois (função expressão)
const saudacao = function (n) {
  return 'Olá, ' + n + '!';
};

// Arrow (moderno e curto)
const saudacaoArrow = n => \`Olá, \${n}!\`;`}
        </pre>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        <li style={{ marginBottom: 8 }}>
          Saudação (antes): <strong>{rAntes}</strong>
        </li>
        <li style={{ marginBottom: 8 }}>
          Saudação (expressão): <strong>{rExpr}</strong>
        </li>
        <li style={{ marginBottom: 8 }}>
          Saudação (arrow): <strong>{rArrow}</strong>
        </li>
      </ul>
    </div>
  );
}

export default Funcoes_Atribuidas_Varivaveis;