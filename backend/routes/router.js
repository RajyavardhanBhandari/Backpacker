import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


app.use(express.json())

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'))                    
})

export default router;