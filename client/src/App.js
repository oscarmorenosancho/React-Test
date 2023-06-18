import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ShoppingCart } from './pages/ShoppingCart';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='order' element={<ShoppingCart />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>

      <ToastContainer position='top-right'/> 
    </Layout>
  );
}

export default App;
