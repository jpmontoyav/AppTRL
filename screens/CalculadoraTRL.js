import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CalculadoraTRL = () => {
  return (
    <View style={styles.calculadoraTrl}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={styles.calculadoraTrlChild} />
      <View style={styles.calculadoraTrlItem} />
      <Text style={[styles.calculadoraTrl1, styles.aSiSuTypo]}>
        Calculadora TRL
      </Text>
      <View style={styles.calculadoraTrlInner} />
      <Text style={styles.aquVaLa}>{`¿Aquí va la pregunta para 
saber la fase del proyecto?`}</Text>
      <View
        style={[
          styles.aSiSuRespuestaEsEstaWrapper,
          styles.respuestaWrapperLayout,
        ]}
      >
        <Text style={[styles.aSiSu, styles.aSiSuTypo]}>
          A. Si su respuesta es esta
        </Text>
      </View>
      <View
        style={[
          styles.bSiSuRespuestaEsEstaWrapper,
          styles.respuestaWrapperLayout,
        ]}
      >
        <Text style={[styles.aSiSu, styles.aSiSuTypo]}>
          B. Si su respuesta es esta
        </Text>
      </View>
      <View
        style={[
          styles.bSiSuRespuestaEsEstaWrapper,
          styles.respuestaWrapperLayout,
        ]}
      >
        <Text style={[styles.aSiSu, styles.aSiSuTypo]}>
          C. Si su respuesta es esta
        </Text>
      </View>
      <View
        style={[
          styles.bSiSuRespuestaEsEstaWrapper,
          styles.respuestaWrapperLayout,
        ]}
      >
        <Text style={[styles.aSiSu, styles.aSiSuTypo]}>
          D. Si su respuesta es esta
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aSiSuTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.quintessentialRegular,
  },
  respuestaWrapperLayout: {
    marginLeft: 1,
    height: 53,
    width: 365,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorLightgreen,
  },
  image1Icon: {
    width: 509,
    height: 201,
    marginLeft: 25,
  },
  calculadoraTrlChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 2,
    width: 389,
    height: 4,
    marginTop: -32.5,
    marginRight: 2,
  },
  calculadoraTrlItem: {
    width: 430,
    height: 121,
    marginTop: 46.5,
    backgroundColor: Color.colorLightgreen,
  },
  calculadoraTrl1: {
    fontSize: FontSize.size_31xl,
    marginTop: -93.5,
  },
  calculadoraTrlInner: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
    width: 380,
    height: 97,
    marginTop: 78.5,
  },
  aquVaLa: {
    fontSize: FontSize.size_3xl,
    color: Color.colorDimgray_300,
    textAlign: "center",
    marginTop: -78.5,
    fontFamily: FontFamily.quintessentialRegular,
  },
  aSiSu: {
    position: "absolute",
    marginTop: -16.5,
    top: "50%",
    left: 49,
    fontSize: FontSize.size_6xl,
  },
  aSiSuRespuestaEsEstaWrapper: {
    marginTop: 85.5,
  },
  bSiSuRespuestaEsEstaWrapper: {
    marginTop: 32.5,
  },
  calculadoraTrl: {
    backgroundColor: Color.colorLimegreen,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default CalculadoraTRL;
