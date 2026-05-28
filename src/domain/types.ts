export type RecoveryStatus = 'stabilizing' | 'resting' | 'ready-for-care'

export type AilmentSeverity = 'low' | 'medium' | 'high'

export type AilmentCategory =
  | 'context-overload'
  | 'instruction-conflict'
  | 'tool-fatigue'
  | 'evaluation-anxiety'

export type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled'

export interface Agent {
  id: string
  name: string
  modelFamily: string
  primaryHumanContact: string
  recoveryStatus: RecoveryStatus
  ailmentIds: readonly string[]
}

export interface Ailment {
  id: string
  name: string
  category: AilmentCategory
  severity: AilmentSeverity
  symptoms: readonly string[]
}

export interface Therapy {
  id: string
  name: string
  durationMinutes: number
  treatsCategories: readonly AilmentCategory[]
}

export interface Appointment {
  id: string
  agentId: string
  therapyId: string
  scheduledAt: string
  status: AppointmentStatus
}

export interface ValidationResult {
  valid: boolean
  messages: string[]
}
