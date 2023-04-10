import express,{Router} from 'express';
import cors from 'cors';
import legalArticlesRouter from "./routers/index"
import {LegaLArticleController} from './controllers/legal-articles-controller';
import {MysqlRepository} from './repository/mysql-repository';
import { IRepository } from './repository/interface-repository';
import { connect } from './db/mysql';


export class Server {
  private app: express.Application;
  private router : Router;
  private repository: IRepository;
  private useRouteLegalArticle: legalArticlesRouter;
  private legalArticleController: LegaLArticleController;
  private db:any;
  
  constructor(db:any) {
      this.db = db;
      this.app = express();
      this.router = Router();
      this.repository = new MysqlRepository(this.db)
      this.legalArticleController = new LegaLArticleController(this.repository)
      this.useRouteLegalArticle = new legalArticlesRouter(this.router, this.legalArticleController)
      this.config();
      this.routes();
  }

  config() {    
      this.app.set('port', process.env.PORT || 4000);
      this.app.use(express.json());
      this.app.use(express.urlencoded({extended: false}));
      this.app.use(cors());
  }

  private routes():void{
      this.app.use('/api', this.useRouteLegalArticle.start());
  }

  public start():void {
      this.app.listen(this.app.get('port'), 
      () => console.log('Server is listenning on port', this.app.get('port')))
  }

}


const server = new Server(connect());
server.start();