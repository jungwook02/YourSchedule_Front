import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Newproject from './components/newproject';
import Login from './components/login';
import ProjectList from './components/projectlist';
import Membership from './components/Membership';
import ProjectDetail from './components/projectdetail';
import Projectmain from './components/projectmain';
import Scheduler from './components/timetable';
import Post from './components/post';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<Newproject />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<ProjectList />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/projectdetail/:id' element={<Projectmain />} />
        <Route path='/calender' element={<Scheduler/>} />
        <Route path='/post' element={<Post/>} />
      </Routes>
    </Router>
  );
}

export default App;
