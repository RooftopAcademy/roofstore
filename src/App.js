import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Public/HomePage';
import LoginPage from './Pages/Public/LoginPage';
import RegisterPage from './Pages/Public/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
