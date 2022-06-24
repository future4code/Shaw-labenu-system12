
import criarTurma from "./endepoint/turma/criarTurma"
// import pegarTurma from "./endepoint/turma/pegarTurmas"
import app from "./app"




app.post("/turma", criarTurma)
// app.get("/turma", pegarTurma)