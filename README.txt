Jouons avec les Palindromes 

- Langage impos�: JavaScript

- Description exercice�: Petit algo qui d�tectera les dates palindromes. Un petit peu de complexit� et de r�flexion. L�apprenant.e est moins accompagn�e dans le pas � pas mais les indications restent explicites. 

- Objectif�: Manipulation et d�coupage de strings, parcours, cr�ation et modification de tableau, contr�le de donn�es. 

- Exercice Individuel

Les palindromes sont des mots ou des suites de caract�res qui se lisent dans les deux sens, comme les mots �radar� ou �kayak�. Le but de cet exercice est de d�tecter des dates palindromes, date que l�on peut donc lire dans les deux sens, sans prendre en compte le s�parateur de date (/). 


�tape 1 :

Cr�er une fonction �isValidDate� qui prend en param�tre une date en string et d�termine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
Tout au long de l�exercice, on assumera des ann�es sup�rieures � 999 et inf�rieures 9999 - autrement dit, l�ann�e sera syst�matiquement repr�sent�e sur 4 caract�res.

�tape 2 :
Cr�er une fonction �maxDaysInMonth� pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n�est pas valide, le mois de novembre ne contient que 30 jours).

�tape 3 :
Cr�er une fonction �isPalindrome� qui prend une date en string en param�tre et retourne un bool�en qui indique si la date est un palindrome. Si la date est invalide, retourner false.
Exemple de date palindrome: 11/02/2011. Les caract�res �/� ne sont pas pris en compte.

