import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import AppButton from "../components/AppButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>React Native Animations </Text>
      <View style={styles.subcontainer}>
        <AppButton
          onPress={() => navigation.navigate("Timer")}
          title="Timer Transition"
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 50,
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20,
  },
});
