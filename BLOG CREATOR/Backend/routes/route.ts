import express from 'express'
import { postuser } from '../controller/signup'
import { login } from '../controller/login'
import { Auth } from '../middlewares/loggedIn-Auth'
import { postBlog } from '../controller/Createblogs'
import { getallBlogs } from '../controller/GetallBlogs'
import {getbyId} from '../controller/getuserblogs'

export const router = express.Router()

router.route('/').get(getallBlogs)
router.route('/signup').post(postuser)
router.route('/login').post(login)
router.route('/addblogs').post(Auth, postBlog)
router.route("/blogs").get(Auth, getallBlogs)
router.route('/user').get(Auth, getbyId)
// router.route('/user/:id').get(getbyId)

