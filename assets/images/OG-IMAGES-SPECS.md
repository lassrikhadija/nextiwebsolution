# 📸 Spécifications OG images — Nextiweb Studio

> Document de référence pour produire les 12 images Open Graph du site.

---

## 🔧 Spécifications techniques (toutes les images)

| Paramètre | Valeur |
|---|---|
| **Dimensions** | **1200 × 630 px** (ratio 1.91:1) — standard Facebook / LinkedIn / Twitter |
| **Format** | **JPG** (photos) ou **PNG** (texte/design) |
| **Poids cible** | < 300 KB par image (idéal < 200 KB) |
| **Résolution** | 72 DPI (web) |
| **Mode couleur** | RGB |
| **Safe area** | Marge intérieure de **60 px** sur les 4 côtés (certaines plateformes croppent les bords) |

---

## 🎨 Charte visuelle commune

### Couleurs
| Élément | Couleur | Code |
|---|---|---|
| Fond principal | Bleu nuit Nextiweb | `#0a0e1a` |
| Accent / éclat / logo | Vert Nextiweb | `#00e676` |
| Texte principal | Blanc cassé | `#f5f7fa` |
| Texte secondaire | Gris froid | `#94a3b8` |
| Sous-titres mono | Vert atténué | `#10b981` |

### Typographie
| Usage | Police | Poids | Taille indicative |
|---|---|---|---|
| Titre principal | **Inter** | Bold 700 | 64-80 px |
| Sous-titre | **Inter** | Medium 500 | 28-32 px |
| Eyebrow / Mono | **JetBrains Mono** | Medium 500 | 18-22 px (UPPERCASE, letter-spacing 0.1em) |
| URL | **JetBrains Mono** | Regular 400 | 16-18 px |

### Layout type (3 zones)

```
┌─────────────────────────────────────────────────┐
│                                                  │
│  [LOGO Nextiweb]            CRÉNO 01 · SOINS    │ ← Zone 1 (top): logo + eyebrow
│                                                  │
│                                                  │
│  Site web dentaire                              │
│  et professions de soins.                       │ ← Zone 2 (center): titre principal
│                                                  │
│  Démo Studio Dentaire Belmont                   │ ← Zone 2 bis: sous-titre
│                                                  │
│                                                  │
│  ────────────────                               │ ← Zone 3 (bottom): petite ligne accent
│  nextiwebstudio.ca                              │   + URL
│                                                  │
└─────────────────────────────────────────────────┘
```

### Touche visuelle
- **Fine grille décorative** en arrière-plan (très subtile, opacité 4-6 %) — comme sur le site
- **Glow vert subtil** en haut à droite (gradient radial transparent vers `#00e676` à 15 %)
- **Petit point vert pulsant** à gauche de l'eyebrow (comme dans le site)

---

## 📋 Les 12 images à produire pour `nextiwebstudio.ca`

### 1. `og-home.jpg` — Accueil

| Champ | Contenu |
|---|---|
| Eyebrow | `LE STUDIO CRÉATIF DE NEXTIWEB` |
| Titre | **Concepts web par secteur**, pour les PME du Québec. |
| Sous-titre | Une galerie d'explorations conçues pour votre métier. |
| URL | `nextiwebstudio.ca` |

### 2. `og-laboratoire.jpg` — Manifeste (`/le-laboratoire.html`)

| Champ | Contenu |
|---|---|
| Eyebrow | `MANIFESTE — LE LABORATOIRE` |
| Titre | **Pourquoi ce site existe.** Et les règles qu'on s'impose. |
| Sous-titre | 6 principes non négociables. |
| URL | `nextiwebstudio.ca/le-laboratoire` |

### 3. `og-methodologie.jpg` — Méthode (`/methodologie.html`)

| Champ | Contenu |
|---|---|
| Eyebrow | `MÉTHODE` |
| Titre | **SEO + GEO + Marketing.** Trois piliers. Zéro hasard. |
| Sous-titre | La méthode du studio Nextiweb. |
| URL | `nextiwebstudio.ca/methodologie` |

### 4. `og-about.jpg` — À propos (`/a-propos.html`)

| Champ | Contenu |
|---|---|
| Eyebrow | `LE STUDIO` |
| Titre | **Le laboratoire créatif** derrière Nextiweb. |
| Sous-titre | Par Khadija Ait Lassri · Montréal, QC |
| URL | `nextiwebstudio.ca/a-propos` |

### 5. `og-labo.jpg` — Galerie labo (`/labo/`)

| Champ | Contenu |
|---|---|
| Eyebrow | `LE LABO — 6 CRÉNOS SECTORIELS` |
| Titre | **6 crénos. 6 démos.** ~40 métiers couverts. |
| Sous-titre | Explorez votre famille de métiers. |
| URL | `nextiwebstudio.ca/labo` |

### 6. `og-blog.jpg` — Blog (`/blog/`)

| Champ | Contenu |
|---|---|
| Eyebrow | `LE JOURNAL DU STUDIO` |
| Titre | **Études de cas, stratégies, méthodes documentées.** |
| Sous-titre | Pour PME québécoises qui veulent comprendre avant d'investir. |
| URL | `nextiwebstudio.ca/blog` |

### 7. `og-cabinet-de-soins.jpg` — Créno 01 Soins

| Champ | Contenu |
|---|---|
| Eyebrow | `CRÉNO 01 · SOINS ET SERVICES` |
| Titre | **Site web dentaire et soins.** |
| Sous-titre | Démo Studio Dentaire Belmont · 12 métiers couverts |
| URL | `nextiwebstudio.ca/labo/dentaire-et-soins` |
| Couleur accent secondaire | Vert pastel (`#dcfce7`) en touche de fond |

### 8. `og-restauration.jpg` — Créno 02 Restauration

| Champ | Contenu |
|---|---|
| Eyebrow | `CRÉNO 02 · RESTAURANT ET CAFÉ` |
| Titre | **Site web restaurant et café.** |
| Sous-titre | Démo Kintsugi Sushi Bar · 9 métiers couverts |
| URL | `nextiwebstudio.ca/labo/restaurant-et-cafe` |
| Couleur accent secondaire | Or atténué (`#d4af37` à 30 %) |

### 9. `og-construction.jpg` — Créno 03 Construction

| Champ | Contenu |
|---|---|
| Eyebrow | `CRÉNO 03 · CONSTRUCTION ET RÉNOVATION` |
| Titre | **Site web piscine et rénovation.** |
| Sous-titre | Démo Aqua Élite · 9 métiers couverts |
| URL | `nextiwebstudio.ca/labo/piscine-et-renovation` |
| Couleur accent secondaire | Bleu eau (`#38bdf8` à 30 %) |

### 10. `og-artisan.jpg` — Créno 04 Artisan

| Champ | Contenu |
|---|---|
| Eyebrow | `CRÉNO 04 · ART ET ARTISANAT` |
| Titre | **Site web chocolat et artisan.** |
| Sous-titre | Démo Maison Cacao · 9 métiers couverts |
| URL | `nextiwebstudio.ca/labo/chocolat-et-artisan` |
| Couleur accent secondaire | Ambre (`#fbbf24` à 30 %) |

### 11. `og-ecommerce.jpg` — Créno 05 E-commerce

| Champ | Contenu |
|---|---|
| Eyebrow | `CRÉNO 05 · E-COMMERCE ET MARQUE LOCALE` |
| Titre | **Vendre en direct.** Sans 30 % à Amazon. |
| Sous-titre | Pour pure-players, marques DTC, créateurs québécois |
| URL | `nextiwebstudio.ca/labo/e-commerce-et-marque-locale` |
| Couleur accent secondaire | Violet/magenta (`#a78bfa` à 30 %) |

### 12. `og-services-domicile.jpg` — Créno 06 Services à domicile

| Champ | Contenu |
|---|---|
| Eyebrow | `CRÉNO 06 · SERVICES À DOMICILE` |
| Titre | **Dominez votre quartier.** SEO ultra-local. |
| Sous-titre | Entretien, plombier, électricien, aide aux aînés... |
| URL | `nextiwebstudio.ca/labo/services-a-domicile` |
| Couleur accent secondaire | Orange chaud (`#fb923c` à 30 %) |

---

## 📦 Pour `nextiweb.ca` (bonus, à appliquer séparément)

Recommandé pour la marque parente. Mêmes specs techniques (1200×630, dark, vert).

| Image | Page | Contenu suggéré |
|---|---|---|
| `og-home.jpg` | Accueil | **Agence web à Montréal** · Sites web, SEO, marketing pour PME |
| `og-services.jpg` | Services | **Création de site web** · Bilingue, SEO local, Loi 25 |
| `og-portfolio.jpg` | Portfolio | **Nos réalisations** · Sites livrés au Québec |
| `og-about.jpg` | À propos | **Khadija Ait Lassri** · Fondatrice de Nextiweb |
| `og-contact.jpg` | Contact | **Audit gratuit · Réponse 24h** · Montréal, QC |
| `og-tarifs.jpg` | Tarifs (si page) | **Prix clair, sans surprise** · Site dès 2 500 $ |

---

## 🛠️ Outils recommandés (du plus simple au plus pro)

### Option 1 — Canva (gratuit, 30 min total)
1. Créez un design **1200×630 px** (template Open Graph)
2. Appliquez la charte (fond `#0a0e1a`, vert `#00e676`, Inter Bold)
3. Faites 1 modèle propre
4. Dupliquez × 12, changez juste le texte
5. Exportez en JPG qualité 90

### Option 2 — Figma (gratuit, plus précis)
1. Créez un cadre 1200×630
2. Construisez le composant Master OG
3. Dupliquez en 12 variantes
4. Exportez en lot via plugin "Export All Frames as PNG/JPG"

### Option 3 — Service en ligne automatisé
- **Bannerbear** (API, ~$30/mois) — génère les 12 depuis une template
- **Placid** (API) — pareil
- **Pablo by Buffer** (gratuit) — basique mais rapide

### Option 4 — Je vous prépare un template HTML
Je peux écrire un fichier HTML qui rend les 12 OG images visuellement, vous l'ouvrez dans Chrome, vous faites "Save Page As Image" sur chaque. **30 min de mon côté.** Dites-moi si vous voulez.

---

## ✅ Checklist post-production

Une fois les 12 images créées :

- [ ] Toutes en **JPG ou PNG**, **1200×630 px**, **< 300 KB**
- [ ] Déposées dans `assets/images/` du repo
- [ ] Nommées exactement comme dans la colonne "fichier" (sensibles à la casse)
- [ ] Commit + push GitHub
- [ ] Test sur https://opengraph.xyz pour chaque URL du site
- [ ] Test sur https://cards-dev.twitter.com/validator (carte Twitter)
- [ ] Test sur LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/)
- [ ] Test en partageant un lien dans WhatsApp à soi-même

---

## 📋 Liste finale des fichiers à produire

```
assets/images/
├── og-home.jpg                    (Accueil)
├── og-laboratoire.jpg             (Manifeste)
├── og-methodologie.jpg            (Méthode)
├── og-about.jpg                   (À propos)
├── og-labo.jpg                    (Galerie labo)
├── og-blog.jpg                    (Blog)
├── og-cabinet-de-soins.jpg        (Créno 01)
├── og-restauration.jpg            (Créno 02)
├── og-construction.jpg            (Créno 03)
├── og-artisan.jpg                 (Créno 04)
├── og-ecommerce.jpg               (Créno 05)
└── og-services-domicile.jpg       (Créno 06)
```

**12 fichiers, ~3 MB total maximum.** Une fois en place, le partage social du site sera professionnel sur toutes les plateformes (LinkedIn, Twitter/X, WhatsApp, Slack, Discord, Messenger, Telegram, email avec preview).
