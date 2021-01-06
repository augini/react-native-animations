import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PressableButtonStyleSheet = ({ title, onPress, bgColor, primary }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: primary ? "white" : "#010101" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PressableButtonStyleSheet;

const styles = StyleSheet.create({
  button: {
    marginVertical: 40,
    width: 120,
    height: 40,
    padding: 12,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
