import express, {type Express, type Request, type Response} from "express";
import cors from 'cors';
import { router } from "./routes/pets.routes.ts";

const PORT = 8000
const app: Express = express()

app.use(cors())

app.use(router)

app.use((req:Request, res:Response<{message:string}> ):void => {
    res.status(404).json({message: 'Route not found!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})