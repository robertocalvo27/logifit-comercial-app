import { Watch, Camera, LayoutDashboard, ArrowRight } from 'lucide-react'
import { logifitData } from '../data/logifit-data'

export function ProductsSection() {
  const productIcons = {
    'Logifit Sistema Integral': LayoutDashboard,
    'Smartbands de Detección': Watch,
    'Cámaras Inteligentes': Camera,
  }

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nuestros Productos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sistema Integral de Prevención
          </h2>
          <p className="text-xl text-gray-600">
            Tres productos que trabajan juntos para prevenir accidentes antes de que ocurran
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {logifitData.products.map((product, idx) => {
            const Icon = productIcons[product.name as keyof typeof productIcons]
            const isMainProduct = idx === 0
            
            return (
              <div 
                key={idx}
                className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                  isMainProduct 
                    ? 'border-primary-500 shadow-xl lg:scale-105' 
                    : 'border-gray-200 shadow-lg hover:border-primary-300'
                }`}
              >
                {isMainProduct && (
                  <div className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MÁS POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className="bg-primary-100 h-16 w-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>

                {/* Product Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="space-y-3 mb-8">
                  {product.features.slice(0, 4).map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={scrollToForm}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    isMainProduct
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Solicitar Demo
                </button>
              </div>
            )
          })}
        </div>

        {/* Integration Notice */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sistema 100% Integrado
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Los tres productos funcionan en perfecta sincronía: las smartbands y cámaras detectan riesgos en tiempo real, 
            mientras el sistema central analiza, alerta y documenta todo automáticamente.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium">✓ Instalación rápida</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium">✓ Capacitación incluida</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium">✓ Soporte 24/7</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium">✓ Actualizaciones automáticas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

