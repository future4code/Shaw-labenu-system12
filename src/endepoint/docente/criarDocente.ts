
    import { Request, Response } from 'express';
    import connection from '../../connection';
    
    export default async function criarDocente(req: Request, res: Response): Promise<void> {
    try {
        
        const { name, email, dataNascimento, especialidades } = req.body;

        if (!name || !email || !dataNascimento || !especialidades) {
            throw new Error('Dados insuficientes');
        }
    
        await connection("docente").insert({name, email, dataNascimento, especialidades})
    
        res.status(201).send({message: "Docente criada com sucesso!"});
    } catch (error: any) {
        res.status(500).json({menssage: error.message});
        
    }
    }