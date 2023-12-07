import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Line = ({ style }) => {
  return <View style={[styles.lineView, style]} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 2,
    width: 367,
    height: 4,
  },
});

export default Line;
