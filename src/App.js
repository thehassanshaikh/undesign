import './App.css';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route  path='/' element={<Home />}/>
        <Route  path='/page' element={<CategoryPage />}/>
      </Routes>
    </div>
  );
}

export default App;
