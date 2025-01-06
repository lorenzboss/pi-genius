import CustomKeyboard from "@/components/CustomKeyboard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { pi } from "@/utils/pi";
import supabase from "@/utils/supabase";
import { User } from "@supabase/supabase-js";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import { Button, Platform, SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [input, setInput] = useState("3."); // Startet direkt mit "3"
  const [highscore, setHighscore] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        fetchHighscore(user.id);
      }
    };

    getCurrentUser();
  }, []);

  const fetchHighscore = async (userId: string) => {
    const { data } = await supabase
      .from("highscores")
      .select("score")
      .eq("user_id", userId)
      .single();

    if (data) {
      setHighscore(data.score);
    }
  };

  const handleInputChange = (value: string) => {
    setInput((prevInput) => prevInput + value);

    if (input + value !== pi.slice(0, input.length + 1)) {
      if (Platform.OS !== "web") {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      }
      resetInput();
    } else {
      if (Platform.OS !== "web") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    }
  };

  const resetInput = () => {
    setInput("3.");
  };

  return (
    <ThemedView style={styles.mainView}>
      <SafeAreaView>
        <ThemedView style={styles.container}>
          <ThemedText>Willkommen {user ? user.email : "Gast"}</ThemedText>
          <ThemedText>Dein Highscore: {highscore}</ThemedText>
          <ThemedText style={styles.inputString}>{input}</ThemedText>
          <CustomKeyboard onPress={handleInputChange} />
          <Button title="Neustart" onPress={resetInput} />
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
  inputString: {
    lineHeight: 50,
    fontSize: 40,
    textAlign: "center",
    fontFamily: "JetBrainsMono",
  },
});
