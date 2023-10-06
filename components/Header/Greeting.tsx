import React, { FC } from 'react'
import { StyleProp, TextStyle, View } from 'react-native';
import styled from 'styled-components';
import RegularText from '../Texts/RegularText';
import { colors } from '../colors';
import SmallText from '../Texts/SmallText';

const StyledView = styled(View)`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>
}

const Greeting: FC<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={
          [{
            color: colors.secondary,
            fontSize: 22
          },
          props.mainTextStyles
          ]
        }
      >
        {props.mainText}
      </RegularText>
      <SmallText
        textStyles={
          [{
            color: colors.graydark,
          },
          props.subTextStyles
          ]
        }
      >
        {props.subText}
      </SmallText>
    </StyledView>
  )
}

export default Greeting;
