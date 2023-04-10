import { describe, expect, it} from 'vitest'
import { LegaLArticleController } from './legal-articles-controller';
import { IRepository } from '../repository/interface-repository';
import mocks from 'node-mocks-http';


class RepoMock implements IRepository{
    getAll(): Promise<any[]> {
       return new Promise((resolve, reject) => {
              resolve(['Get ALL']);
          });
    }
    search(query: String): Promise<any[]> {
        return new Promise((resolve, reject) => {
            resolve(['search']);
        });
    }
    searchByCategory(query: String): Promise<any[]> {
        return new Promise((resolve, reject) => {
            resolve(['search by category']);
        });
    }

}



describe('controller', () => {


  it('controller test getAll', async() => {

    const req = mocks.createRequest({
        method: 'GET',
        url: '/user/42',
        params: {
          id: 42
        }
    });

    const res = mocks.createResponse();
    
    const controller = new LegaLArticleController(new RepoMock())

    expect(controller.getAll(req, res)).resolves.ok
  })

  it('controller test search', async() => {

    const req = mocks.createRequest({
        method: 'GET',
        url: '/user/42',
        params: {
          id: 42
        }
    });

    const res = mocks.createResponse();
    
    const controller = new LegaLArticleController(new RepoMock())

    expect(controller.search(req, res)).resolves.ok

  })

  it('controller test search', async() => {
    const req = mocks.createRequest({
        method: 'GET',
        url: '/user/42',
        params: {
          id: 42
        }
    });

    const res = mocks.createResponse();
    
    const controller = new LegaLArticleController(new RepoMock())

    expect(controller.searchByCategory(req, res)).resolves.ok


  })
})