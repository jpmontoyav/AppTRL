import React, { useState } from "react";
import Group5 from "./Group5";
import Group4 from "./Group4";
import Group3 from "./Group3";
import Group2 from "./Group2";
import Group1 from "./Group1";
import Line from "./Line";
import MenPrincipalText from "./MenPrincipalText";
import Group from "./Group";
import DesarrolladoPorText from "./DesarrolladoPorText";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Menu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <Group5 />,
    <Group4 />,
    <Group3 />,
    <Group2 />,
    <Group1 />,
    <Line />,
    <MenPrincipalText />,
    <Group />,
    <DesarrolladoPorText />,
  ]);
  const [drawerItemsActive] = useState([
    <Group5 />,
    <Group4 />,
    <Group3 />,
    <Group2 />,
    <Group1 />,
    <Line />,
    <MenPrincipalText />,
    <Group />,
    <DesarrolladoPorText />,
  ]);
  const stateIndex = !state ? 0 : state.index;

  return (
    <View style={styles.menu}>
      {stateIndex === 4 ? drawerItemsActive[4] : drawerItemsNormal[4]}
      {stateIndex === 5 ? drawerItemsActive[5] : drawerItemsNormal[5]}
      {stateIndex === 6 ? drawerItemsActive[6] : drawerItemsNormal[6]}
      <View
        style={[styles.conoceQuEsDesarrolloDePWrapper, styles.wrapperLayout1]}
      >
        <Text
          style={[styles.conoceQuEs, styles.conoceQuEsTypo]}
        >{`Conoce qué es desarrollo
 de productos`}</Text>
      </View>
      {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
      {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
      {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
      {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      {stateIndex === 7 ? drawerItemsActive[7] : drawerItemsNormal[7]}
      {stateIndex === 8 ? drawerItemsActive[8] : drawerItemsNormal[8]}
    </View>
  );
};

const styles = StyleSheet.create({
  mt40: {
    marginTop: 40,
  },
  wrapperLayout1: {
    width: 345,
    borderRadius: Border.br_3xs,
  },
  conoceQuEsTypo: {
    textAlign: "center",
    fontSize: FontSize.size_6xl,
    position: "absolute",
    color: Color.colorWhite,
    fontFamily: FontFamily.quintessentialRegular,
  },
  wrapperLayout: {
    height: 58,
    backgroundColor: Color.colorLimegreen,
  },
  cerrarPosition: {
    marginTop: -16,
    left: "50%",
    top: "50%",
    color: Color.colorWhite,
    fontSize: FontSize.size_6xl,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.quintessentialRegular,
  },
  menuInnerBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  conoceQuEs: {
    top: 5,
    left: 32,
  },
  conoceQuEsDesarrolloDePWrapper: {
    height: 76,
    marginTop: 44,
    marginLeft: 1,
    backgroundColor: Color.colorLimegreen,
    width: 345,
    borderRadius: Border.br_3xs,
  },
  imageIcon: {
    width: 213,
    height: 148,
    marginTop: 34,
    marginLeft: 197,
  },
  menu: {
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    width: 430,
  },
});

export default Menu;
