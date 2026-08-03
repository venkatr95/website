import { BentoGrid } from '../home/BentoGrid'
import { About } from '../about/About'
import { Contact } from '../contact/Contact'
import { Project } from '../project/Project'
import { ProductPortfolio } from '../project/ProductPortfolio'
import { GithubProjects } from '../project/GithubProjects'

export function Main() {
  return (
    <main className="relative z-0">
      <BentoGrid />
      <About />
      <Project />
      <ProductPortfolio />
      <GithubProjects />
      <Contact />
    </main>
  )
}
