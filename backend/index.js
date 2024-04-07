import express from 'express'
import router from './routes/router.js'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', router)
app.use(express.static(path.join(__dirname, '../')))
// app.use(express.static(path.join(__dirname, '../Frontend/css')))
// app.use(express.static(path.join(__dirname, '../Frontend/images')))

app.listen(3000, () => {
    console.log('Server running at 3000');
})