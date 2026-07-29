// ./src/components/ActionCard.tsx
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants/theme';
import { Task, TaskType } from '../types/game';

export interface ActionCardProps {
  task: Task;
  onPress: () => void;
}

const TYPE_LABELS: Record<TaskType, string> = {
  action:    'AUFGABE',
  duel:      'DUELL',
  voting:    'ABSTIMMUNG',
  virus:     'VIRUS START',
  antivirus: 'VIRUS ENDE',
};

export function ActionCard({ task: { text, type }, onPress }: ActionCardProps) {
  const label = TYPE_LABELS[type];
  const isVirus = type === 'virus' || type === 'antivirus';

  return (
    <TouchableOpacity 
      style={[styles.card, styles[type]]} 
      onPress={onPress} 
      activeOpacity={0.8}
    >
      {/* HEADER: Perfekt zentrierter, reiner Text-Titel */}
      <View style={styles.header}>
        <Text style={[styles.typeLabel, isVirus && styles.virusLabel]}>
          {label}
        </Text>
      </View>

      {/* AUFGABENTEXT */}
      <Text style={styles.text}>{text}</Text>

      {/* FOOTER */}
      <Text style={styles.hint}>Tippen für nächste Karte</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: SPACING.large,
    borderRadius: 24,
    width: '90%',
    minHeight: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
      },
      android: {
        elevation: 10,
      },
    }),
  },

  // Exaktes Farb-Mapping für jeden Kartentyp:
  action:    { backgroundColor: COLORS.cardAction },
  duel:      { backgroundColor: COLORS.cardDuel },
  voting:    { backgroundColor: COLORS.cardVoting },
  virus:     { backgroundColor: COLORS.cardVirus },
  antivirus: { backgroundColor: COLORS.cardAntiVirus },

  header: {
    width: '100%',
    alignItems: 'center', // Zentriert den Titel wunderschön im Header
  },
  typeLabel: {
    color: COLORS.textMuted,
    fontSize: FONTS.sizeBadge,
    fontWeight: '800',
    letterSpacing: 2.5, // Etwas mehr Laufweite (Abstand) für den edlen Look
  },
  virusLabel: {
    color: '#FFF', // Bei Viren strahlendes Weiß für maximale Aufmerksamkeit
  },

  text: {
    color: COLORS.textWhite,
    fontSize: FONTS.sizeCardText,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 34,
    marginVertical: SPACING.medium,
  },
  hint: {
    color: COLORS.textMuted,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  }
});