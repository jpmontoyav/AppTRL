import * as React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Menu2 = () => {
  return (
    <View style={styles.menu2}>
      <ImageBackground
        style={styles.menu2Child}
        resizeMode="cover"
        source={require("../assets/group31.png")}
      />
      <View style={styles.menu2Item} />
      <View style={styles.menu2Inner} />
      <Text style={styles.lneasTecnoparque}>Líneas tecnoparque</Text>
      <View
        style={[
          styles.lneaDeTecnologasVirtualesWrapper,
          styles.lneaWrapperLayout,
        ]}
      >
        <Text style={[styles.lneaDeTecnologas, styles.lneaTypo]}>
          Línea de tecnologías virtuales
        </Text>
      </View>
      <View
        style={[styles.lneaDeDiseoEIngenierasWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.lneaDeDiseo, styles.lneaPosition]}>
          Línea de diseño e ingenierías
        </Text>
      </View>
      <View
        style={[
          styles.lneaDeElectrnicaYTelecomWrapper,
          styles.lneaWrapperLayout,
        ]}
      >
        <Text
          style={[styles.lneaDeElectrnica, styles.lneaTypo]}
        >{`Línea de electrónica y
telecomunicaciones`}</Text>
      </View>
      <View style={[styles.lneaDeBiotecnologaWrapper, styles.wrapperLayout]}>
        <Text style={[styles.lneaDeBiotecnologa, styles.lneaPosition]}>
          Línea de biotecnología
        </Text>
      </View>
      <View style={[styles.volverAlMenWrapper, styles.groupViewBorder]}>
        <Text style={[styles.volverAlMen, styles.lneaPosition]}>
          Volver al menú
        </Text>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      <View style={[styles.groupView, styles.groupViewBorder]} />
      <Text style={styles.desarrolladoPor}>Desarrollado por</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lneaWrapperLayout: {
    marginLeft: 1,
    width: 345,
    borderRadius: Border.br_3xs,
  },
  lneaTypo: {
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
  lneaPosition: {
    marginTop: -16,
    color: Color.colorWhite,
    fontSize: FontSize.size_6xl,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.quintessentialRegular,
  },
  groupViewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  menu2Child: {
    width: 426,
    height: 168,
    alignSelf: "flex-end",
  },
  menu2Item: {
    borderTopWidth: 2,
    width: 367,
    height: 4,
    marginTop: -24.5,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
  },
  menu2Inner: {
    height: 76,
    marginTop: 29.5,
    width: 430,
  },
  lneasTecnoparque: {
    fontSize: FontSize.size_21xl,
    color: Color.colorDimgray_300,
    marginTop: -64.5,
    marginRight: 1,
    textAlign: "left",
    fontFamily: FontFamily.quintessentialRegular,
  },
  lneaDeTecnologas: {
    marginTop: -16.5,
    left: 10,
    top: "50%",
    textAlign: "center",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  lneaDeTecnologasVirtualesWrapper: {
    height: 63,
    marginTop: 53.5,
    backgroundColor: Color.colorLimegreen,
    width: 345,
    borderRadius: Border.br_3xs,
  },
  lneaDeDiseo: {
    left: 13,
  },
  lneaDeDiseoEIngenierasWrapper: {
    marginTop: 44.5,
    marginLeft: 1,
    width: 345,
    borderRadius: Border.br_3xs,
    height: 58,
  },
  lneaDeElectrnica: {
    marginLeft: -119.5,
    top: 9,
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  lneaDeElectrnicaYTelecomWrapper: {
    height: 83,
    marginTop: 31.5,
    backgroundColor: Color.colorLimegreen,
    width: 345,
    borderRadius: Border.br_3xs,
  },
  lneaDeBiotecnologa: {
    left: 47,
  },
  lneaDeBiotecnologaWrapper: {
    marginTop: 37.5,
    marginLeft: 1,
    width: 345,
    borderRadius: Border.br_3xs,
    height: 58,
  },
  volverAlMen: {
    left: 25,
  },
  volverAlMenWrapper: {
    borderRadius: Border.br_2xl,
    borderColor: Color.colorLimegreen,
    width: 214,
    marginTop: 70.5,
    height: 58,
    backgroundColor: Color.colorLimegreen,
  },
  imageIcon: {
    width: 213,
    height: 148,
    marginTop: 32.5,
    marginLeft: 197,
  },
  groupView: {
    backgroundColor: Color.colorGray,
    height: 61,
    marginTop: -104.5,
    width: 430,
    borderColor: Color.colorDimgray_100,
  },
  desarrolladoPor: {
    fontSize: FontSize.size_lg,
    marginTop: -41.5,
    marginRight: 229,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.quintessentialRegular,
  },
  menu2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Menu2;
