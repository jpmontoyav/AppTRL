import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Group = ({ style }) => {
  return <View style={[styles.groupView, style]} />;
};

const styles = StyleSheet.create({
  groupView: {
    backgroundColor: Color.colorGray,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    width: 430,
    height: 61,
  },
});

export default Group;
