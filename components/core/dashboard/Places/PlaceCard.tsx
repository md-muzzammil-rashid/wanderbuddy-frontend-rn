import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { loginBackground, onboarding1, onboarding2, onboarding4 } from '@/constants/Image'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const PlaceCard = ({placename, location, hrefId, rating, image}) => {
    return (
        <TouchableWithoutFeedback onPress={()=>router.push('place-details/gangtokid/')
}>
        <View className='w-[280px] rounded-3xl mx-3 shadow shadow-gray-400'>
            <ImageBackground className='h-[350px] justify-end rounded-3xl overflow-hidden' source={{uri:image}}>
                <View className='bg-white/40 h-20 m-6 rounded-xl overflow-hidden'>
                    <BlurView tint='dark'  intensity={20} className='max-h-full p-2 px-3 bg-black/30 h-full'>
                        <View className='py-1 h-16 justify-around'>
                            <View className='flex-row items-baseline'>
                                <Text className='text-white font-pbold text-base'> {placename}, </Text>
                                {/* <Text className='text-gray-200 font-pregular'> {location.split(",")[0]}</Text> */}
                            </View>
                            <View className='flex-row justify-between'>
                                <View className='flex-row items-center gap-1'>
                                    <Ionicons name='location' size={18} color='white' />
                                    <Text className='text-gray-200 font-pregular'>{location}</Text>
                                </View>
                                <View className='flex-row items-center gap-1'>
                                    <Ionicons name='star' size={16} color={'yellow'} />
                                    <Text className='text-gray-200 font-pbold'>{rating}</Text>
                                </View>
                            </View>
                        </View>
                    </BlurView>
                </View>
            </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default PlaceCard