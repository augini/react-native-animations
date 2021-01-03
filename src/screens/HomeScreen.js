import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import AppButton from "../components/AppButton";

const animations = [
  { navigation: "Timer", title: "Timer transition" },
  { navigation: "Onboarding", title: "Onboarding transition" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>React Native Animations </Text>
      <View style={styles.subcontainer}>
        <FlatList
          data={animations}
          renderItem={({ item }) => (
            <AppButton
              onPress={() => navigation.navigate(item.navigation)}
              title={item.title}
            />
          )}
          keyExtractor={(item) => item.navigation}
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
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20,
  },
});
