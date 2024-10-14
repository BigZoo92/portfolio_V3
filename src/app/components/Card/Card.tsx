import { CardNode } from '@/app/types'

const Card = ({ rows, columns, className, children }: CardNode) => {
  return (
    <section
      className={`section ${className}`}
      style={{
        gridColumnStart: columns[0],
        gridColumnEnd: columns[1],
        gridRowStart: rows[0],
        gridRowEnd: rows[1],
      }}
    >
      {children}
    </section>
  )
}

export default Card
