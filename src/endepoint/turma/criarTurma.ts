import { Request, Response } from 'express';
import connection from '../../connection';

export default async function criarTurma(req: Request, res: Response): Promise<void> {
try {
    
    const { name, estudantes, modulo, dataInicio, dataTermino, docentes } = req.body;
    

    if (!name || !estudantes || !modulo || !dataInicio || !dataTermino || !docentes) {
        throw new Error('Dados insuficientes');
    }

    await connection("turma").insert({name, estudantes, modulo, dataInicio, dataTermino, docentes})

    res.status(201).send({message: "Turma criada com sucesso!"});
} catch (error: any) {
    res.status(500).json({menssage: error.message});
    
}
}