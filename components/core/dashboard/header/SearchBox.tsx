import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import CustomInput from '@/components/common/CustomInput'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const SearchBox = () => {
  return (
    <TouchableWithoutFeedback  onPress={()=>router.push('(tabs)/search')}>
    <View className='mx-4   border my-2 border-gray-200  h-14 justify-center shadow-md items-center relative rounded-2xl bg-white' >
        <View className='absolute left-3 top-4'>
        <Ionicons name='search' size={25} />
        </View>
        <Text className='text-gray-500 font-pregular text-base '>Where are you going?</Text>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default SearchBox