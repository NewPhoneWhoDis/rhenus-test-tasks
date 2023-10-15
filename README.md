# Stuktur

In der Frontend Ordner findet man der code für Aufgabe 2 und in der API Ordner der code für Aufgabe 2:

# Aufgabe 1

- Am Anfang habe ich ein Test für das Service, die das generate() Method für dem entsprechende Logik prüft.

- Danach habe ich das Logik für FizzBuzzService und auch ein Rest Controller klasse hinzugefügt

- Zum Testen von der API Response: curl http://localhost:8080/fizzbuzz/15 | jq


# Aufgabe 2

- Ich habe am Anfang ein Interface für der Person hinzugefügt und test für das person.service geschreiben, dann habe ich die service Methode implementiert aber dann habe ich bemerkt dass, obwohl die implementierung richtg ist gab es trotzdem Probleme bei dem tests wegen die hardgecodete daten und weil Karma die nicht sequenziell ausführt, deswegen habe ich beforeEach und afterEach angepasst.

- Nach der implementierung von tests habe ich angefangen die Komponenten zu entwickeln mit basic logik damit ich die dann schneller zusammenbringen kann um ein klares Bild zu schaffen.

- Wenn ich die Komponenten zusammengebracht habe, habe ich bemerkt dass man der Observable pattern hinzufügen damit die werte zwischen die Komponente besser vermittelt werden.

- Ich habe dann bemerkt dass ich bugs in der Create Person Komponent und in der Edit Person Komponent hatte und deswegen könnte ich, wenn ich irgendwas in der Form eingebe, die neue Werte auf die Liste nicht sehen.

- Nachdem ich diese bug behoben habe, habe ich bemerkt dass ich mein Leben einfacher machen kann für das Edit komponent und ich habe dass in der Details Komponent genestet und somit auch der Logik dort mit das Update von ein Person gefixt.

- Dann habe ich nochmal alles sauber gemacht, die Komponente wieder zusammenhinzugefügt und ein paar test gemacht.

- Dann habe ich auch die spec files angepasst damit die auch mit die Änderungen von die Komponenten und den Service zustimmen.

- Ich habe vergessen Delete Komponent hinzüfugen, also ich habe das schnell gemacht auf das gleiche prinzip wie das Edit button.





