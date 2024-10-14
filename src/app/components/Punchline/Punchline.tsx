import { fontTitle } from '@/app/layout'
import { gridProps } from '@/app/types'
import './punchline.scss'

const Punchline = ({ rows, columns }: gridProps) => {
  return (
    <section
      className="section punchline"
      style={{
        gridColumnStart: columns[0],
        gridColumnEnd: columns[1],
        gridRowStart: rows[0],
        gridRowEnd: rows[1],
      }}
    >
      <h1>
        <i>Fusing</i> <b className={fontTitle.className}>creativity</b> with{' '}
        <b className={fontTitle.className}>logic</b> to craft
        <i> revolutionary</i> <b className={fontTitle.className}>interfaces</b>{' '}
        and <b className={fontTitle.className}>algorithms</b>.
      </h1>
    </section>
  )
}

export default Punchline
