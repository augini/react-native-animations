import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PressableButton from "../components/PressableButton";
import styled from "styled-components";
import PressableButtonStyleSheet from "../components/PressableButtonStyleSheet";

const PracticeScreen = () => {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <PressableButton
        onPress={() => true}
        title="First button"
        bgColor="papayawhip"
      />
      <PressableButton
        onPress={() => true}
        title="First button"
        bgColor="#4267B2"
        primary
      />
      <PressableButtonStyleSheet
        onPress={() => true}
        title="First button"
        bgColor="#4267B2"
        primary
      />
    </Container>
  );
};

export default PracticeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin-vertical: 50%;
`;
