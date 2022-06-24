import { Request, Response } from 'express';
import connection from '../../connection';

export default async function pegarTurma(req: Request, res: Response): Promise<void> {
try {
    const allTurmas = await connection("turma").select("*");
    res.status(200).json(allTurmas);
    
} catch (error: any) {
    res.status(500).json({menssage: error.message});
    
}
}