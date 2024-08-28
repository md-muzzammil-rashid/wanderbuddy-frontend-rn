import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'

const ReplyBox = ({comment, username, avatar, userId, replies}) => {
  return (
    <View className=' w-full'>
        <View className='flex-row pl-6 py-2 bg-white  rounded-xl '>
            <View className=''>
                <Image source={{uri:avatar}} className='w-10 h-10 rounded-full ' />
            </View>
            <View className='px-2  flex-grow flex-shrink'>
            <Text className='font-pextrabold text-sm'>{username}</Text>
            <Text className='font-pregular flex-shrink text-base'>{comment} </Text>
            </View>
            <View className='justify-center items-center m-1 '>
                <Ionicons color={'red'} name='heart' size={16}/>
            </View>
        </View>
    </View>
  )
}

export default ReplyBox