import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const CustomInputWithSend = ({ handleChange, placeholder, handleSend, value , color = "rgb(109 109 109)" }) => {
    return (
        <View className='relative h-16'>
            <TextInput 
                onChangeText={handleChange}
                className={` pr-[120px]} p-4 bg-white border-gray-200 border my-2 rounded-2xl py-4 w-full`} 
                value={value}
                placeholder={placeholder} 
                style={{ paddingRight: 40 , paddingLeft: 15 }} ></TextInput>
                <TouchableOpacity 
                    className='absolute right-3 top-[20px]' 
                    onPress={handleSend}>
                    <Ionicons name={'send'} size={24} color='gray' />
                </TouchableOpacity> 
        </View>

    )
}

export default CustomInputWithSend