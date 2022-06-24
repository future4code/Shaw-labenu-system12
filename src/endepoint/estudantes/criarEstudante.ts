
import { Request, Response } from 'express';
import connection from '../../connection';


export default async function criarAluno(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, datanascimento, hobbies} = req.body;
        if ( !name || !email || !datanascimento || !hobbies) {
            throw new Error('Dados insuficientes');
        }
        await connection("estudante").insert({ name, email, datanascimento, hobbies })
        res.status(201).json({message: "Aluno cadastrado com sucesso!"});
    } catch (error: any) {
        res.status(500).json({menssage: error.message});
    }
    }

