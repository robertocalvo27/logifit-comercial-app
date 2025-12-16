import { Activity, Bell, BarChart3, Shield, Users, FileText, Smartphone, Database } from 'lucide-react'
import { logifitData } from '../data/logifit-data'

export function FeaturesSection() {
  const featureIcons = [
    Activity, Bell, BarChart3, Shield, 
    Users, FileText, Smartphone, Database
  ]

  const mainFeatures = [
    {
      icon: Activity,
      title: 'Detección de Fatiga en Tiempo Real',
      description: 'Smartbands que monitorizan signos vitales y alertan antes del accidente',
    },
    {
      icon: Bell,
      title: 'Sistema de Alertas Preventivas',
      description: 'Notificaciones instantáneas a supervisores y brigada de respuesta',
    },
    {
      icon: BarChart3,
      title: 'Dashboards Ejecutivos',
      description: 'KPIs en tiempo real: accidentes evitados, zonas críticas, patrones de riesgo',
    },
    {
      icon: Shield,
      title: 'Cumplimiento Automático',
      description: 'Auditorías, reportes legales y trazabilidad completa sin esfuerzo manual',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Características del Sistema
          </h2>
          <p className="text-xl text-gray-600">
            Tecnología de punta al servicio de la seguridad laboral
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary-100 h-14 w-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* All Features List */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Funcionalidades Completas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logifitData.features.map((feature, idx) => {
              const Icon = featureIcons[idx % featureIcons.length]
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4">
                  <div className="bg-primary-50 h-12 w-12 rounded-full flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-700">Precisión en detección</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">&lt;1s</div>
            <div className="text-sm text-gray-700">Tiempo de respuesta</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-gray-700">Monitoreo continuo</div>
          </div>
        </div>
      </div>
    </section>
  )
}

