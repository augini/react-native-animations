import React from "react";
import styled from "styled-components";

const PressableButton = ({ onPress, bgColor, title, primary }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText primary={primary}>{title}</ButtonText>
  </ButtonContainer>
);

export default PressableButton;

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ primary }) => (primary ? "white" : "#010101")};
`;
