import { View, Text, Image } from 'react-native'
import React from 'react'
import car from '@/assets/images/car.jpg'

const PostHeader = () => {
  return (
    <View className='w-full flex-row items-center gap-2 my-2 '>
        <Image source={car} resizeMode='cover'  className='w-12 h-12 aspect-square rounded-full' />
        <Text className='font-pbold text-base '> Md Muzzammil Rashid</Text>
    </View>
  )
}

export default PostHeader