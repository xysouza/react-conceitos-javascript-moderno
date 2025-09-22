import React from 'react';

function Arrow_Function() {
  // Antes (funções declaradas)
  function somar(a, b) {
    return a + b;
  }

  // Depois (arrow functions)
  const somarArrow = (a, b) => a + b;          // retorno implícito
  const dobroArrow = n => n * 2;                // um parâmetro: pode tirar parênteses
  const criarUsuario = nome => ({ nome });      // retornando objeto: use ( )

  // Exemplos (resultados)
  const rSomarAntes = somar(2, 3);
  const rSomarDepois = somarArrow(2, 3);
  const rDobro = dobroArrow(5);
  const usuario = criarUsuario('Adriano');
  const numeros = [1, 2, 3];
  const mapeadosAntes = numeros.map(function (n) { return n * 2; });
  const mapeadosDepois = numeros.map(n => n * 2);

  return (
    <div className="component-box">
      <h2>Exemplo: Arrow Functions (ES6)</h2>

      <p>
        Forma moderna de escrever funções. Curta, clara e muito usada no React.
      </p>

      <div className="code-block">
        <strong>Antes vs Depois</strong>
        <pre>
{`// Antes (tradicional)
function somar(a, b) {
  return a + b;
}
const result1 = numeros.map(function (n) {
  return n * 2;
});

// Depois (arrow)
const somar = (a, b) => a + b;     // retorno implícito
const result2 = numeros.map(n => n * 2);

// Dicas:
const f1 = x => x * 2;             // 1 parâmetro: sem parênteses
const f2 = (x, y) => x + y;        // 2+ parâmetros: com parênteses
const f3 = () => 'oi';             // 0 parâmetros: parênteses vazios
const f4 = () => ({ a: 1 });       // retornar objeto: use parênteses`}
        </pre>
      </div>

      <ul className="results-list">
        <li>
          Somar (antes vs depois): <strong>{rSomarAntes}</strong> | <strong>{rSomarDepois}</strong>
        </li>
        <li>
          Dobro (arrow): <strong>{rDobro}</strong>
        </li>
        <li>
          Retornando objeto: <strong>{JSON.stringify(usuario)}</strong>
        </li>
        <li>
          Map (antes vs depois):
          <div><code>{`[1,2,3].map(function(n){ return n*2 })`}</code> → <strong>[{mapeadosAntes.join(', ')}]</strong></div>
          <div><code>{`[1,2,3].map(n => n*2)`}</code> → <strong>[{mapeadosDepois.join(', ')}]</strong></div>
        </li>
      </ul>
    </div>
  );
}

export default Arrow_Function;