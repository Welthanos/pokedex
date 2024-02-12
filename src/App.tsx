import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import Error from './pages/error/Error';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
