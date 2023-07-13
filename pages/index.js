import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>

  )
}
