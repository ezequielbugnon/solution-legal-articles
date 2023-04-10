import { Request, Response } from 'express';
import { IRepository } from '../repository/interface-repository';

export class LegaLArticleController implements IController {
    public repo: IRepository

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    public getAll = async (req: Request, res: Response):Promise<any> => {
        try {
           const response = await this.repo.getAll()
           res.json(response)
        } catch (error) {
            console.log("error", error);
        }
    }

    public search = async (req: Request, res: Response):Promise<any> => {
        try {
            if(req.params.target === null || req.params.target === ''){
                res.json("does not accept empty values").status(404)
            }
           const resp = await this.repo.search(req.params.target)
           if(resp.length === 0 ){
            res.json('The search not exits').status(404)
           }
           res.json(resp)
        } catch (error) {
            console.log("pp",error);
        }
    }

    public searchByCategory = async (req: Request, res: Response):Promise<any> => {
        try {
            if(req.params.target === null || req.params.target === ''){
                res.json("does not accept empty values").status(404)
            }
           const resp = await this.repo.searchByCategory(req.params.target)
           if(resp.length === 0 ){
            res.json('The category does not exist').status(404)
           }
           res.json(resp)
        } catch (error) {
            console.log("pp",error);
        }
    }
}

export interface IController {
    getAll(req: Request, res: Response):Promise<any>
    searchByCategory(req: Request, res: Response):Promise<any>
    search(req: Request, res: Response):Promise<any>
}