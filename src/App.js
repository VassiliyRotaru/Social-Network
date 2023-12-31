import React from 'react'  /* Если что удалить */
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News' 
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




const App = (props) => {
  return (
    <BrowserRouter>
  <div className='app-wrapper'> 
   <Header /> 
   <Navbar />
   <div class='app-wrapper-content'>

    <Routes>
    <Route path='/profile' element={<Profile/>} />
    <Route path='/dialogs/*' element={<Dialogs/>} />
    <Route path='/News' element={<News/>} />
    <Route path='/Music' element={<Music/>} />
    <Route path='/Settings' element={<Settings/>} />
    </Routes>
    
   </div>
    </div>
    </BrowserRouter>)
}


export default App
  
