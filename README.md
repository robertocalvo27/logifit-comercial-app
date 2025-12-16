# 🛡️ Logifit - Landing Page Comercial

Landing page comercial para **Logifit**, el sistema integral de prevención de accidentes laborales de Bizflow.

## 🎯 Propuesta de Valor

**Prevención de Accidentes en Tiempo Real**

Sistema integral que combina:
- 📱 Smartbands de detección de fatiga
- 📹 Cámaras inteligentes con IA
- 👥 Brigada preventiva 24/7
- 📊 Dashboard ejecutivo en tiempo real

## 📊 Resultados Comprobados

- ✅ **90% reducción** de accidentes (casos Cumbra y Sagitario)
- ✅ **156 accidentes** prevenidos en primer año
- ✅ **ROI positivo** en el primer trimestre
- ✅ **24/7** monitoreo continuo

## 🏭 Industrias Objetivo

1. **Minería** - Operaciones subterráneas y de superficie
2. **Construcción** - Obras civiles y proyectos de infraestructura
3. **Transporte** - Logística y transporte de carga
4. **Logística** - Almacenes y centros de distribución

## 🚀 Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS 3.4
- **Iconos**: Lucide React
- **Deploy**: Netlify (preparado)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Deploy a Netlify

### Opción 1: GitHub + Netlify (Recomendado)

1. **Push a GitHub:**
```bash
git remote add origin https://github.com/TU_USUARIO/logifit-landing.git
git add .
git commit -m "Initial commit: Logifit landing page"
git push -u origin main
```

2. **Conectar en Netlify:**
   - Log in → New site from Git
   - Conectar GitHub repo
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Deploy!

3. **Configurar dominio personalizado:**
   - Site settings → Domain management
   - Add custom domain: `logifit.bizflow.tech`
   - Configurar DNS CNAME en tu proveedor

### Opción 2: Netlify CLI

```bash
# Instalar CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

## 🎨 Estructura de Componentes

```
src/
├── components/
│   ├── HeroSection.tsx          # Hero principal con CTA
│   ├── BenefitsSection.tsx      # Beneficios destacados
│   ├── ProductsSection.tsx      # 3 productos del sistema
│   ├── FeaturesSection.tsx      # Características técnicas
│   ├── IndustriesSection.tsx    # Industrias objetivo
│   ├── CaseStudiesSection.tsx   # Casos de éxito (Cumbra, Sagitario)
│   ├── LeadFormSection.tsx      # Formulario de contacto/demo
│   └── Footer.tsx               # Footer completo
├── data/
│   └── logifit-data.ts          # Datos del producto (single source of truth)
└── App.tsx                      # Orquestador principal
```

## 📋 Datos del Producto

Todos los datos están centralizados en `src/data/logifit-data.ts`:

- ✅ Información de productos
- ✅ Beneficios y características
- ✅ Casos de éxito verificados
- ✅ Industrias y casos de uso
- ✅ Cumplimiento normativo
- ✅ Información de contacto

## 🔧 Configuración DNS (para logifit.bizflow.tech)

En tu proveedor de DNS (ej: Cloudflare, Route53, etc.):

```
Type: CNAME
Name: logifit
Value: [tu-sitio].netlify.app
TTL: Auto
```

## 📞 Información de Contacto

- **Email**: ventas@logifit.pe
- **Teléfono**: +51 1 234 5678
- **Dirección**: Av. Principal 123, Lima, Perú

## 🎯 Buyer Personas Principales

### 1. Gerente de SSOMA (Seguridad, Salud Ocupacional y Medio Ambiente)
- **Objetivo**: Reducir accidentes y cumplir normativas
- **Pain Points**: Alto índice de accidentes, auditorías complejas
- **Solución**: Sistema integral con documentación automática

### 2. Director de Operaciones
- **Objetivo**: Eficiencia operativa sin comprometer seguridad
- **Pain Points**: Costos de accidentes, pérdida de productividad
- **Solución**: ROI rápido, reducción de costos operativos

### 3. Gerente General / CEO
- **Objetivo**: Proteger al personal y la reputación empresarial
- **Pain Points**: Riesgo legal, imagen corporativa
- **Solución**: Cumplimiento automático, resultados comprobados

## 📈 Próximos Pasos

1. ✅ **Crear proyecto** (COMPLETADO)
2. ✅ **Configurar Tailwind** (COMPLETADO)
3. ✅ **Crear todos los componentes** (COMPLETADO)
4. ⏳ **Testing en localhost**
5. ⏳ **Push a GitHub**
6. ⏳ **Deploy a Netlify**
7. ⏳ **Configurar dominio logifit.bizflow.tech**

## 📄 Licencia

© 2024 Bizflow - Logifit. Todos los derechos reservados.

---

**Desarrollado por**: Bizflow Tech Team
**Proyecto**: Logifit Landing Page Comercial
**Versión**: 1.0.0
