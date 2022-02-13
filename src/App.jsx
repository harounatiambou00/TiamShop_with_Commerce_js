import React, { useEffect, useState } from 'react'
import { Routes, Link, Route } from 'react-router-dom'
 

//Pages importation
import { About, Cart, Categories, ContactUs, Error, Home, Login, Politicy, Registration } from './pages'

import { Navbar, Margin, Rightbar, Footer } from './components'

const App = () => {
  const [openRightBar, setOpenRightBar] = useState(false);

  useEffect(() => {
    return (() => {

    })
  },[openRightBar])
  return (
    <div>
      
      <Navbar openRightBar = {setOpenRightBar} RightbarIsOpenned = {openRightBar}/>
      <Rightbar openRightbar = { setOpenRightBar } open = {openRightBar}  />


      {/*This Component is used to fix the material ui toolbar in navbar margin issue */}
      <Margin />

      
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/registration' element= {<Registration />} />
        <Route path='/about' element= {<About />} />
        <Route path='/politicy' element= {<Politicy />} />
        <Route path='/cart' element= {<Cart />} />
        <Route path='/contactus' element= {<ContactUs />} />
        <Route path='*' element= {<Error />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App