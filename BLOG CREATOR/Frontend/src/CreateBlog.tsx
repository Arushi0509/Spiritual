import { useNavigate } from "react-router-dom"
import logo from './Images/logo.jpeg'
import './User_Page.css'
// import { data } from './user_data'
import { useState } from "react"
import axios from "axios"


function CreateBlog() {

    type Blog = {
        Name: string,
        Category: string,
        Timetag: string,
        Headline: string,
        Description: string,
    }
    const [createblog, setcreateblog] = useState<Blog>({
        Name: "",
        Category: "",
        Timetag: "",
        Headline: "",
        Description: "",
    })

    const navigate = useNavigate()

    const handleAllblogs = (e: any) => {
        e.preventDefault()
        navigate('/All Blogs')
    }

    const handlelogout = () => {
        navigate('/')
    }

    const handlesamepage = (e: any) => {
        e.preventDefault()
        navigate('/user')
    }

    const handledata = (e: any) => {

        const { name, value } = e.target

        setcreateblog({ ...createblog, [name]: value })

    }

    const handleCreate = () => {
        console.log(createblog);

        axios.post("http://localhost:3001/addblogs", createblog, { withCredentials: true })
            .then((val) => {
                console.log(val.data);

                navigate('/user')
            })
            .catch((err) => {
                console.log(err);

            })

    }

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

            <div className="container">
                <div className="container row " style={{ marginTop: "8%", marginBottom: "4%", marginLeft: "20%" }}>
                    <div className="col-md-6 p-5 border border-dark bg-white text-black">
                        <div className="form-group mb-5">
                            <h3 className="text-center">Create Your Own Blogs</h3>
                        </div>
                        {/* <div className="form-group d-flex mt-5">
                            <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                            <input type="text" name="Name" id="Name" className="form-control border border-black" value={createblog.Name} onChange={(e) => handledata(e)} />
                            <span id="NameErr"></span>
                        </div>
                        <br /> */}
                        <div className="form-group d-flex mt-4">
                            <label htmlFor="Category" className="col-sm-2 col-form-label">Category</label>
                            <input type="text" name="Category" id="Category" className="form-control border border-black" value={createblog.Category} onChange={(e) => handledata(e)} />
                            <span id="CategoryErr"></span>
                        </div>
                        <br />
                        <div className="form-group d-flex mt-4">
                            <label htmlFor="Timetag" className="col-sm-2 col-form-label">Timetag</label>
                            <input type="text" name="Timetag" id="Timetag" className="form-control border border-black" value={createblog.Timetag} onChange={(e) => handledata(e)} />
                            <span id="TimetagErr"></span>
                        </div>
                        <br />
                        <div className="form-group d-flex mt-4">
                            <label htmlFor="Headline" className="col-sm-2 col-form-label">Headline</label>
                            <input type="text" name="Headline" id="Headline" className="form-control border border-black" value={createblog.Headline} onChange={(e) => handledata(e)} />
                            <span id="HeadlineErr"></span>
                        </div>
                        <br />
                        <div className="form-group d-flex mt-4">
                            <label htmlFor="Description" className="col-sm-2 col-form-label">Description</label>
                            <textarea id="Description" name="Description" rows="4" cols="50" className="form-control border border-black" value={createblog.Description} onChange={(e) => handledata(e)} />
                            <span id="DescriptionErr"></span>
                        </div>
                        <br /><br /><br />
                        <div className="text-center">
                            <button type="button" className="btn btn-outline-success" onClick={() => handleCreate()} ><b>Create</b></button>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export { CreateBlog }