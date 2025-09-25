import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) //.use is used for middlewares and configurations

app.use(express.json({limit: '20kb'}))



export {app}