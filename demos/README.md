# Démos — Nextiweb Studio

Ce dossier hébergera les démos sectorielles complètes (HTML/CSS/JS) une fois migrées depuis Hostinger.

## État actuel

Les démos sont actuellement hébergées sur des sous-domaines Hostinger temporaires. Liens à jour dans chaque page secteur (`/secteurs/*.html`).

## Plan de migration

| # | Secteur | Source actuelle | Cible |
|---|---|---|---|
| 01 | Dentiste (Studio Belmont) | `01-clinique-dentaire/` (parent) | `demos/dentiste/` |
| 02 | Restaurant | `01-restaurant-demo/` | `demos/restaurant/` |
| 03 | Piscines & spas | `03-Piscine-demo/` | `demos/piscine/` |
| 04 | Chocolatier | `04-chocolat-demo/` | `demos/chocolatier/` |
| 05 | E-commerce artisan | `05-ecommerce-artisan-demo/` | `demos/ecommerce-artisan/` |

## Étapes

1. Copier le contenu du dossier source dans `demos/[secteur]/`
2. Adapter les chemins relatifs (CSS, images, JS) pour le sous-dossier
3. Vérifier le canonical, OG, sitemap
4. Pousser et tester
5. Mettre à jour le lien "Voir la démo en direct" dans la page secteur correspondante
6. Mettre à jour le `sitemap.xml` racine pour ajouter les démos

## Convention

Chaque démo doit être un sous-site complet et autonome (HTML/CSS/JS vanilla), avec son propre domaine de marque fictive, mais utiliser la palette signature Nextiweb (vert #00e676) en accent discret pour rappeler la parenté avec le studio.
