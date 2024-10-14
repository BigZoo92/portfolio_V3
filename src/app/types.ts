import { ReactNode } from 'react'

export type GridInfos = [number, number]

export interface GridProps {
  rows: GridInfos
  columns: GridInfos
}

export interface CardNode extends GridProps {
  className?: string
  children?: ReactNode
}
