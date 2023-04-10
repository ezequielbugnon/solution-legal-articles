import { Router } from 'express';
import { IController } from '../controllers/legal-articles-controller';

class LegalArticlesRouter{
    private router: Router;
    private legalArticlesController: IController;

    constructor(router: Router, legalArticlesController: IController ) {
        this.router = router;
        this.legalArticlesController = legalArticlesController;
        this.routes();
    }

    private routes():void {
        this.router.get('/JurisHand/all', this.legalArticlesController.getAll);
        this.router.get('/JurisHand/search/:target', this.legalArticlesController.search);
        this.router.get('/JurisHand/category/:target', this.legalArticlesController.searchByCategory);
    }

    public start(): Router {
        return this.router;
    }
}

export default LegalArticlesRouter;