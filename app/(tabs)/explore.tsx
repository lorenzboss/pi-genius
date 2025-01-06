import { Button, SafeAreaView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import * as Haptics from "expo-haptics";

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.mainView}>
      <SafeAreaView>
        <ThemedView style={styles.container}>
          <ThemedText type="title">Explore</ThemedText>
          <ThemedText>
            This is an example explore screen. You can browse content here.
          </ThemedText>
          <Button
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
            title="Correct (Impact Light)"
          />
          <Button
            onPress={() => {
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning
              );
            }}
            title="Incorrect (Notification Warning)"
          />
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
