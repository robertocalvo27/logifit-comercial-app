import { ArrowRight, CheckCircle, ShieldAlert, Activity } from 'lucide-react'
import { logifitData } from '../data/logifit-data'

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <ShieldAlert className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">Sistema de Prevención Integral</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {logifitData.brand.tagline}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              {logifitData.brand.description}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div>
                <div className="text-4xl font-bold text-yellow-300">90%</div>
                <div className="text-sm text-primary-100">Reducción de accidentes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-primary-100">Monitoreo continuo</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 mb-10">
              {['Prevención en tiempo real', 'Sistema integrado completo', 'Brigada Preventiva 24/7'].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                Solicitar Demo Gratis
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-800/50 hover:bg-primary-800 backdrop-blur-sm font-semibold py-4 px-8 rounded-lg border-2 border-white/30 transition-all duration-200"
              >
                Ver Productos
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-10 border-t border-white/20">
              <p className="text-sm text-primary-200 mb-3">Confiado por empresas líderes:</p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <span>Cumbra</span>
                <span>•</span>
                <span>Sagitario</span>
                <span>•</span>
                <span>90% reducción accidentes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Card - Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Simulated Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <Activity className="h-6 w-6 text-primary-600" />
                    <div className="flex-1">
                      <div className="h-2 bg-primary-200 rounded w-3/4"></div>
                      <div className="h-2 bg-primary-100 rounded w-1/2 mt-2"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
                    <div className="h-32 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg"></div>
                  </div>
                  <div className="h-48 bg-gray-50 rounded-lg"></div>
                </div>
              </div>

              {/* Floating Alert Card */}
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 rounded-xl shadow-xl p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Alerta Preventiva</p>
                    <p className="text-xs">Fatiga detectada - Turno A</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Accidentes Evitados</p>
                <p className="text-3xl font-bold text-primary-600">156</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

