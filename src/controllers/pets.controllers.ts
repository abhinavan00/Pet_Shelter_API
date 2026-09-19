import type {Request, Response} from 'express'
import { pets, type Pet } from '../data/pets.ts'

type PetQueryParams = {
    species?:string, 
    adopted?:'true' | 'false', 
    minAge?:string, 
    maxAge?:string
}

export const getPets = (
    req:Request<{}, unknown, {}, PetQueryParams>, 
    res:Response<Pet[]>
) => {
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
}