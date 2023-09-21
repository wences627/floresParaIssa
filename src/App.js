import flower from './flower.svg';
import flower2 from './flower2.png';
import flower3 from './flower3.png';
import flower4 from './flower4.png';
import lazos from './lazos.png';
import ramo from './ramo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Para mi amorcito con mucho Amor.....
        </p>
	<div>
        <img src={flower} className="App-logo" alt="logo" />
        <img src={flower2} className="App-logo" alt="logo" />
	</div>
	<div>
        <img src={flower3} className="App-logo" alt="logo" />
        <img src={flower4} className="App-logo" alt="logo" />
	</div>
        <p className="text">
          Aqui tus flores amarillas de la manera en que yo se..<br/>Te Amo 😘
        </p>
        <img src={ramo} className="ramo" alt="ramo" />
        <img src={lazos} className="App-logo" alt="lazos" />
      </header>
    </div>
  );
}

export default App;
