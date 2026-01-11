import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface AppState {
  sidebarOpen: boolean
  activeSection: string
  theme: 'dark' | 'light'
  notifications: Notification[]
}

interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: Date
}

interface AppActions {
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setActiveSection: (section: string) => void
  setTheme: (theme: 'dark' | 'light') => void
  addNotification: (notification: Omit<Notification, 'id' | 'read' | 'createdAt'>) => void
  markNotificationRead: (id: string) => void
  clearNotifications: () => void
}

type AppStore = AppState & AppActions

export const useAppStore = create<AppStore>()(
  persist(
    immer((set) => ({
      sidebarOpen: true,
      activeSection: 'home',
      theme: 'dark',
      notifications: [],

      toggleSidebar: () =>
        set((state) => {
          state.sidebarOpen = !state.sidebarOpen
        }),

      setSidebarOpen: (open) =>
        set((state) => {
          state.sidebarOpen = open
        }),

      setActiveSection: (section) =>
        set((state) => {
          state.activeSection = section
        }),

      setTheme: (theme) =>
        set((state) => {
          state.theme = theme
        }),

      addNotification: (notification) =>
        set((state) => {
          state.notifications.unshift({
            ...notification,
            id: crypto.randomUUID(),
            read: false,
            createdAt: new Date(),
          })
        }),

      markNotificationRead: (id) =>
        set((state) => {
          const notification = state.notifications.find((n) => n.id === id)
          if (notification) {
            notification.read = true
          }
        }),

      clearNotifications: () =>
        set((state) => {
          state.notifications = []
        }),
    })),
    {
      name: 'skeleton-app-storage',
      partialize: (state) => ({
        sidebarOpen: state.sidebarOpen,
        theme: state.theme,
      }),
    }
  )
)
