import { ReactNode } from 'react'

export interface IModalProps {
  openModal: boolean
  children?: ReactNode
  onClose: () => void
  className?: string
}
