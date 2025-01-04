import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
 * ```tsx
 * <IconSymbol
 *   ios="house.fill"
 *   android="home"
 *   size={24}
 *   color="black"
 * />
 * ```
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
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
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
      colors={[color as string]}
      style={style as StyleProp<ViewStyle>}
      weight={weight}
    />
  ) : (
    <MaterialIcons
      name={android}
      size={size}
      color={color as string}
      style={style}
    />
  );
}
