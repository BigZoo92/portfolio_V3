import { fontTitle } from '@/app/layout'
import { GridProps } from '@/app/types'
import './punchline.scss'
import { Card } from '../Card'

const Punchline = (props: GridProps) => {
  return (
    <Card className="punchline" {...props}>
      <h1>
        <i>Fusing</i> <b className={fontTitle.className}>creativity</b> with{' '}
        <b className={fontTitle.className}>logic</b> to craft
        <i> revolutionary</i> <b className={fontTitle.className}>interfaces</b>{' '}
        and <b className={fontTitle.className}>algorithms</b>.
      </h1>
    </Card>
  )
}

export default Punchline
