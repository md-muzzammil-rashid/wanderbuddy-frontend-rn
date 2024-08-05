import { View, Text, Image } from 'react-native'
import React from 'react'
import empty from '@/assets/images/empty.png'

const NoDataFound = () => {
  return (
    <View className=' pt-40 justify-center items-center'>
            <Image source={empty} tintColor={'rgb(70,70,70)'} resizeMode='contain' className='h-32 '/>
            <Text className='text-center py-5 font-psemibold text-3xl text-secondary'>No data found</Text>
          </View>
  )
}

export default NoDataFound