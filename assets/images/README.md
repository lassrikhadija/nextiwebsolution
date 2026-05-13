# Images — Nextiweb Solutions

Liste des images à produire pour la mise en ligne complète.

## Conventions

- Format **WebP** par défaut, fallback JPG si nécessaire
- Largeur max **1920px** pour les hero, **1200px** pour les visuels secondaires, **600px** pour les vignettes
- Compression : **80-85%** de qualité (équilibre poids/qualité)
- Tous les noms en kebab-case, en anglais ou en français cohérent
- Ajouter `loading="lazy"` sauf pour le hero above-the-fold

## Liste à produire

### Open Graph (1200×630)
- [ ] `og-home.jpg` — Accueil
- [ ] `og-methodologie.jpg` — Méthodologie
- [ ] `og-about.jpg` — À propos
- [ ] `og-secteurs.jpg` — Index secteurs
- [ ] `og-dentiste.jpg` — Page dentiste
- [ ] `og-restaurant.jpg` — Page restaurant
- [ ] `og-piscine.jpg` — Page piscine
- [ ] `og-chocolatier.jpg` — Page chocolatier
- [ ] `og-ecommerce.jpg` — Page e-commerce artisan
- [ ] `og-blog.jpg` — Index blog

### Logo
- [ ] `logo.png` — Logo Nextiweb Solutions (transparent, 512×512)
- [ ] `logo-white.png` — Variante blanche
- [ ] `favicon.png` — 32×32 (le SVG inline du `<link rel="icon">` est déjà en place comme fallback)

### Hero (optionnel — actuellement en pur CSS/grille)
- [ ] `hero-pattern.svg` — Si on remplace la grille CSS par un visuel
- [ ] `hero-illustration.webp` — Visuel d'arrière-plan optionnel

### Vignettes secteurs (1200×800)
- [ ] `sector-dentiste.webp`
- [ ] `sector-restaurant.webp`
- [ ] `sector-piscine.webp`
- [ ] `sector-chocolatier.webp`
- [ ] `sector-ecommerce.webp`

### Photos pour l'À propos
- [ ] `khadija-portrait.webp` — Portrait de Khadija (avec consentement)
- [ ] `studio-workspace.webp` — Espace de travail / atmosphère

## Outils recommandés

- **Compression** : Squoosh (web), ImageOptim (Mac), Caesium (Windows)
- **Conversion WebP/AVIF** : `cwebp`, `cavif-rs`, ou Squoosh
- **Génération OG** : Figma + template, ou OpenGraph.xyz
- **Optimisation SVG** : SVGOMG

## Test

Avant mise en ligne, tester chaque OG sur :
- https://opengraph.xyz/
- https://www.opengraph.xyz/url/?url=https%3A%2F%2Fnextiwebstudio.ca%2F
