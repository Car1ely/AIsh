import Hero from './components/Hero'
import IntroStats from './components/IntroStats'
import ProblemSolution from './components/ProblemSolution'
import Courses from './components/Courses'
import Team from './components/Team'
import WhyUs from './components/WhyUs'
import Roadmap from './components/Roadmap'
import Demo from './components/Demo'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <IntroStats />
      <ProblemSolution />
      <Courses />
      <Team />
      <WhyUs />
      <Roadmap />
      <Demo />
      <TechStack />
      <Footer />
    </div>
  )
}

export default App

