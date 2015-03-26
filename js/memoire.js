var stringnum = '' ;
var level = 1      ;
var indiceparse = 0; 

var francais = false;
var titrefrench = "Améliorez votre mémoire";
var titreenglish = "Improve your memory";
var buttonplayfrench = "JOUER";
var buttonplayenglish = "PLAY";
var levelfrench = "Niveau: ";
var levelenglish = "Level: ";
var howtoenglish = "Just click 'PLAY' to start game." + '\n' + "The purpose is to memorize as much as you can the longest sequence of numbers." + '\n\n' + "Click buttons on the virtual keyboard to reproduce the sequence." + '\n\n' + "Enjoy! ";
var howtofrench  = "Appuyer sur 'JOUER' pour démarrer le jeu." + '\n' + "Le but est de mémoriser la plus longue séquence de chiffres possible." + '\n\n' + "Cliquer sur les boutons pour reproduire la séquence." + '\n\n' + "Bon courage! ";
var felicitationsfrench = "Félicitations ! Nouvelle séquence...";
var felicitationsenglish = "Congratulations ! New sequence...";
var yourturnfrench = "C'est à vous...";
var yourturnenglish = "Your turn...";
var youlosefrench = "Vous avez perdu ! Cliquer sur JOUER pour recommencer...";
var youloseenglish = "You lose ! Click PLAY to restart...";

function english()
{
   t = document.getElementById("titre");
   t.innerHTML = titreenglish;
   bp = document.getElementById("butplay");
   bp.innerHTML = buttonplayenglish;
   n = document.getElementById("gamelevel");
   n.innerHTML = levelenglish + level;
   francais = false;
} 

function french()
{
   t = document.getElementById("titre");
   t.innerHTML = titrefrench;
   bp = document.getElementById("butplay");
   bp.innerHTML = buttonplayfrench;
   n = document.getElementById("gamelevel");
   n.innerHTML = levelfrench + level;
   francais = true;
} 

function activatebuttons()
{
   but0 = document.getElementById("0");
   but0.disabled = false;
   but1 = document.getElementById("1");
   but1.disabled = false;
   but2 = document.getElementById("2");
   but2.disabled = false;
   but3 = document.getElementById("3");
   but3.disabled = false;
   but4 = document.getElementById("4");
   but4.disabled = false;
   but5 = document.getElementById("5");
   but5.disabled = false;
   but6 = document.getElementById("6");
   but6.disabled = false;
   but7 = document.getElementById("7");
   but7.disabled = false;
   but8 = document.getElementById("8");
   but8.disabled = false;
   but9 = document.getElementById("9");
   but9.disabled = false;
}

function desactivatebuttons()
{
   but0 = document.getElementById("0");
   but0.disabled = true;
   but1 = document.getElementById("1");
   but1.disabled = true;
   but2 = document.getElementById("2");
   but2.disabled = true;
   but3 = document.getElementById("3");
   but3.disabled = true;
   but4 = document.getElementById("4");
   but4.disabled = true;
   but5 = document.getElementById("5");
   but5.disabled = true;
   but6 = document.getElementById("6");
   but6.disabled = true;
   but7 = document.getElementById("7");
   but7.disabled = true;
   but8 = document.getElementById("8");
   but8.disabled = true;
   but9 = document.getElementById("9");
   but9.disabled = true;
}

function getnumber()
{  
   return ( parseInt (Math.floor((Math.random() * 10)) ) ); 
}

function concatnum()
{
   temp = '';
   stringnum = '';
   
   for(i=0; i<level; i++)
   {
      temp = getnumber();
      stringnum = stringnum + temp;
   }
   if(francais) alert(stringnum + "\n" + yourturnfrench)
      else alert(stringnum + "\n" + yourturnenglish);
}

function checkuser(num)
{
   if(num == stringnum[indiceparse])
   {
      indiceparse++;
   }
   else
   {
         niveau = document.getElementById("gamelevel");

      if(francais) 
      {
		 alert(youlosefrench);
         niveau.innerHTML = "Niveau: 1";
	  }	  
      else
      {
         alert(youloseenglish);
         niveau.innerHTML = "Level: 1";
      }
	  desactivatebuttons();
   }
	  
   if(indiceparse == stringnum.length)
   {
      if(francais) alert(felicitationsfrench);
         else alert(felicitationsenglish);
	  level = level + 1;
	  indiceparse = 0;
	  niveau = document.getElementById("gamelevel");
	  if(francais) niveau.innerHTML = "Niveau: " + level;
	     else niveau.innerHTML = "Level: " + level;
      concatnum();
   }
}

function howtoplay()
{
   if (francais) alert(howtofrench);
      else alert(howtoenglish);
}

function credits()
{
   alert("Author/Auteur: Stan Mandon" + '\n' + "Mail: smandon@hotmail.com" + '\n' + "2015");
}

function initgame()
{
   activatebuttons();
   level = 1;
   indiceparse = 0;
   stringnum = '';
   niveau = document.getElementById("gamelevel");
   if(francais) niveau.innerHTML = "Niveau: " + level;
      else niveau.innerHTML = "Level: " + level;
}

function play()
{
   initgame();
   concatnum();
}



