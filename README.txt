Jouons avec les Palindromes 

- Langage imposé : JavaScript

- Description exercice : Petit algo qui détectera les dates palindromes. Un petit peu de complexité et de réflexion. L’apprenant.e est moins accompagnée dans le pas à pas mais les indications restent explicites. 

- Objectif : Manipulation et découpage de strings, parcours, création et modification de tableau, contrôle de données. 

- Exercice Individuel

Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens, comme les mots “radar” ou “kayak”. Le but de cet exercice est de détecter des dates palindromes, date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/). 


Étape 1 :

Créer une fonction ‘isValidDate’ qui prend en paramètre une date en string et détermine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
Tout au long de l’exercice, on assumera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

Étape 2 :
Créer une fonction ‘maxDaysInMonth’ pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours).

Étape 3 :
Créer une fonction ‘isPalindrome’ qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.
Exemple de date palindrome: 11/02/2011. Les caractères ’/’ ne sont pas pris en compte.

