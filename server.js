import express from 'express'
import { config } from 'dotenv'
import  router from './Routes/createRoutes.js'
import cors from "cors"
import { connectDb } from './Config/ConnectDb.js'
config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/new", router)




app.listen(3000, ()=>{
    console.log(`Server started on port 3000`)
    connectDb()
})







