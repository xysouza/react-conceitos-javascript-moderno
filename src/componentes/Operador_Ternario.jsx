import React from 'react';

function Operador_Ternario() {
  const logado = false;

  // Antes (if/else)
  let msg;
  if (logado) {
    msg = 'Bem-vindo(a)!';
  } else {
    msg = 'Faça o login para continuar.';
  }

  // Depois (ternário)
  const mensagem = logado ? 'Bem-vindo(a)!' : 'Faça o login para continuar.';

  // Ternário direto no JSX
  const bloco = logado ? <strong>Área do usuário</strong> : <em>Visitante</em>;

  return (
    <div className="component-box">
      <h2>Exemplo: Operador Ternário</h2>

      <p>
        Forma curta do if/else:
        <code>condição ? valorSeVerdadeiro : valorSeFalso</code>
      </p>

      <div className="code-block">
        <strong>Antes vs Depois</strong>
        <pre>
{`// Antes
let msg;
if (logado) {
  msg = 'Bem-vindo(a)!';
} else {
  msg = 'Faça o login para continuar.';
}

// Depois
const mensagem = logado ? 'Bem-vindo(a)!' : 'Faça o login para continuar.';`}
        </pre>
      </div>

      <ul className="results-list">
        <li>
          Mensagem (if/else): <strong>{msg}</strong>
        </li>
        <li>
          Mensagem (ternário): <strong>{mensagem}</strong>
        </li>
        <li>
          No JSX:
          <div><code>{`{logado ? <strong>Área do usuário</strong> : <em>Visitante</em>}`}</code></div>
          <div>Renderizado: {bloco}</div>
        </li>
      </ul>

      <p style={{ marginTop: 10 }}>
        Dica: evite ternários aninhados. Prefira if/else ou funções para legibilidade.
      </p>
    </div>
  );
}

export default Operador_Ternario;
