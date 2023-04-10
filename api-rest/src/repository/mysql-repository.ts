import Pool from "mysql2/typings/mysql/lib/Pool";
import { IRepository } from "./interface-repository";

export class MysqlRepository implements IRepository {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  async getAll(): Promise<any[]> {
    const conn = await this.db;
    const response: any = await conn.query(
      "Select * from articles INNER JOIN categories INNER JOIN authors;"
    );
    return response[0];
  }

  async search(query: String): Promise<any[]> {
    const conn = await this.db;
    const response: any = await conn.query(
      `Select * from articles a INNER JOIN categories c INNER JOIN authors WHERE a.title LIKE '%${query}%' OR a.content LIKE '%${query}%'; ;`
    );
    return response[0];
  }

  async searchByCategory(query: String): Promise<any[]> {
    const conn = await this.db;
    const response: any = await conn.query(
      `Select * from articles a INNER JOIN categories c INNER JOIN authors where UPPER(c.name_category) = UPPER("${query}") ;`
    );
    return response[0];
  }
}
