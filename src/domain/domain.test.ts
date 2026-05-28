import { describe, expect, it } from 'vitest'
import {
  sampleAgents,
  sampleAilments,
  sampleAppointments,
  sampleTherapies,
  validateAppointmentTherapyMatch,
  type Agent,
  type Ailment,
  type Appointment,
  type Therapy,
} from './index'

describe('AgentClinic domain vocabulary', () => {
  it('defines inspectable sample data for agents, ailments, therapies, and appointments', () => {
    expect(sampleAgents.length).toBeGreaterThan(0)
    expect(sampleAilments.length).toBeGreaterThan(0)
    expect(sampleTherapies.length).toBeGreaterThan(0)
    expect(sampleAppointments.length).toBeGreaterThan(0)

    const agentIds = new Set(sampleAgents.map((agent) => agent.id))
    const ailmentIds = new Set(sampleAilments.map((ailment) => ailment.id))
    const therapyIds = new Set(sampleTherapies.map((therapy) => therapy.id))
    const allIds = [
      ...sampleAgents.map((agent) => agent.id),
      ...sampleAilments.map((ailment) => ailment.id),
      ...sampleTherapies.map((therapy) => therapy.id),
      ...sampleAppointments.map((appointment) => appointment.id),
    ]

    expect(new Set(allIds).size).toBe(allIds.length)

    for (const agent of sampleAgents) {
      expect(agent.ailmentIds.length).toBeGreaterThan(0)
      for (const ailmentId of agent.ailmentIds) {
        expect(ailmentIds.has(ailmentId)).toBe(true)
      }
    }

    for (const therapy of sampleTherapies) {
      expect(therapy.durationMinutes).toBeGreaterThan(0)
      expect(therapy.treatsCategories.length).toBeGreaterThan(0)
    }

    for (const appointment of sampleAppointments) {
      expect(agentIds.has(appointment.agentId)).toBe(true)
      expect(therapyIds.has(appointment.therapyId)).toBe(true)
    }
  })

  it('keeps the core domain type names available to future features', () => {
    const agent: Agent = sampleAgents[0]
    const ailment: Ailment = sampleAilments[0]
    const therapy: Therapy = sampleTherapies[0]
    const appointment: Appointment = sampleAppointments[0]

    expect(agent.ailmentIds).toContain(ailment.id)
    expect(therapy.treatsCategories).toContain(ailment.category)
    expect(appointment.agentId).toBe(agent.id)
    expect(appointment.therapyId).toBe(therapy.id)
  })

  it('accepts an appointment when the therapy treats a current agent ailment', () => {
    for (const appointment of sampleAppointments) {
      const result = validateAppointmentTherapyMatch(
        appointment,
        sampleAgents,
        sampleTherapies,
        sampleAilments,
      )

      expect(result).toEqual({
        valid: true,
        messages: [],
      })
    }
  })

  it('rejects an appointment when the therapy does not match current agent ailments', () => {
    const appointment: Appointment = {
      id: 'appointment-mismatch',
      agentId: 'agent-rhea-2',
      therapyId: 'therapy-context-compress',
      scheduledAt: '2026-06-01T12:00:00.000Z',
      status: 'scheduled',
    }

    const result = validateAppointmentTherapyMatch(
      appointment,
      sampleAgents,
      sampleTherapies,
      sampleAilments,
    )

    expect(result.valid).toBe(false)
    expect(result.messages).toContain(
      'Guided Context Compression does not treat any current ailment category for Rhea-2',
    )
  })

  it('rejects an appointment when an agent references an unknown ailment', () => {
    const agents: Agent[] = [
      {
        ...sampleAgents[0],
        ailmentIds: ['ailment-context-bloat', 'ailment-missing'],
      },
    ]

    const result = validateAppointmentTherapyMatch(
      sampleAppointments[0],
      agents,
      sampleTherapies,
      sampleAilments,
    )

    expect(result.valid).toBe(false)
    expect(result.messages).toContain(
      'Codex-7 references unknown ailments: ailment-missing',
    )
  })
})
