import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const PostContainerHeader = () => {
  return (
    <View className='py-1 flex-row justify-between items-center'>
      <Text className=' font-pextrabold p-3 py-1 text-2xl'>WonderBuddy</Text>
      <View className='px-3'>
        <Ionicons name='add' size={29} />
      </View>
    </View>
  )
}

export default PostContainerHeader