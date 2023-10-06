import React, { FC } from "react";
import { Container } from "../components/shared";
import styled from "styled-components";
import { colors } from "../components/colors";
import { StatusBar } from "expo-status-bar";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

export const Home: FC = () => {
  return <HomeContainer>
    <StatusBar style="dark" />
  </HomeContainer>;
};
