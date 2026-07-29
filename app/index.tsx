// app/index.tsx
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ActionCard } from './src/components/ActionCard';
import { COLORS, FONTS, SPACING } from './src/constants/theme';
import { CALIENTE_TASKS } from './src/data/tasks';
import { Task } from './src/types/game';

// Wir importieren unseren Setup-Screen und den Text-Parser
import { Setup } from './src/components/Setup';
import { parseTaskText } from './src/utils/parser';

export default function App() {
  // Steuert, ob wir im Setup sind oder das Spiel läuft
  const [screen, setScreen] = useState<'setup' | 'game'>('setup');
  
  // Speichert die eingetippten Namen
  const [players, setPlayers] = useState<string[]>([]);

  // 1. DER ZUSTAND: Startet mit der ersten Karte
  const [currentTask, setCurrentTask] = useState<Task>(CALIENTE_TASKS[0]);

  // Wird aufgerufen, wenn man im Setup auf "SPIEL STARTEN" klickt
  const handleStartGame = (playerList: string[]) => {
    setPlayers(playerList);
    setScreen('game'); // Schaltet auf den Spiel-Bildschirm um!
    
    // Zieht sofort die erste Karte mit den neuen Namen
    handleNextCard(playerList);
  };

  // 2. DIE LOGIK-FUNKTION: Jetzt mit Text-Parser für echte Namen!
  const handleNextCard = (currentPlayers = players) => {
    const randomIndex = Math.floor(Math.random() * CALIENTE_TASKS.length);
    const rawTask = CALIENTE_TASKS[randomIndex];
    
    // Wir ersetzen {p1} und {p2} durch echte Namen aus der Liste
    const parsedText = parseTaskText(rawTask.text, currentPlayers);
    
    // Wir setzen die neue Karte in den State, aber mit dem übersetzten Text!
    setCurrentTask({ ...rawTask, text: parsedText });
  };

  // REPARIERT: Tippfehler bei Alert.alert korrigiert!
  const handleExitGame = () => {
    Alert.alert(
      'Spiel beenden',
      'Bist du sicher, dass du das Spiel beenden möchtest?',
      [
        {
          text: 'Abbrechen',
          style: 'cancel'
        },
        {
          text: 'Beenden',
          style: 'destructive',
          onPress: () => {
            setScreen('setup');
          }
        }
      ]
    );
  };

  // 3. DAS RENDERING: Entscheidet, welcher Screen gezeigt wird
  return (
    <View style={styles.container}>
      {screen === 'setup' ? (
        <Setup onStartGame={handleStartGame} />
      ) : (
        // ERGÄNZT: Der Wrapper-Container mit dem Exit-Button im Header!
        <View style={styles.gameContainer}>
          <View style={styles.gameHeader}>
            <TouchableOpacity 
              style={styles.exitButton} 
              onPress={handleExitGame}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <Text style={styles.exitButtonText}>✕  SETUP</Text>
            </TouchableOpacity>
          </View>

          <ActionCard 
            task={currentTask} 
            onPress={() => handleNextCard()} 
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ERGÄNZT: Die Styles für den Header und den Exit-Button
  gameContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameHeader: {
    position: 'absolute',
    top: 50,
    left: SPACING.medium,
    zIndex: 10,
  },
  exitButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  exitButtonText: {
    color: COLORS.textMuted,
    fontSize: FONTS.sizeBadge,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});