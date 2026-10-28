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

El archivo [`.github/workflows/ci.yml`](.github/workflows/ci.yml) se ejecuta con `push` y `pull_request` hacia `main`, además de manualmente. El job `verificar` compila, prueba y guarda `dist/` como artefacto. El job `entregar` depende de `verificar` y solo se ejecuta después de un `push` a `main` con todas las pruebas aprobadas. La entrega es **simulada**: registra el resultado en el resumen del workflow y deja un artefacto descargable; no publica en un servidor externo.

## Demostración

Sigue [DEMO.md](DEMO.md) para publicar el proyecto, realizar dos pushes y mostrar en el panel Actions un caso exitoso y otro fallido.
