import './App.css'
import PokeCard from './components/PokeCard'
import f1 from '../src/img/Charmander.png'
import f2 from '../src/img/Pikachu.png'
import f3 from '../src/img/PokeLaercio.png'
import f4 from '../src/img/mateus.png'
import f5 from '../src/img/rafa.png'

function App() {
  return (
    <div className='card-container'>
      <PokeCard image={f1} Nome="Charmander" Tipo="Fogo" Ataque="ataques de fogo" Poder="fogo"/>
      <PokeCard image={f2} Nome="Pikachu" Tipo="Mouse" Ataque="Onda do Trovão" Poder="Raio"/>
      <PokeCard image={f3} Nome="LALA" Tipo="professor" Ataque="Feedback" Poder="C sharp"/>
      <PokeCard image={f4} Nome="tequila" Tipo="doido" Ataque="pede 6" Poder="figado de ferro"/>
      <PokeCard image={f5} Nome="rapha" Tipo="chata" Ataque="manda trinta mensagem na dm" Poder="gatos"/>
    </div>
  )
}
export default App;