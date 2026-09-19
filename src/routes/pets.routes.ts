import express, {type Router, type Request, type Response} from 'express';
import { getPets } from '../controllers/pets.controllers.ts';
import { pets, type Pet } from '../data/pets.ts';

export const router:Router = express.Router()

type PetQueryParams = {
    species?:string, 
    adopted?: 'true' | 'false', 
    minAge?:string, 
    maxAge?:string
}

router.get('/', getPets)

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