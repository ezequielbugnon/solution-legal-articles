import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import LegalArticlesRouter from '.'
import { Request, Response, Router } from 'express';
import { IController } from '../controllers/legal-articles-controller';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

class controller implements IController{
    getAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<any> {
        throw new Error('Method not implemented.');
    }
    searchByCategory(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<any> {
        throw new Error('Method not implemented.');
    }
    search(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<any> {
        throw new Error('Method not implemented.');
    }

}

describe('router', () => {

  it('router test', () => {
    const router = new LegalArticlesRouter(Router(), new controller());
    const rp = router.start();
    expect(rp.stack.length).toBe(3)
  })
})