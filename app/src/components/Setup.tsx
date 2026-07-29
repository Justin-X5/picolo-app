// ./src/components/Setup.tsx
import React, { useState } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

// DER VERTRAG: Der Screen will eine Funktion, der er die fertige Spielerliste übergeben kann
export interface SetupScreenProps {
  onStartGame: (players: string[]) => void;
}

export function Setup({ onStartGame }: SetupScreenProps) {
  // State 1: Was steht GERADE im Textfeld?
  const [currentName, setCurrentName] = useState('');
  
  // State 2: Die Liste der bereits hinzugefügten Spieler
  const [players, setPlayers] = useState<string[]>([]);

  // Spieler hinzufügen
  const handleAddPlayer = () => {
    // 1. Leerzeichen am Anfang/Ende entfernen ("  Anna " -> "Anna")
    const trimmedName = currentName.trim();

    // 2. Prüfen: Ist das Feld leer oder existiert der Name schon?
    if (trimmedName === '' || players.includes(trimmedName)) {
      return; // Abbrechen!
    }

    // 3. Den neuen Namen ans Array anhängen (Best Practice mit Spread-Operator [...])
    setPlayers([...players, trimmedName]);
    
    // 4. Das Textfeld wieder leeren für den nächsten Namen
    setCurrentName('');
  };

  // Spieler wieder löschen (wenn man auf das "X" tippt)
  const handleRemovePlayer = (nameToRemove: string) => {
    // Wir filtern den Namen heraus, der gelöscht werden soll
    setPlayers(players.filter(name => name !== nameToRemove));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PICOLO</Text>
      <Text style={styles.subtitle}>Wer trinkt heute mit?</Text>

      {/* TEXTFELD & ADD-BUTTON */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Spielername..."
          placeholderTextColor={COLORS.textMuted}
          value={currentName}
          onChangeText={setCurrentName}
          onSubmitEditing={handleAddPlayer} // Enter auf der Tastatur fügt hinzu!
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddPlayer}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* SPIELERLISTE */}
      <ScrollView style={styles.listContainer} contentContainerStyle={styles.listContent}>
        {players.map((name) => (
          <View key={name} style={styles.playerChip}>
            <Text style={styles.playerName}>{name}</Text>
            <TouchableOpacity 
              onPress={() => handleRemovePlayer(name)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Vergrößert den Touch-Bereich für das X
            >
              <Text style={styles.removeText}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* START-BUTTON (Wird erst ab 2 Spielern klickbar & grün!) */}
      <TouchableOpacity 
        style={[styles.startButton, players.length < 2 && styles.startButtonDisabled]} 
        onPress={() => players.length >= 2 && onStartGame(players)}
        disabled={players.length < 2}
      >
        <Text style={styles.startButtonText}>
          {players.length < 2 
            ? `NOCH ${2 - players.length} SPIELER...` 
            : 'SPIEL STARTEN '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: SPACING.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.textWhite,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 4,
    marginBottom: 4,
  },
  subtitle: {
    color: COLORS.textMuted,
    fontSize: 16,
    marginBottom: SPACING.large,
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: SPACING.medium,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: COLORS.textWhite,
    paddingHorizontal: SPACING.medium,
    paddingVertical: 14,
    borderRadius: 16,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: COLORS.cardAction, // Blaues Plus
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  addButtonText: {
    color: COLORS.textWhite,
    fontSize: 28,
    fontWeight: 'bold',
  },
  listContainer: {
    width: '100%',
    maxHeight: 250,
    marginVertical: SPACING.medium,
  },
  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  playerChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  playerName: {
    color: COLORS.textWhite,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  removeText: {
    color: COLORS.cardDuel, // Rotes X
    fontSize: 16,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: COLORS.cardAntiVirus, // Grün für Start
    width: '100%',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: SPACING.medium,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
      android: { elevation: 6 },
    }),
  },
  startButtonDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    ...Platform.select({ ios: { shadowOpacity: 0 }, android: { elevation: 0 } }),
  },
  startButtonText: {
    color: COLORS.textWhite,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
  },
});