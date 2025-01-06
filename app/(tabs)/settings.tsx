import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <ThemedView style={styles.mainView}>
      <SafeAreaView>
        <ThemedView style={styles.container}>
          <ThemedText type="title">Settings</ThemedText>
          <ThemedText>
            This is an example settings screen. You can change the theme and
            other settings here.
          </ThemedText>
          <ThemedText>
            Learn more about this app and me by visiting the{" "}
            <Link href="/about">
              <ThemedText type="link">About Us Page</ThemedText>
            </Link>
            . 😊
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
