import express, {type Express, type Request, type Response} from "express";
import cors from 'cors';
import { pets, type Pet } from "./data/pets.ts";

const PORT = 8000
const app: Express = express()

app.use(cors())

app.get('/', (req:Request, res:Response<Pet[]>):void => {
    res.json(pets)
})

app.use((req:Request, res:Response<{message:string}> ):void => {
    res.status(404).json({message: 'Route not found!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})