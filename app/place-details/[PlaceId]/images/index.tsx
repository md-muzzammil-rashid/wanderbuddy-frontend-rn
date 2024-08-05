import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PlaceImages = () => {
  const data = useLocalSearchParams()
  
  return (
    <View>
      <Text>PlaceImages</Text>
    </View>
  )
}

export default PlaceImages