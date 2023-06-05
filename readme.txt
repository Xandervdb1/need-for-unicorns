NEED FOR UNIS: UNDERGROUND

Het doel van de game is om op hol geslagen unicorns (besmet met het "Unid-19" virus) te overrijden met een motor.
Je bestuurt de motor met de omhoog en omlaag pijltjestoetsen. Op deze manier kan je omhoog en omlaag bewegen over de 3 rijvakken.
Wanneer je op spatie drukt wanneer je alle 3 de levens kwijt bent, kan je opnieuw proberen om een hogere score te halen.

Telkens als je een unicorn raakt, stijgt je score met 1 punt. Probeer een zo hoog mogelijke score te halen.
Telkens wanneer je een wegversperring raakt, verlies je een leven.

Als je graag sound hebt bij de game, kan je linksboven klikken op het geluidsicoontje, waardoor de game zichzelf unmute.
Dit heb ik zo gedaan omdat Google Chrome het niet mogelijk maakt om geluid af te spelen zonder eerst gebruikers-interactie te hebben.

NIET IN DE LES GEZIEN:
	Images, fonts en sound: 
		Op lijn 24 kan u de preload vinden van de 3 assets.
		Ik heb de p5js reference gebruikt voor de toepassing op te zoeken.

		Voor het gebruik van de images: lijn 323 t.e.m. lijn 337
		Voor het gebruik van de font: lijn 46
		Voor het gebruik van de sound: lijn 161, 174 en 181

	KeyPressed(): 
		Voor de besturing maak ik gebruik van toetsen die ingedrukt worden.
		Ik heb een toepassing gebruikt om de werking op te zoeken:
		https://editor.p5js.org/2sman/sketches/rkGp1alib

		Voor het gebruik van KeyPressed: lijn 394 t.e.m. lijn 413

	Gebruik van libraries: 
		Voor de hit detection en sound heb ik libraries moeten toevoegen, namelijk:
		p5.collide2d
		p5.sound (in de originele library staat een bug, ik heb de file voor de library gebruikt van een medestudent die samen met u
		deze bug heeft verholpen)

BRONNEN:
	Omdat de random functie van p5.js niet overal in het script wilt werken (zoals bevonden in de feedbacksessie is dit omdat ik de random functie aanroep
	voor de setup functie aangeroepen wordt) heb ik een externe functie gebruikt om random gehele getallen tussen 2 getallen te maken:
	
		https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
	
	Om uit te zoeken hoe ik een pagina kan laten refreshen door Javascript:

		https://www.quackit.com/javascript/javascript_refresh_page.cfm#:~:text=In%20JavaScript%2C%20you%20refresh%20the,server%20(instead%20of%20cache)

	Om de keyPressed werking uit te zoeken:

		https://editor.p5js.org/2sman/sketches/rkGp1alib

	Om een afbeelding te laten scrollen langs de achtergrond:
	
		https://editor.p5js.org/chjno/sketches/ByZlypKWM
