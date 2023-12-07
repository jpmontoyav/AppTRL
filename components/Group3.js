import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  ImageBackground,
  StyleSheet,
} from "react-native";

const Group1 = ({ style }) => {
  return (
    <ImageBackground
      style={[styles.groupIcon, style]}
      resizeMode="cover"
      source={require("../assets/group3.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 426,
    height: 168,
  },
});

export default Group1;
