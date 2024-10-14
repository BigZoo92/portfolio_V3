import './profil_picture.scss'
import Image from 'next/image'
import profilePic from '../../images/me.png'
import { GridProps } from '@/app/types'
import { Card } from '../Card'

const ProfilPicture = (props: GridProps) => {
  return (
    <Card className="cd_image" {...props}>
      <Image
        src={profilePic}
        alt="Picture of the author Enzo Givernaud"
        placeholder="blur"
        priority
        fill
      />
    </Card>
  )
}

export default ProfilPicture
