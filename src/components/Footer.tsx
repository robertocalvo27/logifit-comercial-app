import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Logifit</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sistema integral de prevención de accidentes laborales. 
              Tecnología que salva vidas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Productos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Productos</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white transition-colors">
                  Sistema Integral
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white transition-colors">
                  Smartbands de Detección
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white transition-colors">
                  Cámaras Inteligentes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white transition-colors">
                  Brigada Preventiva 24/7
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Industrias */}
          <div>
            <h4 className="font-bold text-lg mb-4">Industrias</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Minería</li>
              <li className="text-gray-400">Construcción</li>
              <li className="text-gray-400">Transporte</li>
              <li className="text-gray-400">Logística</li>
              <li className="text-gray-400">Manufactura</li>
              <li className="text-gray-400">Agroindustria</li>
            </ul>
          </div>

          {/* Column 4 - Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:ventas@logifit.pe" className="hover:text-primary-400 transition-colors">
                    ventas@logifit.pe
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <a href="tel:+5112345678" className="hover:text-primary-400 transition-colors">
                    +51 1 234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Dirección</p>
                  <p className="text-white">
                    Av. Principal 123<br />
                    Lima, Perú
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Logifit by Bizflow. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            <span>✓ ISO 27001 Certificado</span>
            <span>•</span>
            <span>✓ Cumplimiento SUNAFIL</span>
            <span>•</span>
            <span>✓ OSINERGMIN Aprobado</span>
            <span>•</span>
            <span>✓ Ley 29783</span>
            <span>•</span>
            <span>✓ 99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

