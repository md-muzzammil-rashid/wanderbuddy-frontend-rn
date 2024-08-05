import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from '@/components/common/CustomInput'
import CustomButton from '@/components/common/CustomButton'
import OTPField from '@/components/common/OTPField'

const ForgotPassword = () => {

    const sendOtp = () => {
        // Call API to send OTP
    }
  return (
    <SafeAreaView>
        <View className='mt-24 p-4'>
            <Text className='pl-2 font-pregular'>Enter your email</Text>
            <CustomInput placeholder={"your-name@gmail.com"}/>
            <TouchableOpacity onPress={()=>sendOtp()}>
            <Text className='font-pbold pl-2 justify-end items-end text-blue-500 text-end '>Send OTP</Text>
            </TouchableOpacity>
            <OTPField/>
            <CustomButton  title={"Reset Password"}/>
        </View>
    </SafeAreaView>
  )
}

export default ForgotPassword