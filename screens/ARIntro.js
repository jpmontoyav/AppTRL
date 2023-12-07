import * as React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ARIntro = () => {
  return (
    <View style={styles.arIntro}>
      <ImageBackground
        style={styles.arIntroInner}
        resizeMode="cover"
        source={require("../assets/group15.png")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </ImageBackground>
      <View style={styles.omitirIntroduccinWrapper}>
        <Text style={[styles.omitirIntroduccin, styles.groupChildPosition]}>
          Omitir introducción
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -90,
    marginLeft: -37,
    backgroundColor: Color.colorLightgray,
    width: 37,
    height: 13,
  },
  arIntroInner: {
    width: 430,
    height: 934,
    marginRight: -23,
  },
  omitirIntroduccin: {
    marginTop: -15.5,
    marginLeft: -95,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.quintessentialRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  omitirIntroduccinWrapper: {
    borderRadius: 24,
    backgroundColor: Color.colorLightgreen,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 317,
    height: 62,
    marginTop: -147,
    marginRight: 56,
  },
  arIntro: {
    backgroundColor: Color.colorDarkgray,
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    paddingLeft: 23,
  },
});

export default ARIntro;
