import express, {type Express, type Request, type Response} from "express";
import cors from 'cors';
import { pets } from "./data/pets.ts";

const PORT = 8000
const app: Express = express()

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.json(pets)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})