import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter >
  );
}