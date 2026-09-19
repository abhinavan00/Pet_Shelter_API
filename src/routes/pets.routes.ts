import express, {type Router, type Request, type Response} from 'express';
import { getPets, getPetById } from '../controllers/pets.controllers.ts';
import { validateNumericId, pleaseAuth } from '../middleware/pets.middleware.ts';

export const router:Router = express.Router()

router.get('/', getPets)

router.get('/:id', validateNumericId, pleaseAuth, getPetById)