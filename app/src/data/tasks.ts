import { Task } from '../types/game';
export const CALIENTE_TASKS: Task[] = [
  // ==========================================
  // --- 1. ACTION (Sofortige Aufgaben) ---
  // ==========================================
  {
    id: 'cal-act-1',
    text: '{p1}, setze dich bis zur nächsten Runde auf den Schoß von {p2} – oder trinke 3 Schlücke!',
    type: 'action',
    sips: 3,
  },
  {
    id: 'cal-act-2',
    text: '{p1}, gib {p2} einen sanften Kuss auf die Wange, den Nacken oder trinke sofort 4 Schlücke!',
    type: 'action',
    sips: 4,
  },
  {
    id: 'cal-act-3',
    text: '{p1}, mache der Person in der Gruppe, die du am attraktivsten findest, ein ernstgemeintes, sexy Kompliment.',
    type: 'action',
    sips: 2,
  },
  {
    id: 'cal-act-4',
    text: '{p1}, lass dir von {p2} einen Eiswürfel oder ein kaltes Glas langsam über den Nacken streichen.',
    type: 'action',
    sips: 3,
  },
  {
    id: 'cal-act-5',
    text: '{p1}, du musst ein Kleidungsstück (kein Schmuck, keine Schuhe) ausziehen oder dein Glas komplett austrinken!',
    type: 'action', // Hier nutzen wir absichtlich KEIN sips, da es "EX oder ausziehen" ist!
  },
  {
    id: 'cal-act-6',
    text: '{p1}, verrate der Gruppe dein geheimes Turn-On im Schlafzimmer – oder trinke 5 Schlücke aus Scham!',
    type: 'action',
    sips: 5,
  },
  {
    id: 'cal-act-7',
    text: '{p1}, gib {p2} eine 30-sekündige Nacken- oder Schultermassage. Halte dabei Augenkontakt mit der Gruppe.',
    type: 'action',
    sips: 3,
  },
  {
    id: 'cal-act-8',
    text: '{p1}, flüstere {p2} das Schmutzigste ins Ohr, das dir einfällt. Wenn {p2} rot wird oder lacht, trinkt er/sie 3 Schlücke!',
    type: 'action',
    sips: 3,
  },
  {
    id: 'cal-act-9',
    text: '{p1}, beise dir sanft auf die Unterlippe und schau {p2} für 5 Sekunden extrem verführerisch an.',
    type: 'action',
    sips: 2,
  },
  {
    id: 'cal-act-10',
    text: '{p1}, zeige der Gruppe das letzte Bild auf deinem Handy oder trinke zur Strafe 4 Schlücke.',
    type: 'action',
    sips: 4,
  },
  {
    id: 'cal-act-11',
    text: '{p1}, trinke so viele Schlücke, wie du heute schon Menschen geküsst oder umarmt hast (Minimum 1 Schluck!).',
    type: 'action', // Dynamische Anzahl, daher kein sips-Badge!
  },
  {
    id: 'cal-act-12',
    text: '{p1}, tausche dein Oberteil mit {p2} für die nächsten 3 Runden oder ihr beide trinkt 4 Schlücke!',
    type: 'action',
    sips: 4,
  },

  // ==========================================
  // --- 2. DUELL (Zweikämpfe) ---
  // ==========================================
  {
    id: 'cal-due-1',
    text: '{p1} und {p2}: Schaut euch tief in die Augen. Wer als Erstes lacht, wegschaut oder blinzelt, trinkt 3 Schlücke!',
    type: 'duel',
    sips: 3,
  },
  {
    id: 'cal-due-2',
    text: '{p1} und {p2}: Vergleicht eure Hände. Wer die kleineren Hände hat, muss die Hände von {p2} 10 Sekunden lang halten.',
    type: 'duel',
    sips: 2,
  },
  {
    id: 'cal-due-3',
    text: '{p1} und {p2} müssen einen Eiswürfel oder eine Karte nur mit den Lippen von Mund zu Mund weitergeben! Fällt sie, trinken beide!',
    type: 'duel',
    sips: 4,
  },
  {
    id: 'cal-due-4',
    text: '{p1} und {p2}: Wer hatte in seinem Leben schon mehr Dates? Derjenige mit weniger Dates trinkt aus Neid 3 Schlücke!',
    type: 'duel',
    sips: 3,
  },
  {
    id: 'cal-due-5',
    text: '{p1} stellt {p2} eine extrem unangenehme Wahrheits-Frage. Entweder {p2} antwortet ehrlich, oder trinkt 4 Schlücke!',
    type: 'duel',
    sips: 4,
  },
  {
    id: 'cal-due-6',
    text: '{p1} und {p2} spielen Schere-Stein-Papier um einen Kuss auf die Wange oder 4 Schlücke für den Verlierer!',
    type: 'duel',
    sips: 4,
  },
  {
    id: 'cal-due-7',
    text: '{p1} und {p2}: Stellt euch Rücken an Rücken. Wer kleiner ist, muss dem Größeren einen Drink ausgeben oder 3 Schlücke trinken!',
    type: 'duel',
    sips: 3,
  },

  // ==========================================
  // --- 3. VOTINGS (Gruppen-Abstimmungen) ---
  // ==========================================
  {
    id: 'cal-vot-1',
    text: 'Zählt auf 3 und zeigt auf die Person, mit der ihr am ehesten auf ein Date gehen würdet. Wer die meisten Finger hat, verteilt 3 Schlücke!',
    type: 'voting',
    sips: 3,
  },
  {
    id: 'cal-vot-2',
    text: 'Abstimmung der Wahrheit: Wer hatte das wildeste Date seines Lebens? Zählt auf 3 und zeigt! Der Gewinner trinkt stolze 4 Schlücke.',
    type: 'voting',
    sips: 4,
  },
  {
    id: 'cal-vot-3',
    text: 'Auf 3 zeigen alle auf die Person mit der geheimnisvollsten Ausstrahlung. Wer gewinnt, darf 2 Schlücke an seinen Favoriten verteilen.',
    type: 'voting',
    sips: 2,
  },
  {
    id: 'cal-vot-4',
    text: 'Wer bricht am ehesten ein Herz? Zeigt auf 3 auf den größten Heartbreaker der Runde! Diese Person trinkt 3 Schlücke zur Buße.',
    type: 'voting',
    sips: 3,
  },
  {
    id: 'cal-vot-5',
    text: 'Wer ist im Bett am experimentierfreudigsten? Zählt auf 3 und zeigt! Die Person mit den meisten Stimmen trinkt 4 Schlücke.',
    type: 'voting',
    sips: 4,
  },

  // ==========================================
  // --- 4. VIRUS & ANTI-VIRUS (Laufende Regeln) ---
  // ==========================================
  {
    id: 'cal-vir-1',
    text: 'VIRUS START: {p1} darf ab jetzt nur noch flüsternd ins Ohr von {p2} sprechen. Wer ihn/sie normal reden hört, lässt {p1} trinken!',
    type: 'virus', // Kein sips, ist eine Start-Regel!
  },
  {
    id: 'cal-antivir-1',
    text: 'VIRUS ENDE: Das Flüster-Verbot ist aufgehoben! {p1} und {p2} dürfen wieder normal miteinander reden und stoßen zum Feiern an.',
    type: 'antivirus',
    sips: 1,
  },
  {
    id: 'cal-vir-2',
    text: 'VIRUS START: Die Körperkontakt-Regel! {p1} und {p2} müssen ab jetzt bis auf Widerruf immer mit mindestens einem Fuß oder Knie einander berühren.',
    type: 'virus',
  },
  {
    id: 'cal-antivir-2',
    text: 'VIRUS ENDE: Die Körperkontakt-Regel von {p1} und {p2} ist beendet. Ihr könnt wieder auf Abstand gehen – oder es lassen!',
    type: 'antivirus',
    sips: 2,
  },
  {
    id: 'cal-vir-3',
    text: 'VIRUS START: Augenkontakt-Pflicht! Immer wenn {p1} vor dem Trinken nicht {p2} tief in die Augen schaut, muss {p1} die doppelte Menge trinken.',
    type: 'virus',
  },
  {
    id: 'cal-antivir-3',
    text: 'VIRUS ENDE: Die Augenkontakt-Pflicht ist vorbei! {p1} darf beim Trinken wieder wegschauen.',
    type: 'antivirus',
    sips: 1,
  },
];

export const NORMAL_TASKS: Task[] = [
    {
        id: '1',
        text: 'Erste Aufgabe',
        type: 'action',
        sips: 2
    },
]

export const CRAZY_TASKS: Task[] = [
    {
        id: '1',
        text: 'Erste Aufgabe',
        type: 'duel',
        sips: 2
    },
]