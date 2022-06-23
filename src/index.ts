import express, {Express} from "express"
import cors from "cors"
import criarTurma from "./endepoint/turma/criarTurma"
import pegarTurma from "./endepoint/turma/pegarTurmas"


const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/turma", criarTurma)
app.get("/turma", pegarTurma)