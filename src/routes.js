import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";
import Favorites from "./pages/Favorites/Favorites";
import Movie from './pages/Movie/Movie';
import WatchLater from './pages/WatchLater/WatchLater';

function RoutesApp() {
    return(<BrowserRouter>
        <Header />
        <Routes>
            <Route path="/movieteller/" element={ <Home /> } />
            <Route path="/movieteller/favorites" element={ <Favorites /> } />
            <Route path="/movieteller/watchlater" element={ <WatchLater /> } />
            <Route path="/movieteller/movie/:movieId" element={ <Movie /> } />

            <Route path="/movieteller/*" element={ <Error404 /> } />
        </Routes>
        <Footer />
    </BrowserRouter>);
}

export default RoutesApp;