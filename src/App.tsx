import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import './styles/index.scss';
import { GameList } from "./pages/GamesList/GameList";
import { Footer } from "./components/Footer/Footer";
function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gamelist" element={<GameList/>}/>
        <Route path="/runlist" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
