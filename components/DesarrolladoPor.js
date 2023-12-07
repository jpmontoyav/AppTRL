import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DesarrolladoPorText = ({ style }) => {
  return <Text style={[styles.desarrolladoPor, style]}>Desarrollado por</Text>;
};

const styles = StyleSheet.create({
  desarrolladoPor: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.quintessentialRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default DesarrolladoPorText;
