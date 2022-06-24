
import criarTurma from "./endepoint/turma/criarTurma"
import pegarTurma from "./endepoint/turma/pegarTurmas"
import app from "./app"
import criarDocente from "./endepoint/docente/criarDocente"
import criarAluno from "./endepoint/estudantes/criarEstudante"
import pegarDocente from "./endepoint/docente/buscarPessoasDocentes"




app.post("/turma", criarTurma)
app.get("/turmas", pegarTurma)

app.post("/docente", criarDocente)
app.get("/docente", pegarDocente)


app.post("/aluno", criarAluno)