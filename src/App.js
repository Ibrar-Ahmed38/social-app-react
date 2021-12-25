import React from 'react'
import Signup from './Components/Singup'
import Signin from './Components/Signin'
import ForgetPaswword from './Components/ForgetPassword'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import SignIn from './Components/Signin';


const App = () => {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgetpasssword" element={<ForgetPaswword />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App