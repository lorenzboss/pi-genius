import { Button, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { formattedPi } from "@/utils/pi";
import * as Haptics from "expo-haptics";
import { useRef } from "react";

export default function TabTwoScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <ThemedView style={styles.mainView}>
      <SafeAreaView>
        <ThemedView style={styles.container}>
          <ThemedText type="title">Explore π</ThemedText>
          <ThemedText>
            Learn & test specific section (one section is 10 digits) of the
            number pi.
          </ThemedText>
          <ThemedText>Write the numbers with sections vertically! </ThemedText>
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

          <ScrollView
            ref={scrollViewRef}
            horizontal
            contentContainerStyle={styles.inputScrollContainer}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            <ThemedText style={styles.inputString}>{formattedPi}</ThemedText>
          </ScrollView>
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
  inputScrollContainer: {
    alignItems: "center",
  },
  inputString: {
    lineHeight: 50,
    fontSize: 40,
    textAlign: "center",
    fontFamily: "JetBrainsMono",
  },
});
