import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MenPrincipalText = ({ style }) => {
  return <Text style={[styles.menPrincipal, style]}>Menú principal</Text>;
};

const styles = StyleSheet.create({
  menPrincipal: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.quintessentialRegular,
    color: Color.colorDimgray_300,
    textAlign: "left",
  },
});

export default MenPrincipalText;
