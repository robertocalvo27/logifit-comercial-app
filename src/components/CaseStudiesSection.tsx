import { TrendingDown, Users, Clock, Award, Quote } from 'lucide-react'
import { logifitData } from '../data/logifit-data'

export function CaseStudiesSection() {
  const caseHighlights = [
    {
      metric: '90%',
      label: 'Reducción de Accidentes',
      icon: TrendingDown,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      metric: '2,500+',
      label: 'Trabajadores Protegidos',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      metric: '24/7',
      label: 'Monitoreo Continuo',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      metric: '100%',
      label: 'Cumplimiento Normativo',
      icon: Award,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Casos de Éxito Comprobados
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados Reales, Vidas Salvadas
          </h2>
          <p className="text-xl text-gray-600">
            Empresas líderes que transformaron su seguridad con Logifit
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {caseHighlights.map((highlight, idx) => {
            const Icon = highlight.icon
            return (
              <div key={idx} className="text-center">
                <div className={`${highlight.bgColor} ${highlight.color} h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{highlight.metric}</div>
                <div className="text-sm text-gray-600">{highlight.label}</div>
              </div>
            )
          })}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {logifitData.caseStudies.map((caseStudy, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Left - Company Info */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 lg:p-10">
                  <div className="flex items-start gap-3 mb-4">
                    <Building2 className="h-8 w-8 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{caseStudy.company}</h3>
                      <p className="text-primary-100">{caseStudy.industry}</p>
                    </div>
                  </div>
                  
                  {caseStudy.context && (
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-primary-200 mb-2">Contexto:</p>
                      <p className="text-white/90 text-sm leading-relaxed">{caseStudy.context}</p>
                    </div>
                  )}

                  {caseStudy.challenge && (
                    <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                      <p className="text-sm font-semibold text-primary-200 mb-2">Desafío:</p>
                      <p className="text-white/90 text-sm">{caseStudy.challenge}</p>
                    </div>
                  )}
                </div>

                {/* Right - Results */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Quote className="h-6 w-6 text-primary-600" />
                    <h4 className="text-lg font-bold text-gray-900">Resultados Comprobados</h4>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {caseStudy.results.map((result, resultIdx) => (
                      <div 
                        key={resultIdx}
                        className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg"
                      >
                        <p className="text-gray-800 font-medium">{result}</p>
                      </div>
                    ))}
                  </div>

                  {caseStudy.testimonial && (
                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-500">
                      <Quote className="h-8 w-8 text-primary-300 mb-3" />
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        "{caseStudy.testimonial}"
                      </p>
                      <p className="text-sm font-semibold text-gray-900">{caseStudy.testimonialAuthor}</p>
                      <p className="text-sm text-gray-600">{caseStudy.testimonialRole}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para Transformar tu Seguridad?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Únete a empresas líderes que ya redujeron sus accidentes hasta en un 90%
          </p>
          <button 
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Solicitar Demo Gratis
          </button>
        </div>
      </div>
    </section>
  )
}

// Import Building2 from lucide-react
import { Building2 } from 'lucide-react'

