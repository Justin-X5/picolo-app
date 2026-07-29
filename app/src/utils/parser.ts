// ./src/utils/parser.ts

export function parseTaskText(rawText: string, players: string[]): string {
  // 1. Notfall-Check: Wenn gar keine Spieler da sind, geben wir den Text einfach so zurück
  if (!players || players.length === 0) {
    return rawText;
  }

  let parsedText = rawText;
  
  // 2. Wir machen eine Kopie unserer Spielerliste. 
  // Warum? Wenn wir gleich "Anna" für {p1} ziehen, löschen wir sie aus dieser Kopie heraus,
  // damit sie nicht sekundenspäter versehentlich auch noch für {p2} gezogen wird!
  let availablePlayers = [...players];

  // 3. Solange der Text noch einen Platzhalter (wie {p1} oder {p2}) enthält 
  // UND wir noch Spieler in unserer Kopie übrig haben:
  while (parsedText.includes('{p') && availablePlayers.length > 0) {
    
    // Eine zufällige Nummer bestimmen (z. B. 0, 1 oder 2)
    const randomIndex = Math.floor(Math.random() * availablePlayers.length);
    
    // Den Spieler an dieser Stelle aus unserem verfügbaren Array herausnehmen
    const selectedPlayer = availablePlayers.splice(randomIndex, 1)[0];

    // Den ersten gefundenen Platzhalter im Text durch den echten Namen ersetzen
    // (Das /\{p\d+\}/ sucht automatisch nach {p1}, {p2}, {p3} usw.)
    parsedText = parsedText.replace(/\{p\d+\}/, selectedPlayer);
  }

  // 4. Den fertig übersetzten Satz zurückgeben!
  return parsedText;
}