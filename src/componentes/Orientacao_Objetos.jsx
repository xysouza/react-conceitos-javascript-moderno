import React from 'react';

function Orientacao_Objetos() {
  function PessoaOld(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  PessoaOld.prototype.seApresentar = function () {
    return 'Olá, meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos.';
  };

  class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
    seApresentar() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  }

  class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
      super(nome, idade);
      this.curso = curso;
    }
    seApresentar() {
      return `${super.seApresentar()} Estou cursando ${this.curso}.`;
    }
  }

  const apresentacaoAntes = new PessoaOld('Adriano', 30).seApresentar();
  const apresentacaoDepois = new Pessoa('Adriano', 30).seApresentar();
  const apresentacaoAluno = new Aluno('Carlos', 25, 'Sistemas para Internet').seApresentar();

  const comparacao = [
    '// Antes (função construtora + protótipo)',
    'function Pessoa(nome, idade) {',
    '  this.nome = nome;',
    '  this.idade = idade;',
    '}',
    'Pessoa.prototype.seApresentar = function () {',
    "  return 'Olá, meu nome é ' + this.nome;",
    '};',
    '',
    '// Depois (classe ES6)',
    'class Pessoa {',
    '  constructor(nome, idade) {',
    '    this.nome = nome;',
    '    this.idade = idade;',
    '  }',
    '  seApresentar() {',
    '    return `Olá, meu nome é ${this.nome}`;',
    '  }',
    '}',
    '',
    '// Herança (classe ES6)',
    'class Aluno extends Pessoa {',
    '  constructor(nome, idade, curso) {',
    '    super(nome, idade);',
    '    this.curso = curso;',
    '  }',
    '  seApresentar() {',
    '    return `${super.seApresentar()} e estudo ${this.curso}.`;',
    '  }',
    '}',
  ].join('\n');

  return (
    <div className="component-box">
      <h2>Exemplo: Orientação a Objetos (Classes ES6)</h2>

      <p>Antes (construtora) vs Depois (classe). No React, usamos classes/objetos modernos.</p>

      <div className="code-block">
        <strong>Antes vs Depois</strong>
        <pre>{comparacao}</pre>
      </div>

      <ul className="results-list">
        <li>Antes (construtora): <strong>{apresentacaoAntes}</strong></li>
        <li>Depois (classe): <strong>{apresentacaoDepois}</strong></li>
        <li>Herança (Aluno): <strong>{apresentacaoAluno}</strong></li>
      </ul>
    </div>
  );
}

export default Orientacao_Objetos;
