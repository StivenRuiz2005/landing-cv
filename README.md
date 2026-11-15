# 🎮 Landing CV - Gaming Theme Portfolio

Portafolio personal con temática gaming/arcade para **Carlos Stiven Ruiz Rojas**, Full Stack Developer.

## 🚀 Características

### ✨ Concepto Creativo

- **Hero como pantalla de título** con efecto "PRESS START" parpadeante
- **Estadísticas de personaje** (Level, XP, ubicación)
- **HUD fijo** con navegación y barra de progreso de scroll
- **Temática de videojuego retro** con estética arcade/pixel
- **Efectos visuales gaming**: grid retro, partículas flotantes, glassmorphism
- **Easter Egg**: Código Konami (↑↑↓↓←→←→BA) para confeti de píxeles

### 🎨 Diseño

- **Paleta azul dominante**: cyan neón (#22D3EE), azul eléctrico (#2563EB), violeta (#8B5CF6)
- **Modo oscuro por defecto** con soporte de modo claro
- **Fuentes**:
  - Press Start 2P (títulos pixel/arcade)
  - Inter (texto corrido)
  - Space Grotesk (display)
- **Efectos**: glow neón, grid synthwave, glassmorphism, sombras pixel-art

### ♿ Accesibilidad (WCAG 2.2 AA)

- ✅ HTML semántico con ARIA labels
- ✅ Navegación completa por teclado
- ✅ Focus visible estilizado
- ✅ Contraste de color verificado (4.5:1 mínimo)
- ✅ Enlace "Saltar al contenido"
- ✅ Respeta `prefers-reduced-motion`
- ✅ Compatible con lectores de pantalla
- ✅ Controles táctiles de 44x44px mínimo
- ✅ Tema respeta `prefers-color-scheme`

### 📱 UX

- 📐 Mobile-first y totalmente responsive (320px → 4K)
- 🎯 Scroll suave con indicador de progreso
- 🔄 Navegación activa según sección visible
- 🎨 Transiciones suaves de tema sin flash
- ⚡ Optimizado para carga rápida

## 🛠️ Stack Tecnológico

- **Astro 7.4** - Framework web moderno
- **Tailwind CSS 4.3** - Utility-first CSS
- **TypeScript** - Type safety
- **CSS puro** - Animaciones nativas
- **No dependencias pesadas** - Solo lo esencial

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <tu-repo>
cd landing-cv

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🗂️ Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.astro          # Sección hero principal
│   │   └── HUD.astro            # Navegación/HUD fijo
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout base con meta tags
│   ├── pages/
│   │   └── index.astro          # Página principal
│   ├── styles/
│   │   └── global.css           # Estilos globales y utilidades
│   └── data/
│       ├── personal.json        # Información personal
│       └── skills.json          # Habilidades técnicas
├── astro.config.mjs             # Configuración Astro
├── tailwind.config.mjs          # Configuración Tailwind
└── tsconfig.json                # Configuración TypeScript
```

## 📝 Personalización

### 1. Información Personal

Edita `src/data/personal.json`:

```json
{
  "name": "Tu Nombre",
  "title": "Tu Cargo",
  "subtitle": "Tu especialidad",
  "location": "Tu Ubicación",
  "email": "tu@email.com",
  "github": "https://github.com/tuusuario",
  "bio": "Tu biografía..."
}
```

### 2. Habilidades

Edita `src/data/skills.json`:

```json
[
  {
    "name": "JavaScript",
    "level": 95,
    "category": "frontend",
    "xp": 9500
  }
]
```

### 3. Colores del Tema

Edita `tailwind.config.mjs` en la sección `theme.extend.colors`.

### 4. Contenido de Secciones

Edita `src/pages/index.astro` para modificar el contenido de cada sección.

## 🎯 Próximas Características (Parte 2)

Las siguientes secciones están marcadas como "PRÓXIMAMENTE":

- **Skills Section**: Árbol de habilidades con barras de XP animadas
- **Experience Section**: Timeline como "Quest Log" con misiones completadas
- **Projects Section**: Tarjetas estilo cartuchos con efecto 3D hover
- **Achievements**: Certificaciones como logros desbloqueados
- **Formulario de contacto**: Con validación accesible

## 🧪 Testing de Accesibilidad

### Checklist Manual

- [ ] Navegación completa con Tab/Shift+Tab
- [ ] Todos los enlaces son alcanzables por teclado
- [ ] Focus visible en todos los elementos interactivos
- [ ] El botón de tema funciona con teclado
- [ ] El menú móvil funciona con teclado
- [ ] Lectores de pantalla leen todo correctamente
- [ ] Las animaciones se desactivan con `prefers-reduced-motion`
- [ ] Contraste de colores pasa WCAG AA
- [ ] Imágenes tienen alt text apropiado
- [ ] Los headings siguen jerarquía correcta (h1 → h2 → h3)

### Herramientas Recomendadas

- **Lighthouse** (Chrome DevTools) - Auditoría completa
- **axe DevTools** - Extensión para accesibilidad
- **WAVE** - Evaluación web de accesibilidad
- **Lector de pantalla**: NVDA (Windows), VoiceOver (Mac), TalkBack (Android)

## 📊 Performance

### Objetivos

- Lighthouse Score: 95+ en todas las categorías
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

### Optimizaciones Implementadas

- ✅ Fuentes con `font-display: swap`
- ✅ CSS inlineado estratégicamente
- ✅ HTML comprimido
- ✅ Sin JavaScript pesado
- ✅ Lazy loading implícito de Astro

## 🎮 Easter Eggs

### Código Konami

Presiona la secuencia: **↑ ↑ ↓ ↓ ← → ← → B A**

Activa confeti de píxeles y muestra el logro "Master of Secrets".

## 🤝 Contribuir

Este es un proyecto personal, pero las sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es personal y está disponible bajo licencia MIT.

## 👨‍💻 Autor

**Carlos Stiven Ruiz Rojas**

- GitHub: [@StivenRuiz2005](https://github.com/StivenRuiz2005)
- GitLab: [@carlosruizrojas2005](https://gitlab.com/carlosruizrojas2005)
- Email: carlosruizrojas2005@gmail.com

---

<div align="center">
  <p>⚡ Hecho con Astro, Tailwind CSS y mucho ☕</p>
  <p>🎮 PRESS START TO CONTINUE 🎮</p>
</div>
