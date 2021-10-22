import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  const [name, setName] = useState('Paul');
  const [age, setAge] = useState(90);
  const [bg, setBg] = useState('#ff0000');

  const handleClick = () => {
    setBg('blue');
  }

  const handle20 = () => {
    setAge(20);
  }
  const handle90 = () => {
    setAge(90);
  }


  return (
      <div style={{backgroundColor: bg}}>
      <Header name={name} age={age}/>
      
      área principal da página 


    <button onClick={handleClick}>Clique Aqui</button>
    <button onClick={handle20}>Idade 20</button>
    <button onClick={handle90}>Idade 90</button>


      <Footer />
      </div>
    )
}
export default App;