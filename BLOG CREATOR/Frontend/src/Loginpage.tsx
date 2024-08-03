import { useNavigate } from "react-router-dom"
import logo from './Images/logo.jpeg'
import { useState } from "react"
import './loginpage.css'
import img1 from './Images/blog.jpg'
import axios from "axios"

function Login({ userdata }: { userdata: any }) {

    const navigate = useNavigate()

    const handlesamepage = (e: any) => {
        e.preventdefault()
        navigate('/')
    }

    type login = {
        UserName: string,
        Password: string
    }

    const [logindata, setlogindata] = useState<login>({
        UserName: "",
        Password: ""
    })

    const handledata = (e: any) => {
        const { name, value } = e.target

        setlogindata({ ...logindata, [name]: value })
    }

    const handlenavigate = () => {
        navigate('/user')
    }

    const handleback = (e: any) => {
        e.preventDefault()
        navigate('/signup')
    }


    const handlelogin = () => {

        let count: number = 0

        if (logindata.UserName == "") {
            $("#usernameErr").text("Username is required.").css("color", 'red')
        }
        else {
            $("#usernameErr").text("")
            count += 1
        }

        if (logindata.Password == "") {
            $("#passwordErr").text("Password is required.").css('color', 'red')
        }
        else {
            $("#passwordErr").text("")
            count += 1
        }

        if (count == 2) {

            setlogindata({
                UserName: "",
                Password: ""
            })

            axios.post("http://localhost:3001/login", logindata,{withCredentials:true})
             .then((val)=> {
                console.log(val.data);
             })
             .catch((err)=>{
                console.log(err);
                
             })


            handlenavigate()

            // for (let i of userdata) {
            //     if (logindata.UserName != i.UserName || logindata.Password != i.Password) {
            //         $("#error").text("Invalid UserName or Password").css('color', 'red')
            //     }
            //     else {
            //         $("#error").text("")

            //         setlogindata({
            //             UserName: "",
            //             Password: ""
            //         })

            //         axios.post("http://localhost:3000/login", logindata,{withCredentials:true})
            //          .then((val)=> {
            //             console.log(val.data);
            //          })
            //          .catch((err)=>{
            //             console.log(err);
                        
            //          })


            //         handlenavigate()
            //     }
            // }

        }
    }



    return (
        <>
            <div id="background-login" style={{ overflow: "hidden" }}>
                <nav id="navbar" className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" onClick={(e) => handlesamepage(e)}>
                            <img src={`${logo}`} alt="Logo" width="75" height="50" className="d-inline-block align-text-middle" />
                            <span id='title'> BLOG MATE</span>
                        </a>
                    </div>
                </nav>

                {/* <div id="loginpage"> */}
                <div className="container">
                    <div className="container row " style={{ marginTop: "17%" }}>
                        <div className="col-md-6">
                            <img src={`${img1}`} id="logimg" alt="" />
                        </div>
                        <div className="col-md-6 p-4 border border-dark bg-white">
                            <div className="form-group">

                                <h3 className="text-center">LOGIN</h3>

                                <br /><br /><br /><br />
                                <label htmlFor="UserName">UserName</label>
                                <input type="text" name="UserName" id="UserName" className="form-control border border-black" aria-describedby="emailHelp" placeholder="Enter UserName" value={logindata.UserName} onChange={(e) => handledata(e)} />
                                <span id="usernameErr"></span>

                                <br /><br />

                                <label htmlFor="Password">Password</label>
                                <input type="Password" name="Password" id="Password" className="form-control border border-black" aria-describedby="emailHelp" placeholder="Enter Password" value={logindata.Password} onChange={(e) => handledata(e)} />
                                <span id="passwordErr"></span>

                                <br /><br />
                                <input type="checkbox"/> <span>Remember Me</span>

                                <br /><br /><br />
                                <span id="error"></span>
                                <br /><br />
                                <div className="text-center">
                                    <button type="button" className="btn btn-outline-dark" onClick={() => handlelogin()}>Login</button>
                                </div>
                                <br />
                                <p className="text-center">Don't have an account? <a id="login" href="#" onClick={(e) => handleback(e)}><b>SignUp</b></a></p>
                                <br />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            {/* </div> */}


        </>
    )
}

export default Login

