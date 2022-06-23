import cors from "cors"
import express from "express";
import { alunos, Estudantes } from "../data/estudante";


const app = express()

app.use(express.json())
app.use(cors())

app.post("/estudantes", (req, res) => {
    try {
        const { id, name, email, novaDataNascimento, hobbie } = req.body
        const [dia, mes, ano] = novaDataNascimento.split("/")
        const datanascimento: Date = new Date(`${ano}-${mes}-${dia}`)

                alunos.push({
            id,
            name,
            email,
            datanascimento,
            hobbie,
        })
        res.status(201).send("Aluno Cadastrado com sucesso!!!")
    } catch (error: any) {
        console.log(error)
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
})


