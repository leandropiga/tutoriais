# Tutoriais

Tutoriais práticos de programação com IA, para quem já programa. Site feito com
[Astro Starlight](https://starlight.astro.build), publicado em
<https://leandropiga.github.io/tutoriais/>.

## Estrutura

`src/content/docs/<assunto>/<tutorial>/NN-capitulo.mdx` — assunto → tutorial → capítulo.
Cada tutorial é um tópico próprio da barra lateral (`astro.config.mjs`).

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4321/tutoriais/
npm run build && npm run preview
```
