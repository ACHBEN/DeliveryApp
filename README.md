# DeliveryApp

Ce projet est une application de gestion des livraisons développée avec React Native, Expo Go et Node.js.

## Description

L'application de gestion des livraisons permet aux utilisateurs de gérer les commandes, les coursiers et les catégories de véhicules associées. Elle offre des fonctionnalités telles que l'affichage des commandes, la création de nouvelles commandes, la gestion des coursiers et la gestion des catégories. L'objectif principal de l'application est de faciliter le suivi et la gestion efficace des livraisons.

## Fonctionnalités principales

- Affichage des commandes existantes.
- Ajout, suppression et modification des commandes.
- Affichage des coursiers.
- Ajout et suppression des coursiers.
- Affichage des catégories de véhicules disponibles pour les coursiers.
- Ajout, suppression et modification des catégories.


## Prérequis

1. Installer Node.js et npm : [Télécharger Node.js](https://nodejs.org/)

2. Installer MariaDB pour la base de données : [Télécharger MariaDB](https://mariadb.org/)

## Installation du Backend

Pour exécuter le backend de l'application localement, suivez les étapes suivantes :

1. Clonez [ce projet](https://github.com/ACHBEN/DeliveryApp-Backend.git) sur votre machine locale.

2. Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances :
```npm install```

3. Configuration de la base de données :

- Créez un fichier `.env` dans le répertoire du backend.
- Complétez le fichier `.env` avec les informations de connexion à la base de données telles que l'hôte, le port, le nom de la base de données, le nom d'utilisateur et le mot de passe. Voici un exemple de contenu :

  ```
  DB_HOST=localhost
  DB_PORT=3306
  DB_DATABASE=take_away
  DB_USERNAME=root
  DB_PASSWORD=root
  ```

4. Lancez l'application en utilisant la commande suivante :
  ```npm start  ```

## Installation du Frontend

Pour exécuter le frontend de l'application localement, suivez les étapes suivantes :

1. Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances :

  ```npx expo start```

## API
Vous pouvez accèder à la documentation de l'API [ici](https://app.swaggerhub.com/apis/17236_1/coursiers_commandes_categories/1.0.0)
  
## Utilisation

Une fois l'application lancée, vous pouvez accéder à l'interface utilisateur en utilisant un émulateur ou en scannant le code QR avec l'application Expo Go sur votre appareil mobile.

Dans l'application, vous pouvez naviguer entre les différentes fonctionnalités en vous identifiant.

Une fois identifiés, vous aurez la possibilité de naviguer librement dans l'application.

**Remarque** : Lors de la première utilisation de l'application, vous pouvez créer un compte en fournissant un nom d'utilisateur et un mot de passe.

