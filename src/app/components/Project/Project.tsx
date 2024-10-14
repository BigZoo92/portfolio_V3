import { gridProps } from '@/app/types'
import './project.scss'

const Project = ({ rows, columns }: gridProps) => {
  return (
    <section
      className="section"
      style={{
        gridColumnStart: columns[0],
        gridColumnEnd: columns[1],
        gridRowStart: rows[0],
        gridRowEnd: rows[1],
      }}
    ></section>
  )
}

export default Project
