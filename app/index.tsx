import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// 1. Daten-Schicht: Hier kommen später deine Aufgaben rein (kann man später in eine eigene JSON-Datei auslagern)
const TASKS = [
  "Trinke 2 Schlücke, wenn du heute schon Kaffee hattest.",
  "Verteile 3 Schlücke an jemanden, der ein weißes T-Shirt trägt.",
  "Wasserfall! Der Spieler rechts von dir fängt an.",
  "Alle Spieler, die jünger sind als du, trinken 1 Schluck."
];

export default function GameScreen() {
  // 2. Logik-Schicht: Verwaltet den aktuellen Zustand der App
  const [currentTask, setCurrentTask] = useState("Tippe auf die Karte, um das Spiel zu starten!");

  // Funktion, um eine zufällige Aufgabe zu ziehen
  const handleNextTask = () => {
    const randomIndex = Math.floor(Math.random() * TASKS.length);
    setCurrentTask(TASKS[randomIndex]);
  };

  // 3. UI-Schicht: Das visuelle Layout
  return (
    <View style={styles.background}>
      <TouchableOpacity style={styles.card} onPress={handleNextTask} activeOpacity={0.8}>
        <Text style={styles.taskText}>{currentTask}</Text>
        <Text style={styles.hintText}>(Tippen für die nächste Karte)</Text>
      </TouchableOpacity>
    </View>
  );
}

// 4. Styling-Schicht: Das Design deiner Komponenten
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1E1E24', // Ein dunkler, edler Hintergrund
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#E54B4B', // Picolo-typisches Rot
    width: '100%',
    height: '60%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10, // Schatten für Android
  },
  taskText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  hintText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
    position: 'absolute',
    bottom: 20,
  },
});