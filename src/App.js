import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Public/HomePage';
import LoginPage from './Pages/Public/LoginPage';
import RegisterPage from './Pages/Public/RegisterPage';
import OffersPage from './Pages/Public/OffersPage';
import ProductPage from './Pages/Public/ProductPage/ProductPage';
import ShoppingHistoryPage from './Pages/ShoppingHistoryPage/ShoppingHistoryPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/shopping-history" element={<ShoppingHistoryPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
