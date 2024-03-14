import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSectoin from './components/HeroSectoin';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroSectoin />
     <Cards />
    </div>
  );
}

export default App;
