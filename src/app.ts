import express, { response } from 'express'
import 'dotenv/config'
import { router } from './routes'
import { Server } from 'socket.io'
import http from 'http'
import cors from 'cors'

const app = express()
const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
    cors: {
        origin: '*'
    }
})
io.on('connection', socket => console.log(`usuário conectado no socket ${socket.id}`))
app.use(express.json())
app.use(cors())
app.use(router)
app.get('/github', (req,res)  => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_AUTH_CLIENT_ID}`
    )
})
app.get('/signin/callback', (req,res) => {
    const { code } = req.query
    res.json(code)
})

export { serverHttp, io}

