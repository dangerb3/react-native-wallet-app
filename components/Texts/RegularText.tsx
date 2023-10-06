import React, { FC } from "react";
import styled from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";
import { TextProps } from "./types";

const StyledText = styled(Text)`
  font-size: 15px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

const RegularText: FC<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegularText;
