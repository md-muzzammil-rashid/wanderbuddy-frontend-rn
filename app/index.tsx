import { View, Text, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'
import { onboarding1, onboarding2, onboarding3, onboarding4 } from '@/constants/Image'
import CustomButton from '@/components/common/CustomButton'
import { TouchableOpacity } from 'react-native'
import Toast, {} from 'react-native-toast-message'

const index = () => {

  // return (
  //   <Redirect href={'(transportation)/train'}/>
  // )

  return (

    <>
    <View className='h-full'>
      <ImageBackground source={onboarding4} fadeDuration={1000}  blurRadius={5} className='h-full justify-between'>
        <View className='ml-6 pt-32 gap-y-3'>
          <Text className='text-white font-pblack text-7xl shadow-lg shadow-black'>Unleash</Text>
          <Text className='text-white font-pblack text-7xl shadow-lg shadow-black'>Your</Text>
          <Text className='text-white font-pblack text-6xl shadow-lg shadow-black'>Wanderlust</Text>
          <Text className='text-white font-pextrabold text-2xl shadow-md shadow-black'>Start Your Journey Here!</Text>
          {/* <Text></Text> */}
        </View>
        <View className='py-8 justify-end '>
      <TouchableOpacity onPress={()=>router.push('(auth)/login')} className='bg-white py-4 justify-center rounded-2xl items-center m-6 my-10'>
        <Text className='font-pbold text-xl'>Get Started</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>

    </View>
    <Toast/>
    </>
  )
}

export default index