import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Group2 = ({ style }) => {
  return (
    <View style={[styles.conoceTecnoparqueParent, style]}>
      <Text style={styles.conoceTecnoparque}>Conoce tecnoparque</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conoceTecnoparque: {
    position: "absolute",
    marginTop: -16,
    marginLeft: -115.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.quintessentialRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  conoceTecnoparqueParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLimegreen,
    width: 345,
    height: 58,
  },
});

export default Group2;
