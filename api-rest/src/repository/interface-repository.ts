export interface IRepository {
    getAll(): Promise<any[]>;
    search(query: String):Promise<any[]>;
    searchByCategory(query: String):Promise<any[]>;
}