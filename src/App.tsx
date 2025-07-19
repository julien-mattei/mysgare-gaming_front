import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { AsideBar } from "./components/AsideBar/AsideBar";
function App() {
 

  return (
    <>
      <AsideBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gamelist" element={<Home/>}/>
        <Route path="/runlist" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
