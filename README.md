# DentVision

Aplicacion web en React para una plataforma de salud dental y visual. El proyecto incluye inicio de sesion, pantalla principal, secciones de servicios, estadisticas, accesibilidad basica y layout responsive.

## Tecnologias

- React
- Vite
- CSS global con utilidades de Tailwind
- ESLint

## Requisitos

- Node.js instalado
- npm instalado

## Instalacion

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Luego abre la URL que muestra Vite en la terminal.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Funcionalidades actuales

- Login con validacion de correo y contrasena.
- Opcion para mostrar u ocultar la contrasena.
- Persistencia simple de sesion con `localStorage`.
- Pantalla Home con servicios de salud dental y visual.
- Barra de accesibilidad para alto contraste y cambio de tamano de fuente.
- Menu responsive para moviles.

## Mejoras pendientes recomendadas

- Conectar el login a un backend real.
- Crear flujo real para agenda de citas.
- Agregar rutas con `react-router-dom` cuando existan mas pantallas.
- Reemplazar textos de ejemplo por informacion real de la marca.
- Agregar pruebas automatizadas para login, autenticacion y navegacion.
