import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import './styles/index.scss';
import { GameList } from "./pages/GamesList/GameList";
import { Footer } from "./components/Footer/Footer";
import { Game } from "./pages/Game/Game";
import { BossList } from "./pages/BossList/BossList";
import { TrophiesList } from "./pages/TrophiesList/TrophiesList";
function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gamelist" element={<GameList/>}/>
        <Route path="/games/:id" element={<Game/>}/>
        <Route path="/games/:id/boss" element={<BossList/>}/>
        <Route path="/games/:id/trophies" element={<TrophiesList/>}/>
        <Route path="/runlist" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
