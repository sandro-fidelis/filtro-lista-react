import Lista from "./components/Lista";
import Filtro from "./components/Filtro";

const lista = [
  {
    id: '1', nome: 'Sandro', idade: 40
  }, {
    id: '2', nome: 'Mara', idade: 39
  }, {
    id: '3', nome: 'Tatiana', idade: 25
  }, {
    id: '4', nome: 'Irene', idade: 70
  }, {
    id: '5', nome: 'Jose', idade: 73
  }, {
    id: '6', nome: 'Giovanna', idade: 16
  }
]

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6">
          <Lista lista={lista} />
        </div>
        <div className="col-md-6">
          <Filtro lista={lista} />
        </div>
      </div>
    </div>
  )
}

export default App;
