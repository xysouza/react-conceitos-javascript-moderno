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
    <div className="component-box">
      <h2>Exemplo: Funções atribuídas a variáveis</h2>

      <p>
        Funções são valores: podem ser guardadas em const e passadas como parâmetro.
      </p>

      <div className="code-block">
        <strong>Antes vs Depois</strong>
        <pre>
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

      <ul className="results-list">
        <li>
          Saudação (antes): <strong>{rAntes}</strong>
        </li>
        <li>
          Saudação (expressão): <strong>{rExpr}</strong>
        </li>
        <li>
          Saudação (arrow): <strong>{rArrow}</strong>
        </li>
      </ul>
    </div>
  );
}

export default Funcoes_Atribuidas_Varivaveis;