import React from "react";
import { Text, StyleSheet, TextStyle, TextProps } from "react-native";
import { useTheme } from "@react-navigation/native";
import { FONTS } from "../constants/Fonts";
import { textScale } from "../utils/responsiveSize";

interface Props {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "h8"
    | "h9"
    | "body";
  fontFamily?: FONTS;
  fontSize?: number;
  style?: TextStyle;
  children?: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: object) => void;
}

const CustomText: React.FC<Props> = ({
  variant = "body",
  fontFamily = FONTS.Regular,
  fontSize,
  style,
  onLayout,
  children,
  numberOfLines,
}) => {
  const { colors } = useTheme();

  let computedFontSize: number;
  switch (variant) {
    case "h1":
      computedFontSize = textScale(fontSize || 22);
      break;
    case "h2":
      computedFontSize = textScale(fontSize || 20);
      break;
    case "h3":
      computedFontSize = textScale(fontSize || 18);
      break;
    case "h4":
      computedFontSize = textScale(fontSize || 16);
      break;
    case "h5":
      computedFontSize = textScale(fontSize || 14);
      break;
    case "h6":
      computedFontSize = textScale(fontSize || 12);
      break;
    case "h7":
      computedFontSize = textScale(fontSize || 12);
      break;
    case "h8":
      computedFontSize = textScale(fontSize || 10);
      break;
    case "h9":
      computedFontSize = textScale(fontSize || 9);
      break;
    default:
      computedFontSize = textScale(fontSize || 12);
  }

  const fontFamilyStyle = {
    fontFamily:
      fontFamily === FONTS.Black
        ? "Roboto-Black"
        : fontFamily === FONTS.Bold
        ? "Roboto-Bold"
        : fontFamily === FONTS.Light
        ? "Roboto-Light"
        : fontFamily === FONTS.Medium
        ? "Roboto-Medium"
        : fontFamily === FONTS.Number
        ? "Manrope-Regular"
        : fontFamily === FONTS.NumberSemiBold
        ? "Manrope-SemiBold"
        : fontFamily === FONTS.Lato
        ? "Lato-Regular"
        : fontFamily === FONTS.Thin
        ? "Roboto-Thin"
        : "Roboto-Regular",
  };

  return (
    <Text
      onLayout={onLayout}
      style={[
        styles.text,
        { color: colors.text, fontSize: computedFontSize },
        fontFamilyStyle,
        style,
      ]}
      numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
  },
});

export default CustomText;