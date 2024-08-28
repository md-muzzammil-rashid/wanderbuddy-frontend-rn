import { View, Text, Image } from 'react-native'
import React from 'react'
import car from '@/assets/images/car.jpg'

const PostHeader = ({location}) => {
  return (
    <View className='w-full flex-row items-center gap-2 my-2 '>
        <Image source={car} resizeMode='cover'  className='w-12 h-12 aspect-square rounded-full' />
        <View>
        <Text className='font-pbold text-base '> Md Muzzammil Rashid</Text>
        <Text className='font-pregular text-sm '> {location}</Text>
        </View>
    </View>
  )
}

export default PostHeader