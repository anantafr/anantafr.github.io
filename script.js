// Menu mobile
var b=document.querySelector('.burger'),n=document.getElementById('menu');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('ouvert');b.setAttribute('aria-expanded',o);});}
// Décompte jusqu'à la sortie (15 janvier 2027)
(function(){
  var j=document.getElementById('cd-j');if(!j)return;
  var cible=new Date('2027-01-15T00:00:00').getTime();
  function maj(){
    var d=cible-Date.now();
    if(d<=0){document.getElementById('decompte').innerHTML='<p class="decompte-titre">Ananta est disponible !</p>';return;}
    var s=Math.floor(d/1000);
    j.textContent=Math.floor(s/86400);
    document.getElementById('cd-h').textContent=String(Math.floor(s%86400/3600)).padStart(2,'0');
    document.getElementById('cd-m').textContent=String(Math.floor(s%3600/60)).padStart(2,'0');
    document.getElementById('cd-s').textContent=String(s%60).padStart(2,'0');
  }
  maj();setInterval(maj,1000);
})();
