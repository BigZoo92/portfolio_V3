import './profil_picture.scss'
import Image from 'next/image'
import profilePic from '../../images/me.png'
import { gridProps } from '@/app/types'

const ProfilPicture = ({ rows, columns }: gridProps) => {
  return (
    <section
      className="sectioon cd_image"
      style={{
        gridColumnStart: columns[0],
        gridColumnEnd: columns[1],
        gridRowStart: rows[0],
        gridRowEnd: rows[1],
      }}
    >
      <Image
        src={profilePic}
        alt="Picture of the author Enzo Givernaud"
        placeholder="blur"
        priority
        fill
      />
    </section>
  )
}

export default ProfilPicture
