import React, { FC } from "react";
import styled from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";
import { TextProps } from "./types";

const StyledText = styled(Text)`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;

const SmallText: FC<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default SmallText;
