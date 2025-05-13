import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cluster from './components/Cluster';
import AboutUS from './components/AboutUS';
import Boxes from './components/Boxes';
import BoxStyles from './components/BoxStyles';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='bg-blue-800 min-h-screen'>
    <Navbar />
      <Outlet />
    <Footer />
    </main>
  );
}

export default App;
