import type { Agent, Ailment, Appointment, Therapy, ValidationResult } from './types'

export function validateAppointmentTherapyMatch(
  appointment: Appointment,
  agents: readonly Agent[],
  therapies: readonly Therapy[],
  ailments: readonly Ailment[],
): ValidationResult {
  const messages: string[] = []
  const agent = agents.find((candidate) => candidate.id === appointment.agentId)
  const therapy = therapies.find((candidate) => candidate.id === appointment.therapyId)

  if (!agent) {
    messages.push(`Unknown agent: ${appointment.agentId}`)
  }

  if (!therapy) {
    messages.push(`Unknown therapy: ${appointment.therapyId}`)
  }

  if (!agent || !therapy) {
    return { valid: false, messages }
  }

  const knownAilmentIds = new Set(ailments.map((ailment) => ailment.id))
  const unknownAilmentIds = agent.ailmentIds.filter((ailmentId) => !knownAilmentIds.has(ailmentId))

  if (unknownAilmentIds.length > 0) {
    messages.push(`${agent.name} references unknown ailments: ${unknownAilmentIds.join(', ')}`)
  }

  const agentAilments = ailments.filter((ailment) => agent.ailmentIds.includes(ailment.id))
  const matchingAilment = agentAilments.find((ailment) =>
    therapy.treatsCategories.includes(ailment.category),
  )

  if (!matchingAilment) {
    messages.push(
      `${therapy.name} does not treat any current ailment category for ${agent.name}`,
    )
  }

  return {
    valid: messages.length === 0,
    messages,
  }
}
