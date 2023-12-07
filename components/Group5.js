import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Group5 = ({ style }) => {
  return (
    <View style={[styles.calclaElNivelDeMadurezTeParent, style]}>
      <Text style={styles.calclaElNivel}>{`Calcúla el nivel de madurez
tecnológico de tu proyecto`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calclaElNivel: {
    position: "absolute",
    top: 9,
    left: 22,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.quintessentialRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  calclaElNivelDeMadurezTeParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLimegreen,
    width: 345,
    height: 83,
  },
});

export default Group5;
