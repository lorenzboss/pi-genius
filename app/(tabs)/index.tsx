import { SafeAreaView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mainView}>
      <SafeAreaView>
        <ThemedView style={styles.container}>
          <ThemedText type="title">Home</ThemedText>
          <ThemedText>
            This is an example home screen. You can start building your app
            here.
          </ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  container: {
    padding: 32,
    gap: 16,
  },
});
