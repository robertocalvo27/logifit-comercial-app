import { Drill, HardHat, Truck, Package, Factory, Building2 } from 'lucide-react'

export function IndustriesSection() {
  const industryDetails = [
    {
      name: 'Minería',
      icon: Drill,
      description: 'Control total en operaciones subterráneas y de superficie',
      useCases: ['Detección de fatiga en turnos nocturnos', 'Monitoreo de zonas peligrosas', 'Cumplimiento OSINERGMIN'],
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Construcción',
      icon: HardHat,
      description: 'Prevención en alturas, maquinaria pesada y zonas de riesgo',
      useCases: ['Alertas en trabajo en alturas', 'Control de fatiga operadores', 'Documentación automática'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'Transporte',
      icon: Truck,
      description: 'Seguridad vial y prevención de accidentes en carretera',
      useCases: ['Detección somnolencia conductores', 'Monitoreo rutas largas', 'Alertas preventivas 24/7'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      name: 'Logística',
      icon: Package,
      description: 'Control en almacenes, montacargas y operaciones 24/7',
      useCases: ['Seguridad en almacenes', 'Control de montacargas', 'Turnos rotativos seguros'],
      color: 'from-purple-500 to-pink-600',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industrias que Confiamos
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones especializadas para sectores de alto riesgo
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {industryDetails.map((industry, idx) => {
            const Icon = industry.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${industry.color} p-6 text-white`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-white/20 backdrop-blur-sm h-14 w-14 rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold">{industry.name}</h3>
                  </div>
                  <p className="text-white/90">{industry.description}</p>
                </div>

                {/* Use Cases */}
                <div className="p-6">
                  <p className="text-sm font-semibold text-gray-600 mb-3">Aplicaciones clave:</p>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, ucIdx) => (
                      <li key={ucIdx} className="flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Industries */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            También trabajamos con:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Manufactura', 'Agroindustria', 'Energía', 'Retail', 'Servicios'].map((industry, idx) => {
              const icons = [Factory, Building2, Drill, Package, Building2]
              const Icon = icons[idx]
              return (
                <div key={idx} className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                  <Icon className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-700">{industry}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

