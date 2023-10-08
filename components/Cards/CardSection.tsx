import React, { FC } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components'
import { CardSectionProps } from './types'
import CardItem from './CardItem'

const CardList = styled(FlatList)`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`

const CardSection: FC<CardSectionProps> = (props) => {
  return (
    <CardList
      data={props.data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 25,
        alignItems: "center"
      }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  )
}

export default CardSection
