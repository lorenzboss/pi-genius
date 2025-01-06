import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ThemedView } from "./ThemedView";

type CustomKeyboardProps = {
  onPress: (value: string) => void;
};

export default function CustomKeyboard({ onPress }: CustomKeyboardProps) {
  const createButton = (value: string) => (
    <Pressable style={styles.button} onPress={() => onPress(value)} key={value}>
      <Text style={styles.buttonText}>{value}</Text>
    </Pressable>
  );

  return (
    <ThemedView style={styles.keyboardContainer}>
      <ThemedView style={styles.row}>
        {["1", "2", "3"].map(createButton)}
      </ThemedView>
      <ThemedView style={styles.row}>
        {["4", "5", "6"].map(createButton)}
      </ThemedView>
      <ThemedView style={styles.row}>
        {["7", "8", "9"].map(createButton)}
      </ThemedView>
      <ThemedView style={styles.row}>{["0"].map(createButton)}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flexDirection: "column",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#2296F3",
    flex: 1,
    height: 80,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "JetBrainsMono",
  },
});
