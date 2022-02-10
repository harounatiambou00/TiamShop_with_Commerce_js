import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
 

//Pages importation
import { About, Cart, Categories, ContactUs, Error, Home, Login, Politicy, Registration } from './pages'

import { Navbar } from './components'

const App = () => {
  return (
    <div>
      
      <Navbar />
      {/*<Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/registration' element= {<Registration />} />
        <Route path='/about' element= {<About />} />
        <Route path='/politicy' element= {<Politicy />} />
        <Route path='/cart' element= {<Cart />} />
        <Route path='/contactus' element= {<ContactUs />} />
        <Route path='*' element= {<Error />} />
      </Routes>*/}
    </div>
  )
}

export default App