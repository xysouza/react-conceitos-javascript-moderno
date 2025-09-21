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
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h2>Exemplo: Operador Ternário</h2>

      <p style={{ marginBottom: 8 }}>
        Forma curta do if/else:
        <code style={{ marginLeft: 6 }}>condição ? valorSeVerdadeiro : valorSeFalso</code>
      </p>

      <div style={{ background: '#f8f8f8', padding: 8, borderRadius: 6, marginBottom: 10 }}>
        <strong>Antes vs Depois</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
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

      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        <li style={{ marginBottom: 8 }}>
          Mensagem (if/else): <strong>{msg}</strong>
        </li>
        <li style={{ marginBottom: 8 }}>
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
