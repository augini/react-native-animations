import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
//custom imports

const AppText = ({ dark }) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default AppText;

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#FFF")};

  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 20px`;
      case small:
        return `font-size: 13px`;
    }
  }}

  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
    }
  }}
`;
