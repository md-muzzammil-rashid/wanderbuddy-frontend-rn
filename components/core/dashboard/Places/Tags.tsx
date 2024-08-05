import { View, Text } from 'react-native'
import React from 'react'

const Tags = () => {
    const tags = [
        'historical',
        'cultural',
        'natural',
        'island',
        'town',
    ]
  return (
    <View className='py-2'>
      <Text className='text-xl py-2 font-pbold'>Tags</Text>
      <View className='flex-row gap-x-3 w-full flex-wrap gap-y-3'>
        {
            tags.map((tag, index) => (
                <View className='rounded-2xl px-4 py-[6] overflow-hidden bg-blue-400 ' key={index} >
                <Text className='text-white font-psemibold '>{tag}</Text>
                </View>
            ))
        }
        </View>
      </View>
  )
}

export default Tags