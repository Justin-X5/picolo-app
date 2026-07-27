import { StyleSheet, Text, View } from "react-native";

const steps = [
  "1. Wir bauen zuerst nur den Bildschirm, keinen extra Schnickschnack.",
  "2. Danach geben wir der Seite Struktur, Farben und Abstand.",
  "3. Anschließend fügen wir Stück für Stück Logik, Daten und Navigation hinzu.",
];

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <Text style={styles.kicker}>Picolo neu aufbauen</Text>
        <Text style={styles.title}>Starten wir mit einer leeren, verständlichen Basis.</Text>
        <Text style={styles.subtitle}>
          Diese Seite ist der Ausgangspunkt für dein Tutorial. Alles Unnötige ist entfernt,
          damit wir jeden Schritt bewusst hinzufügen können.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Was wir als Nächstes machen</Text>
        {steps.map((step) => (
          <Text key={step} style={styles.step}>
            {step}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
    justifyContent: "center",
    gap: 20,
  },
  hero: {
    gap: 12,
  },
  kicker: {
    color: "#F97316",
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.6,
  },
  title: {
    color: "#F8FAFC",
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "800",
  },
  subtitle: {
    color: "#CBD5E1",
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    backgroundColor: "#111C33",
    borderColor: "#24314F",
    borderWidth: 1,
    borderRadius: 24,
    padding: 20,
    gap: 14,
  },
  cardLabel: {
    color: "#93C5FD",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  step: {
    color: "#E2E8F0",
    fontSize: 15,
    lineHeight: 22,
  },
});