export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface GameState {
  id: string
  status: 'idle' | 'playing' | 'paused' | 'finished'
  players: Player[]
  currentTurn: number
  board: unknown
  settings: GameSettings
}

export interface Player {
  id: string
  name: string
  color: string
  score: number
  isAI: boolean
}

export interface GameSettings {
  difficulty: 'easy' | 'medium' | 'hard'
  timeLimit?: number
  soundEnabled: boolean
  animationsEnabled: boolean
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: Date
}

export type Theme = 'dark' | 'light'
