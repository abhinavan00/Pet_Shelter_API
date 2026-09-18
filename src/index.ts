import express, {type Express, type Request, type Response} from "express";
import { pets } from "./data/pets.ts";

const PORT = 8000
const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.json(pets)
    console.log('Hello from frontEnd!')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})