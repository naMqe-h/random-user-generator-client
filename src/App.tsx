import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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

        <main className='container mx-auto px-4 mb-12 
          lg:h-4/6
          md:h-auto
        '>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/docs' element={<Docs />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>

        <footer className='footer p-10 bg-neutral text-neutral-content footer-center'>Copyright &copy; {new Date().getFullYear()}</footer>
      </div>
      <ToastContainer 
        position="bottom-left"
        theme='dark'
        autoClose={8000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </BrowserRouter>
  );
}

export default App;
