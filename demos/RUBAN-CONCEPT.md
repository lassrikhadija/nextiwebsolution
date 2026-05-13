# 🧪 Ruban "Concept" — à coller sur chaque démo

Ce ruban s'affiche en haut de chaque démo migrée pour rendre **transparent** qu'il s'agit d'un concept Nextiweb (et non d'une vraie entreprise). Il est obligatoire pour respecter la règle #1 du manifeste : *démos transparentes*.

---

## 📍 Où le coller

À l'intérieur de chaque démo (`/labo/[créno]/demo/index.html` après migration), **immédiatement après `<body>`**, avant tout autre contenu visible.

Le ruban est sticky en haut, mince (40px), couleur signature Nextiweb. Il ne casse pas l'expérience visuelle de la démo et reste fermable (bouton ✕).

---

## 🧩 HTML à copier-coller

Adaptez **uniquement** le nom du créno et l'URL de retour dans les 2 endroits marqués `[À ADAPTER]`.

```html
<!-- 🧪 RUBAN CONCEPT NEXTIWEB — début -->
<div id="concept-ribbon" class="concept-ribbon" role="note">
  <span>
    🧪 <strong>CONCEPT</strong> — démonstration créée par
    <a href="https://nextiweb.ca" rel="noopener">Nextiweb</a>
    pour illustrer le créno
    <a href="https://nextiwebstudio.ca/labo/[À ADAPTER]/" rel="noopener">[À ADAPTER : nom du créno]</a>.
    Aucun service réel n'est offert.
  </span>
  <button type="button" class="concept-ribbon-close" aria-label="Fermer ce ruban" onclick="document.getElementById('concept-ribbon').hidden=true; localStorage.setItem('nws-ribbon-closed','1');">✕</button>
</div>
<script>
  if (localStorage.getItem('nws-ribbon-closed') === '1') {
    var r = document.getElementById('concept-ribbon'); if (r) r.hidden = true;
  }
</script>
<!-- 🧪 RUBAN CONCEPT NEXTIWEB — fin -->
```

### Mapping créno par démo

| Démo | URL du créno à coller | Texte créno |
|---|---|---|
| Studio Belmont (dentaire) | `https://nextiwebstudio.ca/labo/dentaire-et-soins/` | `Soins et services` |
| Kintsugi Sushi Bar (resto) | `https://nextiwebstudio.ca/labo/restaurant-et-cafe/` | `Restaurant et café` |
| Aqua Élite (piscine) | `https://nextiwebstudio.ca/labo/piscine-et-renovation/` | `Construction et rénovation` |
| Maison Cacao (chocolat) | `https://nextiwebstudio.ca/labo/chocolat-et-artisan/` | `Art et artisanat` |

---

## 🎨 CSS à inclure

Le CSS du ruban est **déjà dans `assets/css/styles.css` du site principal** (sections 28). Mais comme chaque démo est autonome avec ses propres styles, **il faut copier ce snippet CSS dans la démo** (dans son propre `<style>` ou fichier CSS) :

```css
.concept-ribbon {
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 16px;
  background: linear-gradient(90deg, #00b85a, #00e676);
  color: #0a0e1a;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  flex-wrap: wrap;
}
.concept-ribbon strong { font-weight: 700; }
.concept-ribbon a {
  color: #0a0e1a;
  text-decoration: underline;
  font-weight: 600;
}
.concept-ribbon-close {
  position: absolute;
  right: 8px;
  background: transparent;
  border: 0;
  color: #0a0e1a;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  padding: 0 8px;
  line-height: 1;
}
.concept-ribbon[hidden] { display: none; }
```

---

## ✅ Comportement attendu

- **Sticky** : reste en haut quand le visiteur scrolle
- **Fermable** : le visiteur peut le fermer avec ✕
- **Mémorisé** : si fermé, reste fermé (localStorage) — ne ré-apparaît pas à chaque visite
- **Accessible** : `role="note"`, `aria-label` sur le bouton de fermeture
- **Mobile-friendly** : se comporte bien sur petit écran (flex-wrap)
- **Léger** : pas de dépendance JS, fonctionne offline

---

## 🔍 Pourquoi c'est important

Sans ce ruban, vous risquez :
- **Confusion utilisateur** : un visiteur pense que Studio Belmont est un vrai cabinet et essaie de prendre RDV
- **Sanction Google** : Search peut considérer un site avec faux témoignages comme misleading content
- **Perte de confiance** : si un visiteur découvre tardivement que c'est une démo, il se sent trompé

Avec le ruban, vous transformez la transparence en **signature de votre marque**. C'est le détail qui rend Nextiweb différent.

---

## 📋 Checklist post-migration de chaque démo

- [ ] Démo migrée dans `/labo/[créno]/demo/`
- [ ] Ruban HTML collé après `<body>`
- [ ] CSS du ruban inséré dans le styles de la démo
- [ ] URL et nom du créno adaptés dans le ruban
- [ ] Liens de retour testés (Nextiweb.ca + créno)
- [ ] Fermeture du ruban testée (✕ + persistence localStorage)
- [ ] Affichage mobile vérifié (320px, 390px, 768px)
- [ ] Vérifier que les liens internes de la démo fonctionnent en sous-dossier
- [ ] Vérifier que le ruban reste sticky en haut au scroll
- [ ] Mettre à jour le lien "Entrer dans la démo" sur la page créno correspondante (de l'URL Hostinger vers `/labo/[créno]/demo/`)
