```
# lisez-moi
```
Bonjour messieurs,
Vous trouverez dans le dossier source toutes les fonctions demandées ainsi que le solver du Sudoku.
Il y a deux solvers dans le fichier Solver:
solver-simple: Qui calcule la solution d'une grille simple (sans spéculer la solution)
solver-cpx: Qui solve tous les types de grilles.
Dans le deuxieme solver vous pouvez changer de strategie de solving:
1- strat-first: qui utlise les valeurs de la premiere case libre (rapide mais peut-être mauvais dans certains cas)
2- strat-best: qui parcourt toute la grille et prend les valeurs de la case qui a le moins de variable possible.

Pour la question bonus (le generateur) un bouton est ajouté à l'interface graphique qui permet de génerer une grille de dificulté aleatoire.
N'hésitez pas à nous contacter pour plus d'informations.
Radi Zoubir 3802151
Keita Lamine 3520295






# mrsudoku

Ce dépôt contient les sources du squelette pour le projet MrSudoku de l'UE 3I020 "programmation déclarative" de la licence d'informatique de Sorbonne Université.

Les sources sont copyright (C) 2019 Frédéric Peschanski et ne doivent pas être diffusées en dehors du cours.

Il s'agit d'un projet développé avec Clojurescript en [re-frame](https://github.com/Day8/re-frame).

## Développement du projet

La compilation du code CSS se faire de la façon suivante :

```
lein garden once
```

Pour lancer l'application:

```
lein build
```

(il faut parfois faire un `lein clean` au préalable)

L'application va tourner "en live" dans le navigateur.

Après un petit peu d'attente, ouvrez la page  [http://localhost:9500](http://localhost:9500).

Vous pouvez éditer le code Clojurescript en direct, la page web sera mise à jour automatiquement.
(en cas de problème sérieus, vous pouvez toujours refaire `lein build`).

**Remarque** : il n'est pas évident de synchroniser l'éditeur de code avec le navigateur.

Les tests sont lancés dans la page [http://localhost:9500/figwheel-extra-main/auto-testing](http://localhost:9500/figwheel-extra-main/auto-testing)

La première tâche à effectuer est de valider ces tests à 100%, et normalement le jeu de Sudoku devendra jouable.


