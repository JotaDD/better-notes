import { useNotesList } from '@renderer/hooks/useNotesList'
import { isEmpty } from 'lodash'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './NotePreview'

export type NotePreviewListProps = {
  onSelect?: () => void
} & ComponentProps<'ul'>

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes) {
    return null
  }

  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No notes yet</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <li key={note.title + note.lastEditTime}>
          <NotePreview
            isActive={selectedNoteIndex === index}
            onClick={handleNoteSelect(index)}
            {...note}
          />
        </li>
      ))}
    </ul>
  )
}
