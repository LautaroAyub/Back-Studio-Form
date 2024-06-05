import './App.scss'
import { ScreenWidthProvider } from './Components/Context/screenProvider'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import IntroductionSection from './Components/IntroductionSection'
import HeroSection from './Components/HeroSection'
import SocialMediaSection from './Components/SocialMediaSection'
import FormSection from './Components/FormSection'
import Footer from './Components/Footer'
import Services from './Components/Services'


function App() {
  return (
    <>
    <ScreenWidthProvider>
      <NavBar />
        <Header />
        <IntroductionSection />
        <HeroSection />
        <Services/>
        <SocialMediaSection />
        <FormSection />
      <Footer />
      </ScreenWidthProvider>
    </>
  )
}
export default App
