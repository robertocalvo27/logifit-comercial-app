import { HeroSection } from './components/HeroSection'
import { BenefitsSection } from './components/BenefitsSection'
import { ProductsSection } from './components/ProductsSection'
import { FeaturesSection } from './components/FeaturesSection'
import { IndustriesSection } from './components/IndustriesSection'
import { CaseStudiesSection } from './components/CaseStudiesSection'
import { LeadFormSection } from './components/LeadFormSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <FeaturesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <LeadFormSection />
      <Footer />
    </div>
  )
}

export default App
