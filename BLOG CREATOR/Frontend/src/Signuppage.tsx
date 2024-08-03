import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from './Images/logo.jpeg'
import p from './Images/p.png'
import './signup.css'
import axios from "axios"

function Register({ Adduser }: { Adduser: (user: any) => void }) {

    type User = {
        FullName: string,
        EmailId: string,
        UserName: string,
        Password: string,
        CPassword: string
    }

    const [registerdata, setregisterdata] = useState<User>({
        FullName: "",
        EmailId: "",
        UserName: "",
        Password: "",
        CPassword: ""
    })

    const navigate = useNavigate()

    const handlesamepage = (e: any) => {
        e.preventDefault()
        navigate('/')
    }
    const handlelogin = () => {
        // e.preventDefault()

        navigate('/login')

    }


    const handledata = (e: any) => {
        const { name, value } = e.target

        setregisterdata({ ...registerdata, [name]: value })
    }

    const handleregister = () => {

        let count: number = 0;
        if (registerdata.FullName == "") {
            $("#NameErr").text("FullName is required.").css({ "color": "red", "font-weight": "bold" })
        }
        else if (registerdata.FullName.length > 20) {
            $("#NameErr").text("Maximum characters can be 20.").css({ 'color': 'red', "font-weight": "bold" })
        }
        else {
            $("#NameErr").text("")
            count += 1;
        }
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (registerdata.EmailId == "") {
            $("#EmailErr").text("Email Id is required.").css({ 'color': 'red', "font-weight": "bold" })
        }
        else if (!reg.test(registerdata.EmailId)) {
            $("#EmailErr").text("Invalid Email Id.").css({ 'color': 'red', "font-weight": "bold" })
        }
        else {
            $("#EmailErr").text("")
            count += 1;
        }
        if (registerdata.UserName == "") {
            $("#UsernameErr").text("UserName is required.").css({ 'color': 'red', "font-weight": "bold" })
        }
        else {
            $("#UsernameErr").text("")
            count += 1;
        }

        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/
        if (registerdata.Password == "") {
            $("#PasswordErr").text("Password is required.").css({ 'color': 'red', "font-weight": "bold" })
        }
        else if (!regex.test(registerdata.Password)) {
            $("#PasswordErr").text("Weak Password.").css({ 'color': 'red', "font-weight": "bold" })
        }
        else {
            $("#PasswordErr").text("")
            count += 1;
        }
        if (registerdata.CPassword == "") {
            $("#CpasswordErr").text("Please confirm your password.").css({ 'color': 'red', "font-weight": "bold" })
        }
        else if (registerdata.CPassword != registerdata.Password) {
            $("#CpasswordErr").text("Password mismatch").css({ 'color': 'red', "font-weight": "bold" })
        }
        else {
            $("#CpasswordErr").text("")
            count += 1;
        }

        if (count == 5) {

            Adduser(registerdata)

            setregisterdata({
                FullName: "",
                EmailId: "",
                UserName: "",
                Password: "",
                CPassword: ""
            })
            console.log(registerdata);
            axios.post("http://localhost:3001/signup", registerdata)
                .then((val) => {
                    console.log(val.data);
                })
                .catch((err)=>{
                    console.log(err);
                    
                })
            handlelogin()

        }
    }

    return (
        <>
            <div id="sign-back">
                <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" onClick={(e) => handlesamepage(e)}>
                            <img src={`${logo}`} alt="Logo" width="75" height="50" className="d-inline-block align-text-middle" />
                            <span id='title'> BLOG MATE</span>
                        </a>
                    </div>
                </nav>

                <div className="container " >
                    <div className="container row " style={{ marginTop: "6%", marginBottom: "4%" }}>
                        <div className="col-md-6 border border-black">
                            <img src={`${p}`} id="signimg" alt="" />
                        </div>
                        <div className="col-md-6 p-4 border border-dark bg-black text-white">
                            <div className="form-group">

                                <h3 className="text-center">WELCOME TO BLOG MATE!!</h3>

                                <br /><br />
                                <label htmlFor="FullName">Full Name</label>
                                <input type="text" name="FullName" id="FullName" className="form-control border border-black" aria-describedby="emailHelp" placeholder="Enter Name" value={registerdata.FullName} onChange={(e) => handledata(e)} />
                                <span id="NameErr"></span>

                                <br /><br />
                                <label htmlFor="EmailId">Email ID</label>
                                <input type="text" name="EmailId" id="EmaildId" className="form-control border border-black" aria-describedby="emailHelp" placeholder="Enter Email ID" value={registerdata.EmailId} onChange={(e) => handledata(e)} />
                                <span id="EmailErr"></span>

                                <br /><br />
                                <label htmlFor="Username">UserName</label>
                                <input type="text" name="UserName" id="Username" className="form-control border border-black" aria-describedby="emailHelp" placeholder="Enter UserName" value={registerdata.UserName} onChange={(e) => handledata(e)} />
                                <span id="UsernameErr"></span>

                                <br /><br />
                                <label htmlFor="Password">Password</label>
                                <input type="password" name="Password" id="Password" className="form-control border border-black" aria-describedby="emailHelp" placeholder="Enter Password" value={registerdata.Password} onChange={(e) => handledata(e)} />
                                <span id="PasswordErr"></span>

                                <br /><br />
                                <label htmlFor="CPassword">Confirm Password</label>
                                <input type="password" name="CPassword" id="CPassword" className="form-control border border-black" aria-describedby="emailHelp" placeholder="Confirm Your Password" value={registerdata.CPassword} onChange={(e) => handledata(e)} />
                                <span id="CpasswordErr"></span>

                                <br /><br /><br />

                                <div className="text-center">
                                    <button type="button" className="btn btn-outline-light" onClick={() => handleregister()}><b>Sign Up</b></button>
                                </div>
                                <br />
                                <p className="text-center"><b>Already have an account?</b> <a id="login" href="#" onClick={() => handlelogin()}><b>LogIn</b></a></p>
                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Register