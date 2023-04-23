import express from "express";
import cors from "cors"
const app = express();
app.use(cors())

//app.use(express.static("../client/dist"))
app.use(express.json())


import planetsRouter from "./routers/planetRouter.js"
app.use(planetsRouter)

import peopleRouter from "./routers/peopleRouter.js"
app.use(peopleRouter)


const PORT = process.env.PORT || 8080;
const server  = app.listen(PORT, ()=>{
    console.log("server is running on port ", server.address().port)
})