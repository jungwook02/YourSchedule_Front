import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Newproject from './components/newproject';
import Login from './components/login';
import ProjectList from './components/projectlist';
import Membership from './components/Membership';
import Projectmain from './components/projectmain';
import Scheduler from './components/timetable';
import Post from './components/post';
import PostCreation from './components/postcreation';
import YourSchedlueCreation from './components/YourScheduleCreation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/new' element={<Newproject />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<ProjectList />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/projectdetail/:id' element={<Projectmain />} />
        <Route path='/calender' element={<Scheduler/>} />
        <Route path='/post' element={<Post/>} />
        <Route path='/newpost' element={<PostCreation/>} />
        <Route path='/creation' element={<YourSchedlueCreation/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
