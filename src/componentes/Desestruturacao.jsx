import React from 'react';

function Desestruturacao() {
  // Objeto de exemplo
  const pessoa = {
    nome: 'Adriano',
    rm: '12577',
  };

  // Básico (objetos)
  const { nome, rm } = pessoa;

  // Extras úteis (ainda simples)
  // 1) Renomear variável
  const { nome: primeiroNome } = pessoa;

  // 2) Valor padrão (se a propriedade não existir)
  const { curso = 'Não informado' } = pessoa;

  // 3) Arrays
  const numeros = [10, 20, 30];
  const [a, b] = numeros; // pega os dois primeiros

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>Exemplo: Desestruturação (ES6)</h2>

      <p style={{ marginBottom: 8 }}>
        Desestruturar = tirar valores de um objeto/array e guardar em variáveis.
      </p>

      <div style={{ background: '#f8f8f8', padding: 8, borderRadius: 6, marginBottom: 10 }}>
        <strong>Antes vs Depois</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
          <code>{`const pessoa = { nome: 'Adriano', rm: '12577' };

// Antes (sem desestruturação)
const nome1 = pessoa.nome;
const rm1 = pessoa.rm;

// Depois (com desestruturação)
const { nome, rm } = pessoa;`}</code>
        </pre>
      </div>

      <p>Nome: <strong>{nome}</strong></p>
      <p>RM: <strong>{rm}</strong></p>

      <hr />

      <h3 style={{ marginTop: 10 }}>Extras úteis</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        <li style={{ marginBottom: 8 }}>
          1) Renomear:
          <div><code>{`const { nome: primeiroNome } = pessoa;`}</code></div>
          <div>Saída: <strong>{primeiroNome}</strong></div>
        </li>
        <li style={{ marginBottom: 8 }}>
          2) Valor padrão:
          <div><code>{`const { curso = 'Não informado' } = pessoa;`}</code></div>
          <div>Saída: <strong>{curso}</strong></div>
        </li>
        <li style={{ marginBottom: 8 }}>
          3) Arrays:
          <div><code>{`const numeros = [10, 20, 30];
const [a, b] = numeros;`}</code></div>
          <div>Saída: a=<strong>{a}</strong>, b=<strong>{b}</strong></div>
        </li>
      </ul>
    </div>
  );
}

export default Desestruturacao;