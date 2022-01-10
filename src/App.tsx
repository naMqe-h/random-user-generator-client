import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//pages
import About from './pages/About';
import Docs from './pages/Docs';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main className='container mx-auto px-4 mb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/docs' element={<Docs />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>

        <footer className='footer p-10 bg-neutral text-neutral-content footer-center'>Copyright 2022</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
