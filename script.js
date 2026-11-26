/* ==========================================================
   anantafr – script.js
   Trois usages seulement : menu mobile, décompte, vidéo du hero.
   Aucun cookie, aucun localStorage, aucune requête externe.
   ========================================================== */
(function () {
  "use strict";

  // Indique au CSS que JavaScript fonctionne (voir .js / .no-js dans style.css)
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  /* ---------- Menu mobile accessible ---------- */
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("menu");
  if (burger && menu) {
    var fermer = function () {
      menu.classList.remove("ouvert");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    };
    burger.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", String(ouvert));
      burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    });
    // Échap ferme le menu et rend le focus au bouton
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("ouvert")) { fermer(); burger.focus(); }
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) { fermer(); } });
  }

  /* ---------- Décompte jusqu'à la sortie ---------- */
  // PERSONNALISER : la date est dans l'attribut data-date du bloc .decompte (heure de Paris).
  var bloc = document.querySelector(".decompte");
  if (bloc) {
    var cible = new Date(bloc.getAttribute("data-date")).getTime();
    var champs = {
      j: bloc.querySelector("[data-j]"), h: bloc.querySelector("[data-h]"),
      m: bloc.querySelector("[data-m]"), s: bloc.querySelector("[data-s]")
    };
    var secours = bloc.querySelector(".decompte-secours");
    var deux = function (n) { return n < 10 ? "0" + n : String(n); };
    var tic = function () {
      var reste = cible - Date.now();
      if (isNaN(cible)) { return; }
      if (reste <= 0) {
        bloc.querySelector(".decompte-grille").style.display = "none";
        secours.style.display = "block";
        secours.textContent = "Ananta est disponible depuis le 15 janvier 2027.";
        clearInterval(minuteur);
        return;
      }
      var s = Math.floor(reste / 1000);
      champs.j.textContent = Math.floor(s / 86400);
      champs.h.textContent = deux(Math.floor((s % 86400) / 3600));
      champs.m.textContent = deux(Math.floor((s % 3600) / 60));
      champs.s.textContent = deux(s % 60);
    };
    var minuteur = setInterval(tic, 1000);
    tic();
  }

  /* ---------- Vidéo du hero : respecte « réduire les animations » ---------- */
  var heroVideo = document.querySelector(".hero-media video");
  if (heroVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroVideo.removeAttribute("autoplay");
    heroVideo.pause();
  }
})();
