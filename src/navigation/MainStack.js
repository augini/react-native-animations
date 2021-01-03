import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
//custom imports
import HomeScreen from "../screens/HomeScreen";
import TimerScreen from "../screens/TimerScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createStackNavigator();

//function to provide the fade effect for transition between screens
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "white" },
          cardStyleInterpolator: forFade,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
