# Nextiweb Solutions — nextiwebsolution.com

> Le **laboratoire** créatif de [Nextiweb](https://nextiweb.ca), agence web à Montréal.
> 6 crénos sectoriels, 6 démos, méthode SEO + GEO + Marketing documentée.

## Concept du labo

Ce site n'est **pas un portfolio d'agence**. C'est un laboratoire :
- On prototype des concepts complets avant qu'un client demande
- Chaque créno regroupe une **famille de métiers** (pas un métier unique)
- Chaque créno contient sa **démo** (fictive mais transparente)
- La méthode est **documentée** (pas livrée clé en main)
- L'agence qui livre = [Nextiweb.ca](https://nextiweb.ca)

## Architecture

```
nextiwebsolusion/
├── index.html                              Accueil — labo de Nextiweb
├── le-laboratoire.html                     Manifeste — pourquoi ce site existe
├── methodologie.html                       Méthode SEO + GEO + Marketing
├── a-propos.html                           Khadija + lien fort Nextiweb.ca
├── 404.html                                Erreur custom
│
├── labo/
│   ├── index.html                          Galerie des 6 crénos
│   ├── dentaire-et-soins/                   🏥 Démo Studio Dentaire Belmont
│   │   ├── index.html                        Stratégie SEO + marketing + démo embed
│   │   └── demo/                             (à venir : démo Belmont migrée Hostinger)
│   ├── restaurant-et-cafe/                       🍽️ Démo Kintsugi Sushi Bar
│   ├── piscine-et-renovation/            💧 Démo Aqua Élite
│   └── chocolat-et-artisan/                🍫 Démo Maison Cacao
│
├── blog/
│   ├── index.html                          Blog (10 articles en placeholder)
│   └── articles/                           10 .md frontmatter + plan
│
├── demos/
│   ├── README.md                           Plan de migration Hostinger → labo
│   └── RUBAN-CONCEPT.md                    📌 Ruban "concept" à coller sur chaque démo
│
├── assets/
│   ├── css/styles.css                      Design system complet (30 sections)
│   ├── js/main.js                          Vanilla JS — nav, FAQ, reveal, glow
│   └── images/                             Logo, favicon (à compléter avec OG)
│
├── robots.txt                              Crawl autorisé pour bots IA (GEO/AEO)
├── sitemap.xml                             URLs labo + manifeste
├── .htaccess                               HTTPS, gzip, cache + 301 secteurs→labo
└── README.md                               ce fichier
```

## Les 6 crénos sectoriels

| # | Créno | Démo | Statut | ~Métiers couverts |
|---|---|---|---|---|
| 01 | 🏥 **Soins et services** | Studio Dentaire Belmont | ✅ Actif | Dentiste, ostéo, kiné, naturopathe, podologue, sage-femme, psychologue, massothérapeute, acupuncteur, nutritionniste |
| 02 | 🍽️ **Restaurant et café** | Kintsugi Sushi Bar | ✅ Actif | Resto, bistro, café, bar, pub, brasserie, traiteur événements |
| 03 | 💧 **Construction et rénovation** | Aqua Élite | ✅ Actif | Piscinier, paysagiste, entrepreneur général, rénovation, designer d'intérieur, ébéniste, architecte |
| 04 | 🍫 **Art et artisanat** | Maison Cacao | ✅ Actif | Chocolatier, fromager, épicerie fine, savonnier, atelier, torréfacteur, bijoutier |
| 05 | 🛍️ **E-commerce et marque locale** | Marque DTC fictive | ✅ Actif | Pure-player, créateur indépendant, mode locale, cosmétique artisanale, box mensuelle, subscription commerce |
| 06 | 🏠 **Services à domicile** | Entretien ménager fictif | ✅ Actif | Entretien ménager, aide aux aînés, plombier, électricien, déménagement, paysagiste d'entretien, nettoyage commercial |

Chaque page créno contient :
1. Hero "famille" avec multi-métiers explicités
2. Section **Pour qui** (chips métiers cliquables)
3. **5 enjeux communs** au secteur
4. **Démo illustrative** (mockup laptop + phone, lien live)
5. **Architecture SEO en 4 couches** (page mère / services / quartiers / blog)
6. **Marketing — 3 leviers** spécifiques (avec teaser "X autres leviers à découvrir")
7. **FAQ AEO** structurée FAQPage Schema (citables par les IA)
8. CTA Nextiweb.ca

## Stratégie backlinks (résumée)

- Tout sous **un seul domaine** : aucune perte de juice SEO
- Démos en **sous-dossier** `/labo/[créno]/demo/` (à migrer depuis Hostinger)
- **Ruban "Concept"** sur chaque démo avec lien retour vers le créno + Nextiweb.ca
- Maillage interne dense : ~25 liens croisés entre accueil, manifeste, méthode, crénos, démos
- Liens vers Nextiweb.ca limités à ~10-12 sur tout le site (anti sur-optimisation)

Voir [demos/RUBAN-CONCEPT.md](demos/RUBAN-CONCEPT.md) pour le snippet HTML/CSS à coller sur chaque démo lors de la migration.

## SEO + GEO + AEO

- ✅ `lang="fr-CA"`, balises `geo.region`, mentions Montréal/Québec/Canada
- ✅ Schema.org JSON-LD : `Organization`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `AboutPage`
- ✅ FAQ structurée (FAQPage) sur les 6 crénos — 7 questions × 6 = **42 questions citables par ChatGPT/Perplexity**
- ✅ Canonicals, Open Graph, Twitter Card sur toutes les pages
- ✅ `robots.txt` autorise GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, Applebot-Extended
- ✅ `sitemap.xml` complet
- ✅ Redirections 301 dans `.htaccess` pour préserver l'historique SEO de l'ancienne structure `/secteurs/`

## Performance cible

- **Lighthouse Mobile (4G simulé)** : 95+ Performance · 100 A11y · 100 BP · 100 SEO
- **LCP** < 2.0s · **CLS** < 0.05 · **INP** < 200ms
- Pas de framework, pas de bundler, pas de tracker tiers — fast by default
- Polices `font-display: swap`, JS `defer`, animations respectent `prefers-reduced-motion`

## Mise en ligne

1. Pousser le contenu de `nextiwebsolusion/` à la racine du domaine
2. Vérifier que `.htaccess` est interprété par l'hôte (Hostinger ✓, OVH ✓, Cloudflare → utiliser `_redirects` à la place)
3. Migrer les 6 démos depuis Hostinger vers `/labo/[créno]/demo/` (cf. [demos/README.md](demos/README.md))
4. Coller le ruban "Concept" sur chaque démo (cf. [demos/RUBAN-CONCEPT.md](demos/RUBAN-CONCEPT.md))
5. Mettre à jour les liens "Entrer dans la démo" sur les 6 pages crénos (URL Hostinger → `/labo/[créno]/demo/`)
6. Compléter `assets/images/` avec les OG (1200×630) listés dans `assets/images/README.md`
7. Soumettre `sitemap.xml` à Google Search Console et Bing Webmaster Tools
8. Tester sur https://opengraph.xyz, https://validator.schema.org, https://pagespeed.web.dev

## Liens

- Site live : https://nextiwebsolution.com (à venir)
- Agence parente : https://nextiweb.ca
- Brief original : `../BRIEF-NEXTIWEBSOLUTION.md`

---

**Construit avec rigueur à Montréal · NEQ 2272348204 · © 2026 Nextiweb**
