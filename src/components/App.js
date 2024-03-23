import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import Favorite from 'pages/Favorite/Favorite';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
