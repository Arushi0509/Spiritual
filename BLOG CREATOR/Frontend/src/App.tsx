import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Homepage'
import Register from "./Signuppage";
import Login from "./Loginpage";
import { useState } from "react";
import User from "./User_Page";
import AllBlogs from "./All_Blogs";
import { CreateBlog } from "./CreateBlog";

function App() {

  const [userdata, setuserdata] = useState([])

  const Adduser = (user:any) =>{

      userdata.push(user)
      setuserdata([...userdata])
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/signup" element={<Register Adduser={Adduser}/>}></Route>
          <Route path="/login" element={<Login userdata={userdata}/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/blogs" element={<AllBlogs/>}></Route>
          <Route path="/Create" element={<CreateBlog/>}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
