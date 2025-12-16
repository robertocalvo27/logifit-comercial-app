import { CheckCircle, Shield, TrendingUp, Clock, Award } from 'lucide-react'
import { logifitData } from '../data/logifit-data'

export function BenefitsSection() {
  const highlightBenefits = [
    {
      icon: Shield,
      title: 'Reducción de hasta 90% en Accidentes',
      description: 'Casos comprobados en Cumbra y Sagitario. Prevención real y medible.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Clock,
      title: 'Monitoreo 24/7 en Tiempo Real',
      description: 'Detección instantánea de fatiga, somnolencia y comportamientos de riesgo.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: TrendingUp,
      title: 'ROI Comprobado',
      description: 'Retorno de inversión en el primer trimestre. Reducción de costos operativos.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Award,
      title: 'Cumplimiento Normativo Automático',
      description: 'Ley 29783, SUNAFIL, OSINERGMIN, ISO 45001. Todo documentado y trazable.',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Logifit?
          </h2>
          <p className="text-xl text-gray-600">
            El único sistema integral que combina hardware, software y servicio especializado
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlightBenefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${benefit.bgColor} ${benefit.color} h-14 w-14 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Beneficios Completos del Sistema
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {logifitData.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 mb-4 font-semibold">Cumplimiento Normativo:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {logifitData.compliance.map((norm, idx) => (
              <span key={idx} className="px-4 py-2 bg-white rounded-lg shadow text-sm font-medium text-gray-700 border border-gray-200">
                {norm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

