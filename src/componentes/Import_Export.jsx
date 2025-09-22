import React from 'react';

function Import_Export() {
  const antesDepois = [
    '// Antes (sem módulos)',
    '// math.js (global)',
    'function somar(a, b) { return a + b; }',
    '',
    '// app.js (depois de <script src="math.js">',
    'console.log(somar(2, 3)); // 5',
    '',
    '---------------------------',
    '',
    '// Depois (ES6 Modules)',
    '// math.js',
    'export function somar(a, b) { return a + b; }',
    '',
    '// app.js',
    "import { somar } from './math.js';",
    'console.log(somar(2, 3)); // 5',
  ].join('\n');

  const formasComuns = [
    '// Nomeado',
    'export const PI = 3.14;',
    "import { PI } from './math.js';",
    '',
    '// Default (um por arquivo)',
    'export default function util() {}',
    "import util from './util.js';",
  ].join('\n');

  return (
    <div className="component-box">
      <h2>Import / Export (ES6 Modules)</h2>

      <p>
        Ideia: exporta em um arquivo, importa em outro. Pronto.
      </p>

      <div className="code-block">
        <strong>Antes vs Depois</strong>
        <pre>{antesDepois}</pre>
      </div>

      <div className="code-block">
        <strong>Mais usado no dia a dia</strong>
        <pre>{formasComuns}</pre>
      </div>
    </div>
  );
}

export default Import_Export;