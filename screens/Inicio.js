import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Inicio = () => {
  return (
    <View style={styles.inicio}>
      <View style={styles.inicioChild} />
      <Text style={[styles.teku, styles.tekuTypo]}>TEKU</Text>
      <Text style={[styles.teku1, styles.tekuTypo]}>TEKU</Text>
      <View style={styles.logosNodos202Wrapper}>
        <Image
          style={styles.logosNodos202Icon}
          contentFit="cover"
          source={require("../assets/logosnodos202.png")}
        />
      </View>
      <View style={styles.comenzarWrapper}>
        <Text style={[styles.comenzar, styles.comenzarTypo]}>Comenzar</Text>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <View style={styles.inicioItem} />
      <Text style={[styles.desarrolladoPor, styles.comenzarTypo]}>
        Desarrollado por
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tekuTypo: {
    marginLeft: 1,
    fontSize: FontSize.size_31xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.quintessentialRegular,
    display: "none",
  },
  comenzarTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.quintessentialRegular,
  },
  inicioChild: {
    height: 121,
    display: "none",
    width: 430,
    backgroundColor: Color.colorLightgreen,
  },
  teku: {
    marginTop: -94,
  },
  teku1: {
    marginTop: -67,
  },
  logosNodos202Icon: {
    top: 20,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 206,
    position: "absolute",
  },
  logosNodos202Wrapper: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
    width: 521,
    height: 285,
    marginTop: 70,
    marginLeft: 49,
  },
  comenzar: {
    marginTop: -18,
    marginLeft: -54,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  comenzarWrapper: {
    borderRadius: Border.br_3xl,
    width: 180,
    height: 58,
    marginTop: 105,
    backgroundColor: Color.colorLightgreen,
  },
  imageIcon: {
    width: 246,
    height: 170,
    marginLeft: 206,
    marginTop: 105,
  },
  inicioItem: {
    backgroundColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    height: 65,
    marginTop: -120,
    width: 430,
  },
  desarrolladoPor: {
    fontSize: FontSize.size_lg,
    marginTop: -44,
    marginRight: 237,
  },
  inicio: {
    backgroundColor: Color.colorLimegreen,
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 100,
  },
});

export default Inicio;
