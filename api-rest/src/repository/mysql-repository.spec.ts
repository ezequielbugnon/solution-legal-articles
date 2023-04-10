import { describe, expect, it, vi} from 'vitest'
import { MysqlRepository } from './mysql-repository';

const db:any = {
    config: vi.fn(),
    getConnection: vi.fn(),
    query: vi.fn().mockReturnValue([0]),
    end: vi.fn(),
    on: vi.fn(),
    promise:vi.fn(),
    addListener: vi.fn(),
    once: vi.fn(),
    removeListener:vi.fn(),
    off: vi.fn(),
    removeAllListeners:vi.fn(),
    setMaxListeners:vi.fn(),
    getMaxListeners:vi.fn(),
    listeners: vi.fn(),
    rawListeners: vi.fn(),
    emit: vi.fn(),
    listenerCount:vi.fn(),
    prependListener:vi.fn(),
    prependOnceListener: vi.fn(),
    eventNames: vi.fn()
}

describe('repository', () => {

  it('repository test getAll', async() => {
    
    const repo = new MysqlRepository(db)

    expect(await repo.getAll()).toBe(0)
  })

  it('repository test search', async() => {
    
    const repo = new MysqlRepository(db)

    expect(await repo.search("something")).toBe(0)
  })

  it('repository test search', async() => {
    
    const repo = new MysqlRepository(db)

    expect(await repo.searchByCategory("something")).toBe(0)
  })
})