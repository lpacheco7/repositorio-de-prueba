import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/home/homeScreen.jsx";
import AllScreen from "./screens/all/allScreen.jsx";
import ImagesScreen  from "./screens/images/imagesScreen.jsx";
import MapsScreen from "./screens/maps/mapsScreen.jsx"
import MusicScreen from "./screens/music/musicScreen.jsx"

function App() {

  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />

                <Route path="/all" element={<AllScreen />} />

                <Route path="/images" element={<ImagesScreen />} />

                <Route path="/maps" element={<MapsScreen />} /> 

                <Route path="/music" element={<MusicScreen />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
