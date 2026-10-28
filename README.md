# Práctica 7 GitHub Actions

Caso práctico de CI/CD con una calculadora de descuentos escrita en JavaScript. La aplicación permite demostrar una ejecución exitosa y el bloqueo de la entrega cuando falla una prueba.

## Ejecutar localmente

Requiere Node.js 22 o superior. No usa dependencias externas.

```bash
npm run build
npm test
```

Para abrir la aplicación, sirve la carpeta `dist/` con un servidor HTTP local, por ejemplo `npx serve dist` si dispones de ese paquete, o `python -m http.server 8000 --directory dist` si tienes Python. Visita `http://localhost:8000`.

## Pipeline

El archivo [`.github/workflows/ci.yml`](.github/workflows/ci.yml) se ejecuta con `push` y `pull_request` hacia `main`, además de manualmente. El job `verificar` compila, prueba y guarda `dist/` como artefacto. `preparar_paginas` recupera el sitio aprobado y lo empaqueta para GitHub Pages. `desplegar` publica el sitio. Los dos últimos jobs solo se ejecutan después de un `push` a `main` con pruebas aprobadas. Si una prueba falla, ambos quedan omitidos y la versión publicada anteriormente permanece disponible.

Para activar el despliegue, el repositorio debe ser público o tener un plan que permita GitHub Pages en repositorios privados. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**. Después, un push a `main` mostrará la URL en el job `Desplegar en GitHub Pages`.

## Demostración

Sigue [DEMO.md](DEMO.md) para publicar el proyecto, realizar dos pushes y mostrar en el panel Actions un caso exitoso y otro fallido.
