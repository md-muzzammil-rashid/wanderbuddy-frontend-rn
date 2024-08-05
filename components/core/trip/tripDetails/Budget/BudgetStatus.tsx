import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import { BarChart } from 'react-native-gifted-charts'
import ProgressBar from '@/components/common/ProgressBar'

const BudgetStatus = () => {
    return (
        <View className='p-5'>
            <View className='flex-row justify-evenly items-center '>
                <View className=' justify-center items-center'>
                    <Text className='text-secondary font-pbold'>Total Budget</Text>
                    <Text className='text-primary font-pextrabold text-lg'>15000</Text>
                </View>
                <View className=' justify-center items-center'>
                    <Text className='text-secondary font-pbold'>Used</Text>
                    <Text className='text-primary font-pextrabold text-lg'>5000</Text>
                </View>
                <View className=' justify-center items-center'>
                    <Text className='text-secondary font-pbold'>Remaining</Text>
                    <Text className='text-primary font-pextrabold text-lg'>10000</Text>
                </View>
            </View>
            <ProgressBar color={'red'} start={5000} end={15000} />
        </View>
    )
}

export default BudgetStatus