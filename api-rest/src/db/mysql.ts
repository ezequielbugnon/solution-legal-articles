import { createPool, Pool } from 'mysql2/promise'

export const connect = async(): Promise<Pool> => {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'JurisHand',
        password: '12345',
        connectionLimit: 10,
    });
    return connection;
}