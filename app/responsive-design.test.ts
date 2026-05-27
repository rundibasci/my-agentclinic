import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const appRoot = process.cwd()

describe('responsive design styles', () => {
  it('keeps home content fluid across viewport sizes', () => {
    const css = readFileSync(join(appRoot, 'app', 'globals.css'), 'utf8')

    expect(css).toContain('clamp(')
    expect(css).toContain('auto-fit')
    expect(css).toContain('@media (max-width: 860px)')
  })

  it('lets the application shell adapt on narrow screens', () => {
    const css = readFileSync(
      join(appRoot, 'app', 'components', 'main-layout.module.css'),
      'utf8',
    )

    expect(css).toContain('flex-wrap: wrap')
    expect(css).toContain('@media (max-width: 560px)')
    expect(css).toContain('flex-direction: column')
  })
})
