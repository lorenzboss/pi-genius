import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native"; // Oder eine andere Theme-Lösung
import { SymbolView, SymbolWeight } from "expo-symbols";
import React from "react";
import {
  OpaqueColorValue,
  Platform,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

/**
 * An icon component that uses native SFSymbols on iOS and MaterialIcons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Example usage:
 * <IconSymbol
 *   ios="house.fill"
 *   android="home"
 *   size={24}
 *   color="black" // Optional
 * />
 */
export function IconSymbol({
  name,
  android,
  size = 24,
  color,
  style,
  weight,
}: {
  name: import("expo-symbols").SymbolViewProps["name"];
  android: React.ComponentProps<typeof MaterialIcons>["name"];
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const theme = useTheme();
  const defaultColor = theme.colors.text;
  const resolvedColor = typeof color === "string" ? color : defaultColor;

  return Platform.OS === "ios" ? (
    <SymbolView
      name={name}
      scale={
        size
          ? size <= 20
            ? "small"
            : size <= 30
            ? "medium"
            : "large"
          : undefined
      }
      colors={[resolvedColor as string]}
      style={style as StyleProp<ViewStyle>}
      weight={weight}
    />
  ) : (
    <MaterialIcons
      name={android}
      size={size}
      color={resolvedColor as string}
      style={style}
    />
  );
}
