# Stuktur

In der Frontend Ordner findet man der code für Aufgabe 2 und in der API Ordner der code für Aufgabe 2:

# Aufgabe 1

- Am Anfang habe ich ein Test für das Service, die das generate() Method für dem entsprechende Logik prüft.

- Danach habe ich das Logik für FizzBuzzService und auch ein Rest Controller klasse hinzugefügt

- Zum Testen von der API Response: curl http://localhost:8080/fizzbuzz/15 | jq


# Aufgabe 2

- Ich habe am Anfang ein Interface für der Person hinzugefügt und test für das person.service geschreiben, dann habe ich die service Methode implementiert aber dann habe ich bemerkt dass, obwohl die implementierung richtg ist gab es trotzdem Probleme bei dem tests wegen die hardgecodete daten und weil Karma die nicht sequenziell ausführt, deswegen habe ich beforeEach und afterEach angepasst.
