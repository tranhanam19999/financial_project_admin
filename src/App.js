import logo from './logo.svg'
import './App.css'
import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import UserPage from './pages/CollectionPage/UserPage/UserPage'
import BookPage from './pages/CollectionPage/BookPage/BookPage'
import {Route} from 'react-router-dom'
import SideBar from './components/Layout/SideBar'
import { useEffect } from 'react'
import { loadScripts } from './utils'
function App() {
  return (
    <div className="App" >
      <div id="wrapper">    
        <SideBar/>
        <div id="content-wrapper" className="d-flex flex-column"> 
          <Route exact path="/" component={AuthPage}/>
          <Route exact path="/Home" component={HomePage}/>
          <Route exact path="/User" component={UserPage}/>
          <Route exact path="/Book" component={BookPage}/>
        </div>
      </div>
    </div>
  );
}

export default App;
