const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Inicio from "./screens/Inicio";
import DesarrolladoPorText from "./components/DesarrolladoPorText";
import Group from "./components/Group";
import MenPrincipalText from "./components/MenPrincipalText";
import Line from "./components/Line";
import Group1 from "./components/Group1";
import Group2 from "./components/Group2";
import Group3 from "./components/Group3";
import Group4 from "./components/Group4";
import Group5 from "./components/Group5";
import InformacinTp from "./screens/InformacinTp";
import ARMen2 from "./screens/ARMen2";
import CalculadoraTRLRespuesta from "./screens/CalculadoraTRLRespuesta";
import CalculadoraTRL from "./screens/CalculadoraTRL";
import Menu2 from "./screens/Menu2";
import Menu from "./components/Menu";
import ARIntro from "./screens/ARIntro";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Quintessential-Regular": require("./assets/fonts/Quintessential-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 120000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DesarrolladoPorText"
              component={DesarrolladoPorText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenPrincipalText"
              component={MenPrincipalText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Line"
              component={Line}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group2"
              component={Group2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group3"
              component={Group3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group4"
              component={Group4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group5"
              component={Group5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InformacinTp"
              component={InformacinTp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ARMen2"
              component={ARMen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CalculadoraTRLRespuesta"
              component={CalculadoraTRLRespuesta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CalculadoraTRL"
              component={CalculadoraTRL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu2"
              component={Menu2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ARIntro"
              component={ARIntro}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <ARIntro />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
