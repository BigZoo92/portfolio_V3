import { Header } from './components/Header'
import { Punchline } from './components/Punchline'
import { ProfilPicture } from './components/ProfilPicture'
import { Project } from './components/Project'
import { Contact } from './components/Contact'

export default function Home() {
  return (
    <main>
      <Header rows={[1, 2]} columns={[1, 11]} />
      <Punchline rows={[2, 7]} columns={[1, 5]} />
      <ProfilPicture rows={[2, 7]} columns={[5, 7]} />
      <Project rows={[2, 9]} columns={[7, 11]} />
      <Punchline rows={[7, 11]} columns={[1, 4]} />
      <Contact rows={[7, 11]} columns={[4, 7]} />
      <Punchline rows={[9, 11]} columns={[7, 11]} />
    </main>
  )
}
