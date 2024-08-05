import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { TouchableWithoutFeedback } from 'react-native'

const GalleryHeaderSecondary = () => {
    return (
        <View className='my-2'>
            <View className='w-full flex-row justify-between items-end'>
                <Text className='font-pbold text-2xl'>Photo Gallery</Text>
                <TouchableWithoutFeedback className='items-baseline' onPress={() => router.push('place-details/gandtokid/images')}>
                    <Text className='font-psemibold text-base'>View All</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default GalleryHeaderSecondary