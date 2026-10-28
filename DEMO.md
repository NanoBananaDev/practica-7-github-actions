# Guion de demostración en vivo

## Preparación antes de exponer

1. Crea un repositorio vacío en GitHub, por ejemplo `practica-7-github-actions`. No añadas README ni `.gitignore` en GitHub: ya existen aquí.
2. Esta carpeta ya tiene Git inicializado en `main` y un commit preparado. Desde aquí ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/practica-7-github-actions.git
git push -u origin main
```

Si trabajas desde el ZIP en otra carpeta, primero inicializa el repositorio:

```bash
git init
git branch -M main
git add .
git commit -m "Configurar práctica de GitHub Actions"
git remote add origin https://github.com/TU_USUARIO/practica-7-github-actions.git
git push -u origin main
```

3. En **Settings → Pages → Build and deployment → Source**, elige **GitHub Actions**. Para una cuenta gratuita, usa un repositorio público. Si GitHub pide aprobar Actions, actívalo en el repositorio.
4. Abre la pestaña **Actions** y confirma que `CI y despliegue en GitHub Pages` termina en verde. Abre `Compilar y probar`, verifica las etapas y descarga `sitio-compilado`. Abre `Desplegar en GitHub Pages` y visita la URL publicada.

## Exposición de 16 minutos

**Minutos 0–5, teoría.** Explica CI/CD, disparadores, workflow, jobs, steps, runner y dependencia `needs`. Señala `.github/workflows/ci.yml`. Explica que el proyecto usa una entrega simulada, no un despliegue a producción.

**Minutos 5–8, cambio exitoso.** Cambia el valor inicial del precio en `public/index.html` de `50` a `60`, ejecuta `npm run build` y `npm test`, y publica:

```bash
git add public/index.html
git commit -m "Cambiar precio inicial de la demo"
git push
```

Muestra la nueva ejecución verde en Actions, el artefacto `sitio-compilado` y la página publicada con el nuevo precio inicial.

**Minutos 8–13, fallo controlado.** En `tests/calculadora.test.js`, cambia solo la expectativa `totalCentavos: 9000` por `totalCentavos: 8000`. El cálculo real sigue dando 9000. Ejecuta `npm test` para mostrar el fallo y publica:

```bash
git add tests/calculadora.test.js
git commit -m "Simular prueba fallida"
git push
```

Muestra el job `Compilar y probar` rojo, el mensaje de aserción en los logs y los jobs `Preparar artefacto para Pages` y `Desplegar en GitHub Pages` omitidos. El artefacto no se sube en esa ejecución porque el step de carga sigue a las pruebas. La página publicada conserva la versión anterior. GitHub puede enviar notificaciones según la configuración personal; el fallo siempre queda registrado en Actions.

**Minutos 13–14, recuperación.** Corrige `8000` a `9000`, ejecuta las pruebas y publica un nuevo commit. Muestra que la nueva ejecución queda verde.

**Minutos 14–16, preguntas.** Pregunta qué job se omitió, por qué y qué artefacto se entrega cuando la prueba pasa.

## Plan de contingencia

Si tarda la cola de GitHub, muestra el primer run exitoso ya preparado y ejecuta `npm test` localmente mientras llega el run fallido. Conserva abiertos el YAML, la prueba y la página Actions. No presentes una captura local como prueba de ejecución remota.
