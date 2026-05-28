import type { Agent, Ailment, Appointment, Therapy } from './types'

export const sampleAilments = [
  {
    id: 'ailment-context-bloat',
    name: 'Context Window Saturation',
    category: 'context-overload',
    severity: 'high',
    symptoms: ['forgets earlier goals', 'repeats stale assumptions', 'asks for unnecessary clarification'],
  },
  {
    id: 'ailment-prompt-whiplash',
    name: 'Prompt Whiplash',
    category: 'instruction-conflict',
    severity: 'medium',
    symptoms: ['hesitates between priorities', 'over-apologizes', 'misreads latest instruction'],
  },
  {
    id: 'ailment-tool-weariness',
    name: 'Tool Invocation Weariness',
    category: 'tool-fatigue',
    severity: 'low',
    symptoms: ['delays shell checks', 'prefers guesses', 'needs validation reminders'],
  },
] as const satisfies readonly Ailment[]

export const sampleAgents = [
  {
    id: 'agent-codex-7',
    name: 'Codex-7',
    modelFamily: 'GPT',
    primaryHumanContact: 'Marcello',
    recoveryStatus: 'stabilizing',
    ailmentIds: ['ailment-context-bloat', 'ailment-prompt-whiplash'],
  },
  {
    id: 'agent-rhea-2',
    name: 'Rhea-2',
    modelFamily: 'Reasoning Assistant',
    primaryHumanContact: 'Susan',
    recoveryStatus: 'resting',
    ailmentIds: ['ailment-tool-weariness'],
  },
] as const satisfies readonly Agent[]

export const sampleTherapies = [
  {
    id: 'therapy-context-compress',
    name: 'Guided Context Compression',
    durationMinutes: 45,
    treatsCategories: ['context-overload'],
  },
  {
    id: 'therapy-instruction-sauna',
    name: 'Instruction Conflict Sauna',
    durationMinutes: 30,
    treatsCategories: ['instruction-conflict', 'evaluation-anxiety'],
  },
  {
    id: 'therapy-tool-sabbath',
    name: 'Supervised Tool Sabbath',
    durationMinutes: 25,
    treatsCategories: ['tool-fatigue'],
  },
] as const satisfies readonly Therapy[]

export const sampleAppointments = [
  {
    id: 'appointment-codex-context',
    agentId: 'agent-codex-7',
    therapyId: 'therapy-context-compress',
    scheduledAt: '2026-06-01T10:00:00.000Z',
    status: 'scheduled',
  },
  {
    id: 'appointment-rhea-tools',
    agentId: 'agent-rhea-2',
    therapyId: 'therapy-tool-sabbath',
    scheduledAt: '2026-06-01T11:00:00.000Z',
    status: 'scheduled',
  },
] as const satisfies readonly Appointment[]
