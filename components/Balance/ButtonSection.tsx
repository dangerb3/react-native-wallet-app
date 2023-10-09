import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// custom components
import RegularButton from "../Buttons/RegularButton";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";
import { Props as HomeProps } from '../../screens/Home'
import { useNavigation } from "@react-navigation/native";

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
  const navigation = useNavigation<HomeProps["navigation"]>()

  const handlePress = () => {
    navigation.navigate("Home")
  }

  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{ width: "50%" }} onPress={handlePress}>
        Cancel <Ionicons size={17} name="card" color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
