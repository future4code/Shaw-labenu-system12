import { Request, Response } from 'express';
import connection from '../../connection';

export default async function criarTurma(req: Request, res: Response): Promise<void> {
try {
    
    const { nome, descricao, dataInicio, dataFim, professorId } = req.body;

} catch (error: any) {
    res.status(500).json({menssage: error.message});
    
}
}