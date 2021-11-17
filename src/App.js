import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Public/HomePage';
import LoginPage from './Pages/Public/LoginPage';
import RegisterPage from './Pages/Public/RegisterPage';
import ProductPage from './Pages/Public/ProductPage/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product" element={<ProductPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
