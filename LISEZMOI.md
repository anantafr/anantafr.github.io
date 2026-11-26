# anantafr : tutoriel complet, dans l'ordre

Site de fans non officiel pour la communauté Discord anantafr et le jeu Ananta.
Aucun framework, aucun cookie. Tu peux tout faire depuis le navigateur.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html`, `actualites.html`, `le-jeu.html`, `lore.html`, `communaute.html`, `mentions-legales.html` | Les 6 pages |
| `style.css` | Design (couleurs en haut du fichier) |
| `script.js` | Menu mobile, décompte, pause de la vidéo si « réduire les animations » |
| `sitemap.xml`, `robots.txt` | Référencement |
| `.nojekyll` | Dit à GitHub de publier les fichiers tels quels |
| `assets/video/` | `bande-annonce-fr.mp4` (16 Mo), `hero-loop.mp4` (boucle du hero), `poster.jpg` |
| `assets/img/` | Logo, captures de la bande-annonce, `image-partage.jpg` (aperçu de partage) |

---

## Étape 1 : vérifier le contenu (10 min)

Le contenu est déjà rempli. Relis-le avant la mise en ligne :

1. **`mentions-legales.html`** : éditeur « Takahiro », contact `ananta.france.fr@gmail.com`.
2. **Actus** (`index.html`, `actualites.html`) : chaque carte pointe vers une source (site officiel, Game Informer, GamesBeat, Wikipédia). Le chiffre de 17 millions de préinscrits date du 25 août 2026.
3. **`communaute.html`** : les règles sont une base générique. **Compare-les avec les règles réelles de ton serveur** et corrige.
4. **`lore.html`** : les détails (Lykaia, activités des villes, Hangzhou) viennent de la presse et sont attribués. Ils peuvent changer d'ici la sortie.

Ajouter une actu : copie un bloc `<article class="carte">…</article>`, colle-le en premier dans la liste, change date, titre, résumé et lien.

Réseaux : le compte X `@Ananta_France_` est déjà en place (pied de page, page Communauté, données structurées). Pour un autre réseau, copie la ligne `<li>` du pied de page dans chaque page.

Changer les couleurs : modifie les variables `--cyan`, `--rose`, `--nuit` en haut de `style.css`.

## Étape 2 : tester en local

1. Ouvre `index.html` par double-clic dans ton navigateur.
2. Vérifie : le décompte tourne, le menu mobile s'ouvre (réduis la fenêtre), la bande-annonce se lit, les liens fonctionnent.

## Étape 3 : créer le dépôt GitHub

1. Crée un compte sur github.com.
2. Clique sur **New repository**. Nom du dépôt : `anantafr` (ou `<ton-compte>.github.io`). Visibilité : **Public**. Crée-le.
3. Le site utilise ton domaine `https://anantafr.fr/` (déjà écrit dans les pages, le sitemap et robots.txt). Le fichier `CNAME` du dossier le déclare à GitHub.

## Étape 4 : envoyer les fichiers

Sans ligne de commande :

1. Dans le dépôt, clique sur **Add file → Upload files**.
2. Glisse tous les fichiers et le dossier `assets` (dézippe d'abord l'archive). Le dossier `assets` doit être envoyé avec son contenu.
3. Si GitHub refuse un envoi trop lourd, envoie `assets/video/` séparément. La limite est de 25 Mo par fichier en navigateur, et la vidéo fait 16 Mo.
4. Clique sur **Commit changes**.

Avec Git (option) :

```
git clone https://github.com/<ton-compte>/anantafr.git
# copie les fichiers dans le dossier, puis :
git add .
git commit -m "Mise en ligne du site"
git push
```

## Étape 5 : activer GitHub Pages

1. Dépôt → **Settings → Pages**.
2. Source : **Deploy from a branch**. Branche : `main`, dossier `/ (root)`. Enregistre.
3. Attends 1 à 3 minutes. Le site apparaît sur l'adresse GitHub par défaut.
4. Passe à l'étape 5 bis pour brancher `anantafr.fr`.

## Étape 5 bis : brancher anantafr.fr (domaine chez IONOS)

Deux méthodes. **La méthode A est recommandée** : gratuite, HTTPS automatique, mise à jour simple.

### Méthode A : GitHub Pages + DNS IONOS (gratuit)

1. **GitHub d'abord** : dépôt → Settings → Pages → *Custom domain* → saisis `anantafr.fr` → Save. (Si GitHub t'a déjà créé le fichier `CNAME`, c'est normal.)
2. **IONOS** : connecte-toi sur ionos.fr → **Domaines & SSL** → clique sur `anantafr.fr` → onglet **DNS** (« Paramètres DNS »).
3. Supprime les enregistrements `A` et `AAAA` existants pour `@` (ils pointent vers la page de parking IONOS). Garde les `MX` et `TXT` si tu utilises une adresse mail @anantafr.fr.
4. Ajoute **4 enregistrements A**, nom d'hôte `@` (ou vide), TTL par défaut :
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. Ajoute **4 enregistrements AAAA** (IPv6), nom d'hôte `@` :
   - `2606:50c0:8000::153`
   - `2606:50c0:8001::153`
   - `2606:50c0:8002::153`
   - `2606:50c0:8003::153`
6. Ajoute **1 enregistrement CNAME** : nom d'hôte `www`, valeur `<ton-compte-github>.github.io` (sans `https://`).
7. N'utilise **pas** de DNS « wildcard » (`*`) : GitHub le déconseille (risque de détournement).
8. Attends la propagation (de quelques minutes à 24 h). Vérifie avec dnschecker.org en saisissant `anantafr.fr`.
9. Retourne sur GitHub → Settings → Pages : quand la coche DNS est verte, active **Enforce HTTPS**.
10. Teste `https://anantafr.fr/` et `https://www.anantafr.fr/` (la seconde doit rediriger vers la première).

Si tu as activé « IONOS Domain Connect » ou des redirections dans IONOS, désactive-les pour ce domaine : elles entrent en conflit avec les enregistrements ci-dessus.

### Méthode B : héberger les fichiers chez IONOS

Un nom de domaine seul ne contient pas de site. Il te faut un **pack d'hébergement web** IONOS (ou un pack « domaine + hébergement ») relié à `anantafr.fr`.

1. Dans ton espace IONOS, vérifie que le domaine est bien **rattaché à ton hébergement** (menu Hébergement → ton pack → domaines).
2. Dézippe `anantafr-site.zip` sur ton ordinateur.
3. Récupère tes accès **SFTP/FTP** (espace client IONOS, rubrique SFTP & SSH de ton pack), puis connecte-toi avec FileZilla (hôte, identifiant, mot de passe fournis par IONOS).
4. Envoie **le contenu** du dossier (pas le dossier lui-même) dans le dossier racine du site, généralement `/`. `index.html` doit se trouver directement à la racine.
5. Supprime la page par défaut d'IONOS (souvent `index.php` ou `index.html` d'attente) si elle est présente. Tu peux aussi supprimer `CNAME` et `.nojekyll`, inutiles ici.
6. Active le **certificat SSL** gratuit inclus dans ton pack (Domaines & SSL → SSL) pour que le site s'ouvre en `https://`.
7. Pour forcer le HTTPS et l'adresse sans `www`, crée un fichier `.htaccess` à la racine :

```
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^ https://anantafr.fr%{REQUEST_URI} [L,R=301]
```

8. Pour mettre à jour le site, renvoie simplement les fichiers modifiés.
9. Dans la méthode B, ne touche pas aux enregistrements DNS : IONOS les règle seul quand le domaine est rattaché au pack.

## Étape 6 : vérifier en ligne

- Ouvre chaque page, sur ordinateur et sur téléphone.
- Teste `https://anantafr.fr/sitemap.xml` et `https://anantafr.fr/robots.txt`.
- Teste l'aperçu de partage en collant l'adresse dans un message Discord.

## Étape 7 : Google Search Console

1. Va sur search.google.com/search-console et clique sur **Ajouter une propriété**.
2. Choisis **Préfixe d'URL** et saisis `https://anantafr.fr/`.
3. Validation : choisis **Balise HTML**. Google te donne une ligne `<meta name="google-site-verification" content="…">`.
4. Colle cette ligne dans le `<head>` de `index.html`, juste avant `</head>`. Envoie le fichier sur GitHub, attends 1 minute, puis clique sur **Valider**.
5. Menu **Sitemaps** : saisis `sitemap.xml` et envoie.
6. Menu **Inspection de l'URL** : colle `https://anantafr.fr/`, puis **Demander une indexation**. Répète pour les autres pages.
7. L'indexation prend de quelques jours à quelques semaines. C'est normal.

## Étape 8 : faire monter le référencement

- Mets le lien du site dans la description et le salon d'accueil de ton Discord.
- Publie régulièrement de nouvelles actus (étape 1), avec de vraies sources.
- Fais citer le site sur des forums, wikis et réseaux de fans.
- Garde un seul `h1` par page et des titres uniques si tu ajoutes des pages. Ajoute-les aussi dans `sitemap.xml`.
- Mets à jour la date `lastmod` du sitemap quand tu modifies une page.

## Vidéos : ce qui est en place

- **Hero** : boucle muette de 12 s (`hero-loop.mp4`, 2 Mo). Elle se met en pause si le visiteur a activé « réduire les animations ».
- **Bande-annonce** : chargée seulement au clic (`preload="none"`), pour garder le site rapide. Version 720p allégée à 16 Mo.
- **Sous-titres** : ajoute un fichier `.vtt` et cette ligne dans `<video>` : `<track kind="subtitles" src="assets/video/sous-titres.vtt" srclang="fr" label="Français" default>`.
- **Remplacer une vidéo** : garde le même nom de fichier. Pour alléger : `ffmpeg -i entree.mp4 -vf scale=1280:-2 -b:v 900k -c:a aac -b:a 96k -movflags +faststart sortie.mp4`.

## Points d'attention

- **Droits** : le logo, les captures et la bande-annonce appartiennent à leurs ayants droit. Ils sont utilisés ici à ta demande, à titre de fan. Retire-les sur demande des éditeurs (procédure prévue dans les mentions légales).
- **Fait à vérifier** : la monétisation sans gacha est présentée « d'après la presse ». Les textes du site ne contiennent aucune information absente de ta liste.
- **Faits** : les informations hors de ta liste initiale viennent de sources citées dans les pages. Relis-les avant publication.
- **Pas de cookies** : aucune police, statistique ou script externe. Tu n'as donc pas de bandeau cookies à afficher. Si tu ajoutes un jour un outil de statistiques, mets à jour les mentions légales.
