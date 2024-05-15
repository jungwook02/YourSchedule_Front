

import Navbar from "./components/navbar.js";
import Newproject from "./components/newproject.js";
import Login from "./components/login.js";
import ProjectList from "./components/projectlist.js";
import "./App.css"



function App() {
  return (
    <div className="App">

    <Navbar/>
    <ProjectList/>

    </div>
  );
}

export default App;
