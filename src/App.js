 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heder from './components/Heder/Heder';
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Review from './components/Review/Review'
import About from './components/About/About'
import Dashboard  from './components/Dashboard/Dashboard'
import NotFound from './components/NotFound/NotFound';
function App() {

    return(
  <div className='App'>
   <Heder></Heder>
      <Routes>
      <Route path='/'element={<Home></Home>}></Route>
        <Route path='/Home'element={<Home></Home>}></Route>
        <Route path='/Review'element={<Review></Review>}></Route>
        <Route path='/Blogs'element={<Blogs></Blogs>}></Route>
        <Route path='/About'element={<About></About>}></Route>
        <Route path='/Dashboard'element={<Dashboard></Dashboard>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
 </div>
      )
    }
export default App;
