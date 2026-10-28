# Práctica 7 GitHub Actions

Caso práctico de CI/CD con una calculadora de descuentos escrita en JavaScript. La aplicación permite demostrar un despliegue exitoso en GitHub Pages y su bloqueo cuando falla una prueba.

**Sitio publicado:** https://nanobananadev.github.io/practica-7-github-actions/

## Ejecutar localmente

Requiere Node.js 22 o superior. No usa dependencias externas.

```bash
npm run build
npm test
```

Para abrir la aplicación, sirve la carpeta `dist/` con un servidor HTTP local, por ejemplo `npx serve dist` si dispones de ese paquete, o `python -m http.server 8000 --directory dist` si tienes Python. Visita `http://localhost:8000`.

## Pipeline

El archivo [`.github/workflows/ci.yml`](.github/workflows/ci.yml) se ejecuta con `push` y `pull_request` hacia `main`, además de manualmente. El job `verificar` compila, prueba y guarda `dist/` como artefacto. `preparar_paginas` recupera el sitio aprobado y lo empaqueta para GitHub Pages. `desplegar` publica el sitio. Los dos últimos jobs solo se ejecutan después de un `push` a `main` con pruebas aprobadas. Si una prueba falla, ambos quedan omitidos y la versión publicada anteriormente permanece disponible.

GitHub Pages está activado en este repositorio público con origen **GitHub Actions**. La URL del sitio aparece en el job `Desplegar en GitHub Pages`.

## Demostración

Ya se ejecutaron tres casos verificables: [cambio exitoso](https://github.com/NanoBananaDev/practica-7-github-actions/actions/runs/40789293617), [prueba fallida que omitió el despliegue](https://github.com/NanoBananaDev/practica-7-github-actions/actions/runs/40789416706) y [recuperación](https://github.com/NanoBananaDev/practica-7-github-actions/actions/runs/40789528591). Sigue [DEMO.md](DEMO.md) para repetirlos en vivo.
