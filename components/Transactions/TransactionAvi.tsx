import React, { FC } from 'react'
import { TransactionAviProps } from './../../../money_bag/components/Transactions/types';
import styled from 'styled-components';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../colors';

const StyledView = styled(View)`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

const TransactionAvi: FC<TransactionAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <Ionicons name={props.icon} size={25} color={colors.white} />
    </StyledView>
  )
}

export default TransactionAvi;