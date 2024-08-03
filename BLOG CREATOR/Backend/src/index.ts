import express from 'express'
import { connection } from '../config/db'
import {router} from '../routes/route'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'

connection()

const app = express()
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser("userdata"))
app.use(express.json())
// app.use(cookieParser())
app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})