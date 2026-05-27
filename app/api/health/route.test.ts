import { describe, expect, it } from 'vitest'
import { GET } from './route'

describe('GET /api/health', () => {
  it('returns a healthy AgentClinic status', async () => {
    const response = GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body).toEqual({
      status: 'healthy',
      service: 'AgentClinic',
    })
  })
})
