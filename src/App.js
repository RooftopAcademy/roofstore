import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Public/HomePage';
import LoginPage from './Pages/Public/LoginPage';
import RegisterPage from './Pages/Public/RegisterPage';
import DataPage from './Pages/Public/RegisterPages/DataPage';
import EmailPage from './Pages/Public/RegisterPages/EmailPage';
import PasswordPage from './Pages/Public/RegisterPages/PasswordPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/email" element={<EmailPage />} />
        <Route path="/register/data" element={<DataPage />} />
        <Route path="/register/pass" element={<PasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
