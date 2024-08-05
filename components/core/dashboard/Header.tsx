import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import SearchBox from './header/SearchBox'
import AvatarAndNotification from './header/AvatarAndNotification'
import { homeBackground } from '@/constants/Image'
import { StatusBar } from 'expo-status-bar'

const Header = () => {
  return (
    <View className='w-full bg-primary h-full '>
      <ImageBackground source={homeBackground}  className='h-[400] justify-between pt-3  '>
      <AvatarAndNotification />
      <SearchBox/>
      <View className='bg-white rounded-t-[30px] pt-5 z-50'>
      <Text className='text-3xl font-pblack m-3'>Discover</Text>

      </View>
    </ImageBackground>
    </View>
  )
}

export default Header