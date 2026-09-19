import express, {type Router, type Request, type Response} from 'express';
import { pets, type Pet } from '../data/pets.ts';

export const router:Router = express.Router()

type PetQueryParams = {
    species?:string, 
    adopted?: 'true' | 'false', 
    minAge?:string, 
    maxAge?:string
}

router.get('/', (
    req:Request<{}, unknown, {}, PetQueryParams>, 
    res:Response<Pet[]>
):void => {
    const { species, adopted, minAge, maxAge } = req.query
        let filteredPets = pets
    
        if(species) {
            filteredPets = filteredPets.filter(pet => 
                pet.species.toLowerCase() === species.toLowerCase()
            )
        }
    
        if(adopted) {
            filteredPets = filteredPets.filter(pet => 
                pet.adopted === JSON.parse(adopted.toLowerCase())
            )
        }
    
        if(minAge) {
            filteredPets = filteredPets.filter(pet => 
                pet.age >= JSON.parse(minAge)
            )
        }
    
        if(maxAge) {
            filteredPets = filteredPets.filter(pet => 
                pet.age <= JSON.parse(maxAge) 
            )
        }
    
        res.json(filteredPets)
})

router.get('/:id', (
    req:Request<{id:string}>, 
    res:Response<Pet | {message:string}>
):void => {
    const { id } = req.params
    const matchpet = pets.find(pet => pet.id === Number(id))

    if(matchpet) {
        res.json(matchpet)
    } else {
        res.status(404).json({message: 'Pet not found!'})
    } 
})