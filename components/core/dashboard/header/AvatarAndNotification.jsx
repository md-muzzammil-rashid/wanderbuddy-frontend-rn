import { View, Text, Image } from 'react-native'
import React from 'react'
import car from '@/assets/images/car.jpg'
import { Ionicons } from '@expo/vector-icons'

const AvatarAndNotification = () => {
    return (
        <View className='flex-row justify-between items-center mx-3 my-1'>
            <View className='flex-row '>
            <Image source={car} className='w-12 h-12 rounded-full border' />
            <View className='ml-3'>
                <Text className='text-sm  text-white font-pbold shadow-sm shadow-gray-700'>Hello,</Text>
                <Text className='text-xl font-pblack h-7  text-white shadow-sm shadow-gray-700'>Ayaan</Text>
            </View>
            </View>

            <View className='p-3 bg-white w-12 h-12 rounded-2xl justify-center items-center'>
                <Ionicons color='orange' name='notifications-outline' size={25} />
            </View>
        </View>
    )
}

export default AvatarAndNotification