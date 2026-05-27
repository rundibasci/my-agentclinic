import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import Home from './page'

describe('AgentClinic home page', () => {
  it('introduces the clinic and its future care areas', () => {
    const html = renderToStaticMarkup(<Home />)

    expect(html).toContain('AgentClinic')
    expect(html).toContain('AI agents')
    expect(html).toContain('humans')
    expect(html).toContain('Agents')
    expect(html).toContain('Ailments')
    expect(html).toContain('Therapies')
    expect(html).toContain('Appointments')
  })
})
