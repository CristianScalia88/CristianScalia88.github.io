# Cat Bubble Island — Sitio web

Landing page estática (sin build, sin frameworks) lista para GitHub Pages.

## Estructura

```
index.html          → página principal
privacy.html         → política de privacidad (placeholder — completar antes de publicar en las tiendas)
assets/css/style.css → estilos
assets/js/main.js    → burbujas animadas + menú móvil
assets/img/          → capturas del juego usadas en la web
```

## Publicar en GitHub Pages (gratis)

1. Creá un repositorio nuevo en GitHub (público), por ejemplo `catbubble-island-web`.
2. Subí **todo el contenido de esta carpeta** a la raíz del repositorio (no subas la carpeta contenedora, sino su contenido: `index.html` debe quedar en la raíz).
   ```bash
   cd catbubble-island-web
   git init
   git add .
   git commit -m "Landing page inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/catbubble-island-web.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, rama `main`, carpeta `/ (root)`. Guardá.
4. En un par de minutos tu sitio estará en:
   `https://TU-USUARIO.github.io/catbubble-island-web/`
5. La URL de política de privacidad para las tiendas de apps será:
   `https://TU-USUARIO.github.io/catbubble-island-web/privacy.html`

## Antes de publicar de verdad

- [ ] Completar `privacy.html` con el texto legal real (hay un banner amarillo marcando el borrador — quitalo cuando esté listo).
- [ ] Reemplazar los enlaces `href="#"` de los botones de Google Play / App Store por las URLs reales de las tiendas.
- [ ] Cambiar `hola@catbubbleisland.com` por tu email de contacto real.
- [ ] Si el nombre final del juego difiere de "Cat Bubble Island" (los GDD internos usan "CatBubble Islands"), ajustar el título en `index.html`, `privacy.html` y las etiquetas `<meta>`.
- [ ] Opcional: agregar Google Analytics / Firebase u otra analítica una vez definida la política de privacidad, para que ambas cosas queden alineadas.

## Notas de diseño

- Paleta y tipografías (Baloo 2 + Nunito) tomadas directamente de las capturas reales del juego (atardecer playero, acuarela, tarjetas color crema).
- Las burbujas flotantes del hero son puramente decorativas (CSS + un poco de JS) y respetan `prefers-reduced-motion`.
- Todo es HTML/CSS/JS plano — no requiere `npm install` ni build para funcionar en GitHub Pages.
