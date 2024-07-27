
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";

const App = () => {
  return (
    <div className="bg-[#1F1E24] h-screen w-screen overflow-hidden flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending/>}/>
      </Routes>
    </div>
  );
};

export default App;
