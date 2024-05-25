
import Newproject from "./components/newproject.js";
import Login from "./components/login.js";
import Main from "./components/main.js";
import ProjectList from "./components/projectlist.js";
import ProjectDetail from "./components/projectdetail.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scheduler from "./components/timetable.js";
import Membership from "./components/Membership.js";

function App() {
  return (
    // <Scheduler/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
          <Routes>
        <Route path='/new' element={<Newproject/>}></Route>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path='/main' element={<ProjectList/>}></Route>
      </Routes>
      <Routes>
        <Route path='/membership' element={<Membership/>}></Route>
      </Routes>

      <Routes>

        <Route path='/projectdetail/:id' element={<ProjectDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
