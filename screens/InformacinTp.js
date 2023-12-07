import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const InformacinTp = () => {
  return (
    <View style={styles.informacinTp}>
      <View style={styles.informacinTpChild} />
      <Image
        style={styles.tecnoparqueRionegroIcon}
        contentFit="cover"
        source={require("../assets/tecnoparque-rionegro.png")}
      />
      <Text style={styles.acercaDeTecnoparque}>Acerca de Tecnoparque</Text>
      <Text style={styles.tienesUnaIdea}>¿Tienes una idea?</Text>
      <View style={[styles.informacinTpItem, styles.rectangleViewLayout]} />
      <View style={styles.informacinTpInner} />
      <Text
        style={[styles.regstralaEnWwwredtecnoparq, styles.ingresaAEdutekuTypo]}
      >{`Regístrala en www.redtecnoparque `}</Text>
      <Text
        style={[styles.quieresAprenderSobre, styles.sguenosEnSpaceBlock]}
      >{`¿Quieres aprender sobre desarrollo
de producto?`}</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.ingresaAEduteku, styles.ingresaAEdutekuTypo]}>
        Ingresa a Eduteku para aprender
      </Text>
      <Text style={[styles.sguenosEn, styles.sguenosEnSpaceBlock]}>
        Síguenos en
      </Text>
      <Image
        style={styles.youtubeIcon}
        contentFit="cover"
        source={require("../assets/youtube.png")}
      />
      <Text
        style={[styles.tecnoparqueRionegro, styles.tecnoparqueRionegroTypo]}
      >
        Tecnoparque Rionegro
      </Text>
      <Image
        style={styles.instagramIcon}
        contentFit="cover"
        source={require("../assets/instagram.png")}
      />
      <Text
        style={[styles.tecnoparquerionegro, styles.tecnoparqueRionegroTypo]}
      >
        tecnoparquerionegro
      </Text>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <View style={styles.informacinTpChild1} />
      <Text style={[styles.desarrolladoPor, styles.sguenosEnSpaceBlock]}>
        Desarrollado por
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    marginTop: 0.5,
    height: 79,
    width: 426,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorLimegreen,
  },
  ingresaAEdutekuTypo: {
    marginTop: -53.5,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.quintessentialRegular,
  },
  sguenosEnSpaceBlock: {
    marginLeft: 31,
    fontFamily: FontFamily.quintessentialRegular,
  },
  tecnoparqueRionegroTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.quintessentialRegular,
  },
  informacinTpChild: {
    height: 121,
    width: 430,
    backgroundColor: Color.colorLimegreen,
  },
  tecnoparqueRionegroIcon: {
    width: 378,
    height: 263,
    marginTop: -77.5,
    alignSelf: "center",
  },
  acercaDeTecnoparque: {
    fontSize: 35,
    marginTop: -262.5,
    marginLeft: 39,
    fontFamily: FontFamily.quintessentialRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  tienesUnaIdea: {
    marginTop: 159.5,
    textAlign: "center",
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_6xl,
    marginLeft: 39,
    fontFamily: FontFamily.quintessentialRegular,
  },
  informacinTpItem: {
    marginLeft: 71,
  },
  informacinTpInner: {
    marginTop: -78.5,
    marginLeft: 58,
    height: 79,
    width: 426,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorLimegreen,
  },
  regstralaEnWwwredtecnoparq: {
    marginLeft: 73,
  },
  quieresAprenderSobre: {
    textAlign: "right",
    marginTop: 74.5,
    marginLeft: 31,
    fontSize: FontSize.size_6xl,
    color: Color.colorDimgray_400,
  },
  rectangleView: {
    marginLeft: -64,
  },
  ingresaAEduteku: {
    marginLeft: 28,
  },
  sguenosEn: {
    color: Color.colorLimegreen,
    marginTop: 74.5,
    marginLeft: 31,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
  },
  youtubeIcon: {
    width: 42,
    height: 42,
    marginTop: 37.5,
    marginLeft: 33,
  },
  tecnoparqueRionegro: {
    marginTop: -36.5,
    marginLeft: 95,
  },
  instagramIcon: {
    width: 43,
    height: 43,
    marginTop: 25.5,
    marginLeft: 33,
  },
  tecnoparquerionegro: {
    marginTop: -37.5,
    marginLeft: 102,
  },
  imageIcon: {
    width: 246,
    height: 170,
    marginTop: 15.5,
    marginLeft: 199,
  },
  informacinTpChild1: {
    backgroundColor: Color.colorDarkslategray,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    height: 68,
    marginTop: -123.5,
    width: 430,
  },
  desarrolladoPor: {
    fontSize: FontSize.size_lg,
    marginTop: -45.5,
    marginLeft: 31,
    textAlign: "left",
    color: Color.colorWhite,
  },
  informacinTp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    paddingTop: 29,
  },
});

export default InformacinTp;
