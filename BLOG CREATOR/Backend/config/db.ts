import mongoose from 'mongoose'

const connection = () => mongoose.connect("mongodb://localhost/Blog_Mate")
    .then(() => console.log("Connected successfully to database!!"))
    .catch(err => console.log("Failed to connect to Database."))

export { connection }