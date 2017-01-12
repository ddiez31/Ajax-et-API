# Flying-ajax-io

## Part 1
* créer une page web
* quand l'utilisateur clique sur le bouton, on récupère la liste des 'places' sur le serveur à l'adresse 192.168.1.21:3000 et sur la route "/places"
* on affiche la liste de ces places à l'utilisateur
* on affiche le mot de passe de l'IoT en gros.

# Setup
Npm, git ....

* Workspace: 
	* index.html
	* app.js
	* .gitignore

Plateforme de développement :
	* Sublime Text
	* Chrome

Outils :
* npm 
* jquery
* moment
RIEN D'AUTRE

# Pomodoro tournant
Toutes les 25 minutes, vous changez de machine et continuez le code là où il en est.


API : 
* Places
	* domain : 192.168.1.21:3000
	* routes : /places
* OpenWeather
	* domain : http://openweathermap.org/
	* API Key : {s'inscrire ou nous demander }
* Heure
	* domain : http://www.timeapi.org/
* Adresse
	* domain : https://developers.google.com/maps/documentation/geocoding/start#geocoding-request-and-response-latitudelongitude-lookup
	* API Key : {s'inscrire ou nous demander }

* Itinéraire
	* domain : https://developers.google.com/maps/documentation/directions/intro
	* API Key : {s'inscrire ou nous demander }


# Part 2
Inclure les différentes features suivantes en se basant.

## Step 1 : Météo
Afficher la météo de Toulouse (température en °C et description).
Utilisez une requête vers OpenWeather.

## Step 2 : Heure
Afficher l'heure actuelle en France, l'heure de Tokyo et de San Francisco. 
Utiliser une requête vers TimeApi.
Vous pouvez utiliser moment pour rendre la manipulation des dates plus simples.

## Step 3 : Adresse
Récupérer la latitude et la longitude de Toulouse.
Utiliser une requête vers GoogleMaps Api (pas la peine de clé API si vous faites pas bcp de requêtes).

## Step 4 : Itinéraire
Récupérer le temps et la distance d'un itinéraire de Toulouse à St Gaudens.
Utiliser une requête vers GoogleMaps API.
