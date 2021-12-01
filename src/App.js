import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartPage from './Pages/Public/CartPage';
import ChooseItemTitlePage from './Pages/PublishingProcess/ChooseItemTitlePage';
import ChooseRootCategory from './Pages/PublishingProcess/ChooseRootCategory';
import ConfirmClassification from './Pages/Public/ConfirmClassification';
import DefensaConsumidorPage from './Pages/Public/DefensaConsumidor/DefensaConsumidorPage';
import HomePage from './Pages/Public/HomePage';
import InfoFinancialUserPage from './Pages/Public/InfoFinancialUserPage';
import LoginPage from './Pages/Public/LoginPage';
import OffersPage from './Pages/Public/OffersPage';
import ProductPage from './Pages/Public/ProductPage/ProductPage';
import RegisterPage from './Pages/Public/RegisterPage';
import ShoppingHistoryPage from './Pages/ShoppingHistoryPage/ShoppingHistoryPage'
import TermsAndConditionsPage from './Pages/TermsAndConditionsPage/TermsAndConditionsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/ayuda/terminos-y-condiciones" element={<TermsAndConditionsPage />} />
        <Route path="/ayuda/defensa-del-consumidor" element={<DefensaConsumidorPage />} />
        <Route path="/sell/chooseCategory" element={<ChooseRootCategory />} />
        <Route path="/sell/confirm-classification" element={<ConfirmClassification />} />
        <Route path="/shopping-history" element={<ShoppingHistoryPage/>} />
        <Route path="/sell/item-title" element={<ChooseItemTitlePage />} />
        <Route path="/financial-user-info" element={<InfoFinancialUserPage/>}/> 
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
