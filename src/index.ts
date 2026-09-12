import express from 'express';
import type { Request, Response } from 'express';

const PORT = 8000

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.json('Hello from Server')
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))