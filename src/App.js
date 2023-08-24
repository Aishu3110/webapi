import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Updateapi from "./Component/Updateapi";
import Homepage from "./Component/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path='/Updateapi/:id/' element={<Updateapi/>}></Route>
            <Route path='/homepage' element={<Homepage/>}></Route>
          </Routes>{" "}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
