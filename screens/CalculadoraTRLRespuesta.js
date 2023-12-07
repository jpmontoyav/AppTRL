import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CalculadoraTRLRespuesta = () => {
  return (
    <View style={styles.calculadoraTrlRespuesta}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View
        style={[styles.calculadoraTrlRespuestaChild, styles.calculadoraBorder]}
      />
      <View style={styles.calculadoraTrlRespuestaItem} />
      <Text style={styles.calculadoraTrl}>Calculadora TRL</Text>
      <Text style={styles.suProyectoEst}>{`Su proyecto está en el 
TRL 6`}</Text>
      <View
        style={[styles.calculadoraTrlRespuestaInner, styles.calculadoraBorder]}
      />
      <View style={styles.groupParent}>
        <View style={[styles.volverAlMenWrapper, styles.wrapperPosition]}>
          <Text style={[styles.volverAlMen, styles.siguienteTypo]}>
            Volver al menú
          </Text>
        </View>
        <View style={[styles.siguienteWrapper, styles.wrapperPosition]}>
          <Text style={[styles.siguiente, styles.siguienteTypo]}>
            Siguiente
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculadoraBorder: {
    marginRight: 2,
    height: 4,
    borderTopWidth: 2,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  wrapperPosition: {
    borderRadius: Border.br_3xl,
    bottom: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorLightgreen,
  },
  siguienteTypo: {
    fontSize: FontSize.size_3xl,
    top: "50%",
    marginTop: -14.5,
    position: "absolute",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.quintessentialRegular,
  },
  image1Icon: {
    width: 509,
    height: 201,
    marginLeft: 43,
  },
  calculadoraTrlRespuestaChild: {
    width: 389,
    marginTop: -32.5,
  },
  calculadoraTrlRespuestaItem: {
    width: 430,
    height: 121,
    marginTop: 71.5,
    backgroundColor: Color.colorLightgreen,
  },
  calculadoraTrl: {
    fontSize: FontSize.size_31xl,
    marginTop: -93.5,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.quintessentialRegular,
  },
  suProyectoEst: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 163.5,
    marginLeft: 8,
    color: Color.colorWhite,
    fontFamily: FontFamily.quintessentialRegular,
  },
  calculadoraTrlRespuestaInner: {
    width: 297,
    marginTop: 16.5,
  },
  volverAlMen: {
    left: 22,
  },
  volverAlMenWrapper: {
    left: 0,
    width: 188,
  },
  siguiente: {
    marginLeft: -45,
    left: "50%",
  },
  siguienteWrapper: {
    right: 0,
    width: 154,
  },
  groupParent: {
    width: 376,
    height: 53,
    marginTop: 146.5,
  },
  calculadoraTrlRespuesta: {
    backgroundColor: Color.colorLimegreen,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default CalculadoraTRLRespuesta;
