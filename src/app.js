import cors from 'cors'
import express from 'express'

require('dotenv').config()
const app = express()


app
    .use(cors())
    .use(express.urlencoded({ extended: true }))
    .use(express.json({ limit: process.env.BODY_SIZE }))

app
    .use('/', (_, res) => res.send('<h1> Welcome to API! 👋 </h1>'))

export default app