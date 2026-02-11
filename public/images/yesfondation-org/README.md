# Images récupérées depuis https://yesfondation.org/

Ces images ont été téléchargées depuis le site officiel de la Fondation YeS pour être utilisées dans le projet.

## Contenu

- **Accueil** : bannières (Untitled-design-7/8), galerie (widgets_gallery_1-6), visuels (s-l1600.jpg)
- **Qui sommes-nous** : icônes (icon-box_01 à 04), photos équipe (about-us, M, lea-1, ath, colombe-2, etc.), Design-sans-titre-18
- **Contact** : photos (H5C4207-scaled, YANI1922-scaled)

## Utilisation dans le projet

Utilisez le chemin `/images/yesfondation-org/nom-du-fichier.ext` dans vos composants ou dans `next.config.mjs` si besoin.

Exemple :
```tsx
<Image src="/images/yesfondation-org/Untitled-design-8.png" alt="YeS Fondation" width={800} height={400} />
```

## Régénération

Pour récupérer à nouveau les images du site :
```bash
node scripts/fetch-yesfondation-images.mjs
```
