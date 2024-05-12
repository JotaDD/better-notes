import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const currLanguage = window.context.locale
const currTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

const dateFormatter = new Intl.DateTimeFormat(currLanguage, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: currTimezone
})

export const formatDateFromMs = (ms: number) => {
  return dateFormatter.format(ms)
}

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
