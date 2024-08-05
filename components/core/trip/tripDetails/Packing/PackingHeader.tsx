import { View, Text } from 'react-native'
import React from 'react'

const PackingHeader = () => {
    return (
        <View className='bg-secondary/80 p-4 flex-row'>
            <View className='px-3'>
                <Text className='text-white text-lg font-bold'>Edit</Text>
            </View>
            <View className='px-2 flex-grow'>
                <Text className='text-white text-lg font-bold'>Name</Text>
            </View>
            <View className='max-w-12 flex-row justify-between'>
                <View className='px-2'>
                    <Text className='text-white text-lg font-bold'>Qty</Text>
                </View>
                <View className='px-3'>
                    <Text className='text-white text-lg font-bold'>Packed</Text>
                </View>
            </View>
        </View>
    )
}

export default PackingHeader