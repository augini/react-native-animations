import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//custom
import { appColors } from "../config/globalStyles";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {title && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "8%",
    borderRadius: 8,
    backgroundColor: appColors.main,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
  },
});
