import './App.css';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import { Route,Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route  path='/' element={<Home />}/>
        <Route  path='/page' element={<CategoryPage />}/>
        <Route  path='*' element={<NotFound />}/>

      </Routes>
    </div>
  );
}

export default App;
