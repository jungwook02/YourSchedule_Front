import Navbar from "./components/navbar.js";
import Newproject from "./components/newproject.js";
import Login from "./components/login.js";
import ProjectList from "./components/projectlist.js";
import ProjectDetail from "./components/projectdetail.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/new' element={<Newproject/>}></Route>
      </Routes>

      <Routes>
        <Route path='/' element={<ProjectList/>}></Route>
      </Routes>

      <Routes>

        <Route path='/projectdetail/:id' element={<ProjectDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
