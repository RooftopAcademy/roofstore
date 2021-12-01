import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import ChooseItemTitlePage from './Pages/PublishingProcess/ChooseItemTitlePage';
import ChooseRootCategory from './Pages/PublishingProcess/ChooseRootCategory';
import ConfirmClassification from './Pages/Public/ConfirmClassification';
import DefensaConsumidorPage from './Pages/Public/DefensaConsumidor/DefensaConsumidorPage';
import HomePage from './Pages/Public/HomePage';
import InfoFinancialUserPage from './Pages/Public/InfoFinancialUserPage';
import LoginPage from './Pages/Public/LoginPage';
import OffersPage from './Pages/Public/OffersPage';
import ProductPage from './Pages/Public/ProductPage/ProductPage';
import ProductListPage from './Pages/Public/ProductListPage'
import RegisterPage from './Pages/Public/RegisterPage';
import ShoppingHistoryPage from './Pages/ShoppingHistoryPage/ShoppingHistoryPage'
import TermsAndConditionsPage from './Pages/TermsAndConditionsPage/TermsAndConditionsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ayuda/terminos-y-condiciones" element={<TermsAndConditionsPage />} />
        <Route path="/ayuda/defensa-del-consumidor" element={<DefensaConsumidorPage />} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/financial-user-info" element={<InfoFinancialUserPage/>}/> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sell/chooseCategory" element={<ChooseRootCategory />} />
        <Route path="/sell/confirm-classification" element={<ConfirmClassification />} />
        <Route path="/sell/item-title" element={<ChooseItemTitlePage />} />
        <Route path="/shopping-history" element={<ShoppingHistoryPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
