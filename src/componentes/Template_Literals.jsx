import React from 'react';

function Template_Literals() {
  const nome = 'Adriano';

  // Exemplos com Template Literals
  const saudacao = `Olá, ${nome}! Bem-vindo ao React.`;
  const resultado = `2 + 3 = ${2 + 3}`;
  const multiline = `Linha 1
Linha 2
Linha 3`; // quebra de linha real (enter dentro das crases)
  const upper = `Maiúsculas: ${nome.toUpperCase()}`;

  return (
    <div className="component-box">
      <h2>Exemplo: Template Literals (crases)</h2>

      <p>
        Strings com crase permitem:
        - interpolar variáveis/expressões com ${'{ ... }'}
        - escrever em múltiplas linhas
      </p>

      <div className="code-block">
        <strong>Antes vs Depois</strong>
        <pre>
{`const nome = 'Adriano';

// Antes (concatenação)
const frase1 = 'Olá, ' + nome + '! Bem-vindo ao React.';

// Depois (template literal)
const frase2 = \`Olá, \${nome}! Bem-vindo ao React.\`;`}
        </pre>
      </div>

      <ul className="results-list">
        <li>
          1) Interpolação:
          <div><code>{'`Olá, ${nome}! Bem-vindo ao React.`'}</code></div>
          <div>Saída: <strong>{saudacao}</strong></div>
        </li>

        <li>
          2) Expressões dentro de ${'{}'}:
          <div><code>{'`2 + 3 = ${2 + 3}`'}</code></div>
          <div>Saída: <strong>{resultado}</strong></div>
        </li>

        <li>
          3) Múltiplas linhas (enter dentro das crases):
          <div>Exemplo (código):</div>
          <pre>
{`const texto = \`Linha 1
Linha 2
Linha 3\`;`}
          </pre>

          <div style={{ marginTop: 6 }}>Saída (preserva quebras):</div>
          <pre>{multiline}</pre>

          <div style={{ marginTop: 6 }}>
            Fora do &lt;pre&gt;, use CSS:
            <div><code>{'<div style={{ whiteSpace: "pre-line" }}>{texto}</div>'}</code></div>
            <div style={{ whiteSpace: 'pre-line' }}>{multiline}</div>
          </div>
        </li>

        <li>
          4) Chamadas de função:
          <div><code>{'`Maiúsculas: ${nome.toUpperCase()}`'}</code></div>
          <div>Saída: <strong>{upper}</strong></div>
        </li>
      </ul>
    </div>
  );
}

export default Template_Literals;
