import { View, Text } from 'react-native'
import React, { useState } from 'react'

const OTPField = () => {
    const [otpValue, setOtpValue] = useState({ 
        0:"3",
        1:"",
        2:"",
        3:"",
        4:"",
        5:"",
    })
    
  return (
    <View className='flex-row justify-center my-4'>
        {
            Object.values(otpValue).map(value=>
                <View className=' h-12 mx-1 bg-white w-12 rounded-lg justify-center items-center border border-gray-300 '>
                    <Text>{value}</Text>
                </View>
        )
        }
    </View>
  )
}

export default OTPField