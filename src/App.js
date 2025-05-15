import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='bg-blue-800 min-h-screen'>
    <Navbar />
    <ScrollToTop />
      <Outlet />
    <Footer />
    </main>
  );
}

export default App;
