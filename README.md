# Kasa - Application de location d'appartements

## Description

Kasa est une application web de location d'appartements entre particuliers développée avec React. Ce projet fait partie du parcours Développeur Web d'OpenClassrooms.

## Fonctionnalités

- **Page d'accueil** : Affichage de la liste des logements disponibles sous forme de cartes
- **Page de détail** : Informations détaillées sur un logement avec galerie d'images, description, équipements et notation
- **Page À Propos** : Présentation des valeurs de l'entreprise avec des sections pliables
- **Page 404** : Gestion des erreurs de navigation
- **Navigation** : Routage avec React Router
- **Responsive Design** : Compatible mobile et desktop

## Technologies utilisées

- **React** 19.1.0
- **React Router DOM** pour la navigation
- **SASS** pour les styles
- **Vite** comme bundler
- **Lucide React** pour les icônes

## Structure du projet

```
src/
├── assets/          # Images et données JSON
├── components/      # Composants réutilisables
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── Card.jsx
│   ├── Gallery.jsx
│   ├── Collapse.jsx
│   ├── Rating.jsx
│   └── Tag.jsx
├── pages/           # Pages de l'application
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Accommodation.jsx
│   └── NotFound.jsx
├── styles/          # Variables et mixins SASS
│   ├── variables.scss
│   └── mixins.scss
├── App.jsx          # Composant principal
└── main.jsx         # Point d'entrée
```

## Installation et lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- pnpm (ou npm/yarn)

### Installation
```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd kasa

# Installer les dépendances
pnpm install
```

### Développement
```bash
# Lancer le serveur de développement
pnpm run dev

# L'application sera accessible sur http://localhost:5173
```

### Production
```bash
# Construire l'application pour la production
pnpm run build

# Prévisualiser la version de production
pnpm run preview
```

## Spécifications techniques respectées

### Fonctionnalités
- ✅ Galerie d'images avec navigation circulaire
- ✅ Masquage des flèches si une seule image
- ✅ Sections Collapse fermées par défaut
- ✅ Interaction d'ouverture/fermeture des Collapse
- ✅ Page 404 pour les routes inexistantes
- ✅ Redirection vers 404 pour les IDs de logements invalides

### Architecture
- ✅ Composants modulaires et réutilisables
- ✅ Structure logique des fichiers
- ✅ Utilisation des événements React
- ✅ Itération sur les listes avec map()
- ✅ Utilisation des props entre composants
- ✅ Routage avec React Router

### Design
- ✅ Respect des maquettes Figma
- ✅ Design responsive (mobile et desktop)
- ✅ Utilisation de SASS pour les styles
- ✅ Variables et mixins pour la cohérence

## Données

L'application utilise un fichier JSON statique (`logements.json`) contenant les informations des logements :
- Titre et localisation
- Images (galerie)
- Description et équipements
- Informations sur l'hôte
- Tags et notation

## Auteur

Projet réalisé dans le cadre de la formation Développeur Web d'OpenClassrooms.

## Licence

Ce projet est à des fins éducatives uniquement.

