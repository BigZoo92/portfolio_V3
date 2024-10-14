import Link from 'next/link'
import './header.scss'
import { fontTitle } from '@/app/layout'
import { GridProps } from '@/app/types'

const Header = ({ rows, columns }: GridProps) => {
  return (
    <header
      className="section"
      style={{
        gridColumnStart: columns[0],
        gridColumnEnd: columns[1],
        gridRowStart: rows[0],
        gridRowEnd: rows[1],
      }}
    >
      <h2
        className={fontTitle.className}
        style={{
          fontSize: 'clamp(1.25rem, 3vw, 3rem)',
          textTransform: 'uppercase',
        }}
      >
        enzo givernaud
      </h2>
      <nav>
        <ul>
          <li>
            <Link href="/">Menu 1</Link>
          </li>
          <li>
            <Link href="/">Menu 2</Link>
          </li>
          <li>
            <Link href="/">Menu 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
