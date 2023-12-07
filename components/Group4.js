import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Group4 = ({ style }) => {
  return (
    <View style={[styles.lneasTecnolgicasParent, style]}>
      <Text style={styles.lneasTecnolgicas}>Líneas Tecnológicas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lneasTecnolgicas: {
    position: "absolute",
    marginTop: -16.5,
    marginLeft: -108.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.quintessentialRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  lneasTecnolgicasParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLimegreen,
    width: 345,
    height: 65,
  },
});

export default Group4;
