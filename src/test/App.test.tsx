import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the welcome page', () => {
    render(<App />)
    expect(screen.getByText('Welcome to Skeleton')).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<App />)
    expect(screen.getByText('Lightning Fast')).toBeInTheDocument()
    expect(screen.getByText('Dark Theme')).toBeInTheDocument()
    expect(screen.getByText('Component Ready')).toBeInTheDocument()
  })
})
