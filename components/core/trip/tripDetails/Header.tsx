import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { onboarding2, onboarding3 } from '@/constants/Image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector } from 'react-redux'

const Header = () => {
  const tripData = useSelector(state=>state?.trip?.trip)
  return (
    <View  className='' style={{}}>
      <ImageBackground  className='h-16  ' source={{uri:tripData?.destinationImage}} >
        <LinearGradient 
            start={{x:0.5, y:0}}
            end={{x:0.5, y:1}}
            colors={['rgba(0,0,0,0.5)', 'rgba(255,255,255,0.01)', 'rgba(0,0,0,0.5)',]}>
        <View className='w-full h-full justify-center items-center'>
        <Text className='text-4xl shadow-md shadow-black text-white pt-2 font-pblack drop-shadow-sm'>{tripData?.title}</Text>
        </View>
      </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default Header