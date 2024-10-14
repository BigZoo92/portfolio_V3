import { fontTitle } from '@/app/layout'
import { GridProps } from '@/app/types'
import './contact.scss'
import { Card } from '../Card'

const Contact = (props: GridProps) => {
  return (
    <Card className="contact" {...props}>
      <p>
        Dou you have <br /> Any questions ?
      </p>
      <h3>
        <b className={fontTitle.className}>Contact</b>
        <i>Me</i>
      </h3>
    </Card>
  )
}

export default Contact
