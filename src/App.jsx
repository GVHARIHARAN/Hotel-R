import React from 'react'
import Sum from '../src/log-in'
// import Sum from '../src/componments/navber'
import Sample from '../src/tasku'
import Order from'../src/taskorder'

import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
    
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sum />} />
           <Route path='/tasku' element={<Sample />} />
          {/* <Route path='/taskorder/,name/' element={<Order />} /> */} 
          </Routes>
          </BrowserRouter>
        </>
        )
}

export default App
