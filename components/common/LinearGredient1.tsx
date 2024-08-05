import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const LinearGredient1 = ({children}) => {
  return (
    <LinearGradient
      colors={[
        'rgba(0,127,255,1)',
        // 'rgba(35,5,85,1)',
        'rgba(85,9,121,1)',
        'rgba(195,34,55,1)',
        // 'rgba(218,125,52,1)',
        // 'rgba(255,184,46,1)'
      ]}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0.8, y: 1.6 }}
      className=''
    >
        {children}
    </LinearGradient>
  )
}

export default LinearGredient1