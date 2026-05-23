# DentVision

Aplicacion web en React para una plataforma de salud dental y visual. El proyecto incluye inicio de sesion, pantalla principal, secciones de servicios, estadisticas, accesibilidad basica y layout responsive.

## Tecnologias

- React
- Vite
- CSS global
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

## Variables de entorno

Copia `.env.example` como `.env` cuando quieras cambiar la configuracion local.

```bash
VITE_API_URL=http://localhost:3000/api
VITE_USE_MOCK_API=true
```

Cuando el backend este listo, cambia:

```bash
VITE_USE_MOCK_API=false
```

La agenda enviara una peticion `POST` a:

```text
POST /appointments
```

Con esta estructura:

```json
{
  "patient": {
    "fullName": "Maria Gomez",
    "documentId": "1012345678",
    "phone": "300 123 4567",
    "email": "correo@ejemplo.com"
  },
  "appointment": {
    "service": "Odontologia general",
    "specialist": "Dra. Laura Medina - Odontologia",
    "date": "2026-05-12",
    "time": "09:30",
    "notes": "Observacion opcional"
  }
}
```

## Rutas principales

- `/login`: inicio de sesion, registro y recuperacion de contrasena.
- `/home`: pagina principal.
- `/servicios`: catalogo de servicios dentales y visuales.
- `/especialistas`: directorio de odontologos y optometras.
- `/contacto`: informacion y formulario de contacto.
- `/citas`: agenda de citas preparada para backend.

## Funcionalidades actuales

- Login con validacion de correo y contrasena.
- Opcion para mostrar u ocultar la contrasena.
- Registro y recuperacion de contrasena preparados para backend.
- Persistencia temporal de sesion con `localStorage`.
- Pantalla Home con servicios, especialistas y llamados a la accion.
- Barra de accesibilidad para alto contraste y cambio de tamano de fuente.
- Menu responsive para moviles.
- Pagina de agenda preparada para conectarse a backend.

## Mejoras pendientes recomendadas

- Conectar especialistas y servicios a datos del backend.
- Conectar el formulario de contacto a un backend real.
- Agregar rutas con `react-router-dom` cuando existan mas pantallas.
- Reemplazar textos de ejemplo por informacion real de la marca.
- Agregar pruebas automatizadas para login, autenticacion y navegacion.
