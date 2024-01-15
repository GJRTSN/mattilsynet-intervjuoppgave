<h1 align="center">Intervjuoppgave – Utviklere til mattilsynet.no</h1>

Det er ikke meningen at du skal bruke mer enn 2-3 timer på oppgaven om du har et fungerende utviklingsmiljøø som er oppe og kjører med Docker.

## FORBEREDELSER

Bygg image og start opp containeren definert i Dockerfile. Containeren inneholder en postgresdatabase og en enkel spring.boot java applikasjon som server ut ett enkelt API.

Bruk et egnet verktøy til å sjekke at du får svar fra API'et ved å kalle mot url: http://localhost:5000/produksjonsplass

Vær obs på at tjenesten ikke inneholder noen feilhåndtering og kaster en http - 500 om du spør om noe som ikke finnes.
Hvis port 5000 ikke er ledig kan den byttes ut med en valgfri port.


Start kommandoer:

<em>

unzip produksjonsplass-image.zip

cd produksjonsplass-image

docker build -t produksjonsplass .

docker create --name produksjonsplass-api -p5000:8080 produksjonsplass:latest

docker start produksjonsplass-api

#Kommando for å liste ut log fra api'et

docker exec -it produksjonsplass-api tail -f /tmp/api.out /tmp/api.err
</em>

## OPPGAVE

Lag en enkel front-end applikasjon som bruker API-ene vedlagt i produksjonsplass-image. Bruk gjerne et moderne front-end rammeverk som for eksempel Svelte eller React og TypeScript. Style etter eget ønske, men du trenger ikke legge alt for mye arbeid i det.

List ut produksjonsplassene fra endepunktet http://localhost:5000/produksjonsplass

Lag et skjema som sender inn informasjon om forflytning til endepunktet http://localhost:5000/registrerforflytning

Dyrehold (dyreholdId) skal være et valg med 4 valgmuligheter.

Produksjonssted skal populeres med valgene fra http://localhost:5000/produksjonsplass
