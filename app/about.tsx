import { Image, StyleSheet } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFFFFF", dark: "#000000" }}
      headerImage={
        <Image
          source={require("@/assets/images/pi.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Hello!</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedText type="subtitle">Learn π With Ease!</ThemedText>
        <ThemedText>
          Once you have learned π, you can test your knowledge with the quiz!
        </ThemedText>
        <ThemedText>
          If you pass the quiz, you can add your name to the leaderboard.
        </ThemedText>
        <ThemedText>
          You can even share your score and your badges with your friends!
        </ThemedText>
        <ThemedText type="subtitle">Socials</ThemedText>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ThemedText>GitHub Repository </ThemedText>
          <Link href="https://github.com/lorenzboss/pi-genius">
            <ThemedText type="link">lorenzboss/pi-genius</ThemedText>
          </Link>
        </ThemedView>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ThemedText>My GitHub Profile </ThemedText>
          <Link href="https://github.com/lorenzboss">
            <ThemedText type="link">@lorenzboss</ThemedText>
          </Link>
        </ThemedView>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ThemedText>LinkedIn Profile </ThemedText>
          <Link href="https://www.linkedin.com/in/lorenz-boss-229b06309/">
            <ThemedText type="link">@lorenzboss</ThemedText>
          </Link>
        </ThemedView>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ThemedText>Or just via mail </ThemedText>
          <Link href="mailto:lorenzboss7@gmail.com">
            <ThemedText type="link">lorenzboss7@gmail.com</ThemedText>
          </Link>
        </ThemedView>
        <ThemedText>
          If you have any questions or suggestions, please feel free to contact
          me!
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          Thank you so much for using this app! ☺️
        </ThemedText>
        <Collapsible title="MIT License">
          <ThemedText>
            Copyright {new Date().getUTCFullYear()} Lorenz Boss
          </ThemedText>
          <ThemedText>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the “Software”), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </ThemedText>
          <ThemedText>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </ThemedText>
          <ThemedText>
            THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </ThemedText>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
  reactLogo: {
    height: "80%",
    width: "100%",
    resizeMode: "contain",
    bottom: 0,
    position: "absolute",
  },
});
