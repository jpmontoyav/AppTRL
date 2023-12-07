import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const ARMen2 = () => {
  return (
    <View style={styles.arMen2}>
      <Image
        style={styles.nopathCopia2}
        contentFit="cover"
        source={require("../assets/nopath--copia-2.png")}
      />
      <View style={styles.groupParent}>
        <ImageBackground
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group12.png")}
        />
        <View style={styles.groupItem} />
      </View>
      <Image
        style={styles.arMen2Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.arMen2Item}
        contentFit="cover"
        source={require("../assets/group-14.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nopathCopia2: {
    width: 430,
    height: 956,
  },
  groupChild: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    marginTop: -45,
    marginLeft: -19,
    top: "50%",
    left: "50%",
    backgroundColor: Color.colorLightgray,
    width: 19,
    height: 7,
    position: "absolute",
  },
  groupParent: {
    width: 218,
    height: 472,
    marginTop: -687.9,
  },
  arMen2Child: {
    width: 132,
    height: 52,
    marginTop: -176.9,
    marginRight: 66,
  },
  arMen2Item: {
    width: 339,
    height: 78,
    marginTop: 117.1,
    marginLeft: 1,
  },
  arMen2: {
    backgroundColor: Color.colorDarkgray,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default ARMen2;
