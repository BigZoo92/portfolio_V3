import { GridProps } from '@/app/types'
import './project.scss'
import { Card } from '../Card'

const Project = (props: GridProps) => {
  return <Card className="section" {...props}></Card>
}

export default Project
