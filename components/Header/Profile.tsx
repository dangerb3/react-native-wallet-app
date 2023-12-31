import React, { FC } from 'react'
import { TouchableOpacity, Image, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(TouchableOpacity)`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`

const StyledImage = styled(Image)`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Profile: FC<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
      <StyledImage style={props.imgStyle} source={props.img} />
    </StyledView>
  )
}

export default Profile;
