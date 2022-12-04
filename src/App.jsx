import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Inscription from './components/Inscription/Inscription';
import PlayerListContainer from './components/PlayerListContainer/PlayerListContainer';
import ZoneContainer from './components/ZoneContainer/ZoneContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerListOptions from './components/PlayerListOptions/PlayerListOptions';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Header/> } />
        <Route path='/inscription' element={ <Inscription /> } />
        <Route path='/list' element={ <PlayerListOptions /> } />
        <Route path="/list/:category" element={ <PlayerListContainer /> }/>
        <Route path="/zone/:category" element={ <ZoneContainer /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
