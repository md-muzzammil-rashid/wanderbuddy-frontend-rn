import { View, Text } from 'react-native'
import React from 'react'

const ProgressBar = ({color, start, end}) => {

    const percentage = (start / end) * 100;
  return (
    <View className='p-3 px-5'>

    <View  className='border relative border-gray-200 h-[26] bg-gray-300  overflow-hidden rounded-2xl'>
        <View style={{width:`${percentage}%`, backgroundColor:color}} className={` h-6  rounded-2xl `} >
        </View>
            <Text className='absolute left-3 top-[2] text-gray-200 font-psemibold'>
                {start}
            </Text>
            <Text className='absolute right-3 top-[2] text-gray-600 font-psemibold'>
                {end}
            </Text>
    </View>

    </View>
  )
}

export default ProgressBar