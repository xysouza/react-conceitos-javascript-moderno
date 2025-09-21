import './App.css';
import Arrow_Function from './componentes/Arrow_Function';
import Callbacks from './componentes/Callbacks';
import Desestruturacao from './componentes/Desestruturacao';
import Funcoes_Atribuidas_Varivaveis from './componentes/Funcoes_Atribuidas_Varivaveis';
import Import_Export from './componentes/Import_Export';
import Operador_Ternario from './componentes/Operador_Ternario';
import TernaryOperator from './componentes/Operador_Ternario';
import Template_Literals from './componentes/Template_Literals';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Meus Exemplos de ECMAScript 6 (ES6)</h1>
        <p>Este projeto contém exemplos práticos de funcionalidades do ES6.</p>
      </header>
      <main>
        <Template_Literals />
        <Operador_Ternario />
        <Desestruturacao />
        <Funcoes_Atribuidas_Varivaveis />
        <Arrow_Function />
        <Import_Export />
        <Callbacks />
        {/* Para seu próximo exemplo (Desestruturação), crie um novo componente e adicione ele aqui */}
      </main>
    </div>
  )
}

export default App