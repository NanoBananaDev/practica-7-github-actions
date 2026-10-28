# Guion de demostración en vivo

## Preparación antes de exponer

El [repositorio público](https://github.com/NanoBananaDev/practica-7-github-actions) y el [sitio en GitHub Pages](https://nanobananadev.github.io/practica-7-github-actions/) ya están publicados. La rama `main` queda con las pruebas aprobadas. Abre estas ejecuciones como evidencia de respaldo:

| Caso | Ejecución | Qué mostrar |
| --- | --- | --- |
| Cambio exitoso | [Run 2](https://github.com/NanoBananaDev/practica-7-github-actions/actions/runs/40789293617) | Tres jobs verdes y precio inicial de Bs 60 en el sitio. |
| Fallo controlado | [Run 3](https://github.com/NanoBananaDev/practica-7-github-actions/actions/runs/40789416706) | Una prueba roja, jobs de Pages omitidos y ningún artefacto nuevo. |
| Recuperación | [Run 4](https://github.com/NanoBananaDev/practica-7-github-actions/actions/runs/40789528591) | Cuatro pruebas aprobadas y nuevo despliegue. |

Antes de exponer, comprueba `git status` en esta carpeta, abre `.github/workflows/ci.yml`, `tests/calculadora.test.js` y el panel Actions. La presentación en la carpeta local `material/` tiene notas para el expositor.

## Exposición de 16 minutos

**Minutos 0–5, teoría.** Explica CI/CD, disparadores, workflow, jobs, steps, runner y dependencia `needs`. Señala `.github/workflows/ci.yml` y la URL de GitHub Pages.

**Minutos 5–8, cambio exitoso.** Cambia el valor inicial del precio en `public/index.html` de `60` a `70`, ejecuta `npm run build` y `npm test`, y publica:

```bash
git add public/index.html
git commit -m "Cambiar precio inicial durante la exposición"
git push
```

Muestra los tres jobs verdes, el artefacto `sitio-compilado` y el sitio actualizado. Si el run aún está en cola, utiliza el Run 2 como evidencia de respaldo.

**Minutos 8–13, fallo controlado.** En `tests/calculadora.test.js`, cambia solo `totalCentavos: 9000` por `totalCentavos: 8000`. El cálculo real sigue dando 9000. Ejecuta `npm test` para mostrar el fallo y publica:

```bash
git add tests/calculadora.test.js
git commit -m "Simular prueba fallida durante la exposición"
git push
```

Muestra el job `Compilar y probar` rojo, la diferencia entre 9000 y 8000 en los logs y los dos jobs de Pages omitidos. El sitio conserva la última versión aprobada. Si la cola tarda, utiliza el Run 3.

**Minutos 13–14, recuperación.** Corrige `8000` a `9000`, ejecuta `npm test`, crea otro commit y haz `git push`. Muestra el run verde o el Run 4 de respaldo.

**Minutos 14–16, preguntas.** Pregunta qué evento inició el pipeline, por qué se omitió el despliegue y qué versión quedó publicada tras el fallo.

## Cierre

Termina siempre con `main` en verde. El informe y la presentación están en la carpeta local `material/`, excluida del repositorio público. Completa los nombres del equipo en el informe antes de entregarlo.
