import { GetNotes } from '@/renderer/types'
declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
    }
  }
}
