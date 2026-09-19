import express, {type Express, type Request, type Response} from "express";
import cors from 'cors';
import { pets, type Pet } from "./data/pets.ts";

const PORT = 8000
const app: Express = express()

app.use(cors())

app.get('/', (
    req:Request<{}, unknown, {}, {species?:string} >, 
    res:Response<Pet[]>
):void => {
    const { species } = req.query
    let filteredPets = pets

    if(species ) {
        filteredPets = filteredPets.filter(pet => 
            pet.species.toLowerCase() === species.toLowerCase()
        )
    }
    res.json(filteredPets)
})

app.get('/:id', (req:Request, res:Response<Pet | {message:string}>):void => {
    const { id } = req.params
    const matchpet = pets.find(pet => pet.id === Number(id))

    if(matchpet) {
        res.json(matchpet)
    } else {
        res.status(404).json({message: 'Pet not found!'})
    }  
})

app.use((req:Request, res:Response<{message:string}> ):void => {
    res.status(404).json({message: 'Route not found!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})