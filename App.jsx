// import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import Navbar from "./components/Navbar"
// import Register from "./components/Register"
// import Ask from "./components/Ask"
// import Home from "./Pages/Home";
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Help from './Pages/Help';
// const App = () => {
//   return (
//     <>
//     <Navbar/>
//       <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/register' element={<Register/>}/>
//       <Route path='/ask' element={<Ask/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/help' element={<Help/>}/>
//       </Routes>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import Navbar2 from './components/Navbar2'
// import Login from './components/Login'
// import Footer2 from './components/Footer2'
// import Home2 from './Pages/Home2'
// import Coffee from './Pages/Coffee'
// import About2 from './Pages/About2'
// const App = () => {
//   return (
//     <>
     
    
//      <Navbar2/>
//     <Routes>
//     <Route path='/' element={<Home2/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/coffee' element={<Coffee/>}/>
//     <Route path='/about2' element={<About2/>}/>
//     </Routes>
//     <Footer2/>

     
//     </>
//   )
// }

// export default App


import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar3 from './components/Navbar3'
import Footer3 from './components/Footer3'
import Home3 from './Pages/Home3'
import Menu from './Pages/Menu'
import Deals from './Pages/Deals'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
import Order from './Pages/Order'
import Reviews from './Pages/Reviews'
const App = () => {
  return (
    <>
    <Navbar3/>
      <Routes>
      <Route path='/' element={<Home3/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/deals' element={<Deals/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      </Routes>
      <Footer3/>
    </>
  )
}

export default App


