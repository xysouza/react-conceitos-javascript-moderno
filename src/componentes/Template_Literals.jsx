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
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h2>Exemplo: Template Literals (crases)</h2>

      <p style={{ marginBottom: 8 }}>
        Strings com crase permitem:
        - interpolar variáveis/expressões com ${'{ ... }'}
        - escrever em múltiplas linhas
      </p>

      <div style={{ background: '#f8f8f8', padding: 8, borderRadius: 6, marginBottom: 10 }}>
        <strong>Antes vs Depois</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`const nome = 'Adriano';

// Antes (concatenação)
const frase1 = 'Olá, ' + nome + '! Bem-vindo ao React.';

// Depois (template literal)
const frase2 = \`Olá, \${nome}! Bem-vindo ao React.\`;`}
        </pre>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        <li style={{ marginBottom: 10 }}>
          1) Interpolação:
          <div><code>{'`Olá, ${nome}! Bem-vindo ao React.`'}</code></div>
          <div>Saída: <strong>{saudacao}</strong></div>
        </li>

        <li style={{ marginBottom: 10 }}>
          2) Expressões dentro de ${'{}'}:
          <div><code>{'`2 + 3 = ${2 + 3}`'}</code></div>
          <div>Saída: <strong>{resultado}</strong></div>
        </li>

        <li style={{ marginBottom: 10 }}>
          3) Múltiplas linhas (enter dentro das crases):
          <div>Exemplo (código):</div>
          <pre style={{ margin: 0 }}>
{`const texto = \`Linha 1
Linha 2
Linha 3\`;`}
          </pre>

          <div style={{ marginTop: 6 }}>Saída (preserva quebras):</div>
          <pre style={{ margin: 0 }}>{multiline}</pre>

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
