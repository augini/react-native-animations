import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styled from "styled-components";
import Avatar from "../components/Avatar";
//custom components
import Header from "../components/Header";
import InputContainer from "../components/InputContainer";

const StyledScreen = () => {
  return (
    <Container>
      <Header headerTitle="social" />
      <RowContainer>
        <Avatar imageSource={require("../../assets/avatar1.png")} />
        <InputContainer />
      </RowContainer>
    </Container>
  );
};

export default StyledScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;
