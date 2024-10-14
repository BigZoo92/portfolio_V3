import { fontTitle } from '@/app/layout'
import { gridProps } from '@/app/types'
import './contact.scss'

const Contact = ({ rows, columns }: gridProps) => {
  return (
    <section
      className="section contact"
      style={{
        gridColumnStart: columns[0],
        gridColumnEnd: columns[1],
        gridRowStart: rows[0],
        gridRowEnd: rows[1],
      }}
    >
      <p>Any questions ?</p>
      <h3>
        <b className={fontTitle.className}>Contact</b>
        <i>Me</i>
      </h3>
    </section>
  )
}

export default Contact
