# Editor PDF: app para compartir

App web instalable (PWA) para editar PDF. Todo se procesa en el propio dispositivo: los archivos no se suben a ningún sitio. Las librerías PDF van dentro de `index.html`, así que **funciona sin Internet**.

## Qué hace

**Organizar**
- Combinar varios PDF y añadir fotos o imágenes como páginas.
- Reordenar las páginas (mantener pulsado y arrastrar, o con las flechas), girarlas y eliminarlas.
- Insertar páginas en blanco, invertir el orden u ordenar por archivo.
- Deshacer cualquier cambio.

**Editar** (con la lupa de cada página, en la vista grande)
- **Texto**: escribir en cualquier punto de la página.
- **Resaltar**: en amarillo, verde, rosa o azul.
- **Tapar zona**: un rectángulo blanco o negro. Solo oculta a la vista; el texto de debajo sigue dentro del archivo.
- **Firma**: dibujarla con el dedo o el Apple Pencil y colocarla. Se guarda en el dispositivo para reutilizarla.
- **Recortar** márgenes, en una página o en todas.
- Cualquier elemento añadido se puede mover, cambiar de tamaño o borrar.

**Herramientas**
- Añadir una marca de agua de texto («CONFIDENCIAL», «BORRADOR»…).
- Quitar marcas de agua. Detecta las que añaden los programas de PDF (anotaciones y contenido etiquetado como marca de agua). Si una no se detecta, se puede tapar con «Tapar zona». Úsalo solo con documentos propios o con permiso.
- Rellenar formularios PDF. Los campos quedan aplanados, es decir, como texto fijo.

**Guardar**
- Todo el documento o solo las páginas seleccionadas.
- Un único PDF, un PDF por página o dividido por rangos (por ejemplo, «1-3, 4-6, 7»). Si salen varios archivos, se descargan en un ZIP.
- Números de página opcionales («3», «3 de 10», «Página 3», «- 3 -»), en la posición que elijas.
- Título y autor del documento.

## Cómo compartirla

### Opción A: con un enlace (la mejor para iPad, iPhone y Android)
1. Desde un ordenador, entra en https://app.netlify.com/drop y crea una cuenta gratuita.
2. Arrastra la carpeta `EditorPDF-web` completa a la página.
3. Te dará una dirección del tipo `https://nombre.netlify.app`, que puedes renombrar en los ajustes. Esa dirección es lo que compartes.

Alternativa: GitHub Pages (crea un repositorio, sube estos archivos y activa Pages en Settings → Pages).

**Para instalarla en iPad o iPhone:** abre el enlace en Safari → Compartir → **Añadir a pantalla de inicio**. Se abre a pantalla completa, con su icono, y funciona sin conexión.
**En Android o en un ordenador:** abre el enlace y usa **Instalar app** en el navegador.

### Opción B: pasar el archivo (ordenadores)
Envía `index.html` por email, USB, etc. En Windows o Mac se abre con doble clic en el navegador y funciona sin Internet. En iPad o iPhone no se puede abrir desde la app Archivos: para esos dispositivos, usa la opción A.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa, con las librerías incluidas |
| `manifest.json` | Nombre, icono y colores para instalarla |
| `sw.js` | Permite que funcione sin conexión cuando se instala desde un enlace |
| `icon-*.png`, `apple-touch-icon.png`, `icon.svg` | Icono |

Para publicar una versión nueva, sube los archivos nuevos y cambia `editor-pdf-v2` por `v3` en `sw.js`.

Librerías incluidas: pdf.js (Apache 2.0), pdf-lib (MIT) y JSZip (MIT).
