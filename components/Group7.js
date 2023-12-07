import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Group3 = ({ style }) => {
  return (
    <View style={[styles.cerrarParent, style]}>
      <Text style={styles.cerrar}>Cerrar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cerrar: {
    position: "absolute",
    marginTop: -16,
    marginLeft: -33,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.quintessentialRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  cerrarParent: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorLimegreen,
    borderStyle: "solid",
    borderColor: Color.colorLimegreen,
    borderWidth: 1,
    width: 172,
    height: 58,
  },
});

export default Group3;
