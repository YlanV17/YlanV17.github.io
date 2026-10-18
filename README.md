# Portfolio vidéo

Site portfolio statique en français, réalisé sans outil de compilation. Ouvre `index.html` dans un navigateur ou publie le dossier sur un hébergement statique comme GitHub Pages.

## Portfolio de Ylan Vastra

- Ajuster le texte de présentation, la formation, les logiciels et la période de stage selon ton parcours.
- Vérifier que les projets peuvent être partagés publiquement et renommer les projets si nécessaire.

Les vidéos originales restent dans le dossier racine et ne sont pas nécessaires pour publier le site. Les versions web optimisées utilisées par la galerie sont dans `assets/videos/`, et les aperçus sont dans `assets/posters/`. La liste des projets, leurs catégories et leurs médias sont définis dans `script.js`.

## Publication avec GitHub Pages

Le dépôt de site personnel prévu est `YlanV17.github.io`, pour obtenir l’adresse `https://ylanv17.github.io/`. Publie le contenu du dossier sur la branche `main`, puis dans **Settings → Pages**, choisis **Deploy from a branch**, `main` et `/(root)`. Le dépôt doit être public si le compte GitHub ne permet pas Pages sur les dépôts privés.

Le fichier `.gitignore` exclut les originaux lourds à la racine : seules les copies optimisées de `assets/videos/` sont publiées.
