import { useNavigate } from "react-router-dom"
import logo from './Images/logo.jpeg'
import './User_Page.css'
import { useEffect, useState } from "react"
import icon from './Images/general posts/icon1.jpeg'
import post from './Images/My Posts/post1.jpg'
import axios from "axios"
// import axios from "axios"

function User() {

    const navigate = useNavigate()

    const handleAllblogs = (e: any) => {
        e.preventDefault()
        navigate('/blogs')
    }

    const handlelogout = () => {
        navigate('/')
    }

    const handlesamepage = (e: any) => {
        e.preventDefault()
        navigate('/user')
    }

    const handlecreate = () =>{
        navigate('/Create')
    }

    const [blog, setblogs] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/user", {withCredentials: true})
        .then((val: any) => {
            setblogs(val.data.blogs)

        })
        .catch((err) => {
            console.log(err);

        })
}, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={(e) => handlesamepage(e)}>
                        <img src={`${logo}`} alt="Logo" width="75" height="50" className="d-inline-block align-text-middle" />
                        <span id='title'> BLOG MATE</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" id="navbar-items" onClick={(e) => handleAllblogs(e)}>All Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" id="navbar-items" href="#" onClick={(e) => handlesamepage(e)}>My Blogs</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="navbar-items">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Fashion</a></li>
                                    <li><a className="dropdown-item" href="#">Education</a></li>
                                    <li><a className="dropdown-item" href="#">Niche</a></li>
                                    <li><a className="dropdown-item" href="#">Sports</a></li>
                                    <li><a className="dropdown-item" href="#">News</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-warning" type="submit" onClick={() => handlelogout()}>Log Out</button>
                        </form>
                    </div>
                </div>
            </nav>

            <br /><br />

            <div id="Create-btn">
            <button className="btn btn-dark" type="button" onClick={()=> handlecreate()}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>CREATE</button>
            </div>

            

            <div id='contents'>
                <br /><br /><br />
                {
                    blog.map((data: any, index: any) => (
                        <div className="card mb-3" id='card' key={index}>
                            <div className="row g-0" >
                                <div className="col-md-8">
                                    <div className="card-body" id='cardcontent'>
                                        <div className="card-title">
                                            <img id="icon" src={`${icon}`} alt="" />
                                            <div id='tt'>
                                                <div id='name'>
                                                   {data.Name}
                                                </div>
                                                <div>
                                                    <span className='timetag'>{data.Category}</span><span className='timetag'>{data.Timetag}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="heading">
                                            <p className="card-subtitle mb-2 text-body-secondary"><b>{data.Headline}</b></p>
                                        </div>
                                        <div id='cbody'>
                                            <div id='ctext' className="card-text">
                                                {data.Description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4" id='imagediv'>
                                    <img id="img" src={`${post}`} className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <br />
            <footer>
                <div className="container-fluid bg-dark p-5">
                    <div className="row border border-dark p-2">
                        <div className="text-white col-md-2">
                            <p className="display-6 text-white col-md-2" id='head'>BLOG MATE</p>
                            <p className='display-20' id='about'>
                                "Explore a global tapestry of thoughts and ideas on our blog platform. From travel diaries to tech insights,
                                our community shares diverse perspectives. Join us, create your own blogs, and be part of this worldwide conversation!” 🌐 📝
                            </p>
                        </div>
                        <div className="col-md-2 row text-center">
                            <div className="col-md">
                                <div className="mt-3"><a href="#featureDiv" style={{ fontSize: "20px" }} className={` text-white`} > All Blogs</a></div>
                                <div className="mt-5 "><a href="#liveDemoDiv" style={{ fontSize: "20px" }} className={` text-white`} > About Us <i className="fa fa-tv"></i></a></div>
                                <div className="mt-5 col-md "><a href="#userReviewDiv" style={{ fontSize: "20px" }} className={` text-white`} > Categories<i className="fa fa-star"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-2 row text-center">
                            <div className="col-md">
                                <div className="mt-3 col-md "><a href="#exploreDiv" style={{ fontSize: "20px" }} className={` text-white`} > Explore <i className="fa fa-earth-americas"></i></a></div>
                                <div className="mt-5 col-md "><a href="#exploreDiv" style={{ fontSize: "20px" }} className={` text-white`} > ContactUs <i className="fa fa-phone"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md m-4"></div>
                        <div className="col-md-5 mt-1 p-5">
                            <div className="container text-light">
                                <p className="h4">Subscribe To Our NewsLetter</p>
                                <p className="h4 mt-2">Get to Know about all Hot Topics</p>
                                <div className="d-flex mt-4">
                                    <input type="text" id="" className="form-control w-50 mr-3" placeholder="john@doe" />
                                    <button className="btn btn-warning">Subscribe</button>
                                </div>
                                <div className="d-flex mt-4 row">
                                    <p className={`text-center col-md-3 `} style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "1px" }}><i className="fa fa-brands fa-github mr-2"></i>Github</p>
                                    <p className={`text-center col-md-2 `} style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "1px" }}><i className="fa fa-brands fa-square-x-twitter"></i>Twitter</p>
                                    <p className={`text-center col-md-4 `} style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "1px" }}><i className="fa fa-brands fa-instagram mr-2"></i>Instagram</p>
                                    <p className={`text-center col-md-3 `} style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "1px" }}><i className="fa fa-brands fa-facebook mr-2" style={{ color: "#007bff;" }}></i>FaceBook</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-center text-light p-5 mt-4">
                        <i className="fa fa-regular fa-copyright"></i> All Rights Reserved {new Date().getFullYear()}
                    </div>
                </div>
            </footer>




        </>
    )
}

export default User