import { Request, Response } from 'express';
import connection from '../../connection';

export default async function pegarDocente(req: Request, res: Response): Promise<void> {
try {
    const allDocentes = await connection("docente").select("*");
    res.status(200).json(allDocentes);
    
} catch (error: any) {
    res.status(500).json({menssage: error.message});
    
}
}