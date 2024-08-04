import express from 'express'
import dotenv  from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import cors from 'cors'

import { getHealth } from './controllers/health.js'
import { postwatch ,
  getwatches,
  getwatchId ,
  putwatchId,
  deletewatchID}
 from './controllers/watch.js'
import  {handlepagenotfound } from './controllers/errors.js';

const app =express()
app.use(cors())
app.use(express.json())

const dbconnection =async()=>{

  const conn =  await mongoose.connect(process.env.MONGO_URL)
  if(conn){
    console.log("MongoDB connected 📦")
  }
  else{
    console.log("MongoDB  Not connected ❌")
  }
}
dbconnection();

app.get("/health", getHealth)


app.post("/watch",postwatch)

app.get("/watches",getwatches )

app.get("/watch/:id" ,getwatchId)

app.put("/watch/:id" ,putwatchId)

app.delete("/watch/:id" ,deletewatchID)


app.use("*",handlepagenotfound)



const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{{}
console.log(`Server is running on port ${PORT}`)
})