import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const FlightCards = ({ flightData }) => {
    const { airlineLogo,
        departureTime,
        arrivalTime,
        flightDuration,
        airlineName,
        price
    } = flightData
    return (
        <View className='bg-white shadow-lg -z-20 my-3 p-6 rounded-3xl'>
            {/* top content */}
            <View className='flex-row justify-between -z-20 items-center'>
                {/* Airline Name with Truncation */}
                <View className='flex-1 pr-2'>
                    <Text
                        className='font-pbold text-orange-500 text-xl'
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        {airlineName}
                    </Text>
                </View>

                {/* Airline Logo in Center */}
                <View className='mx-2 -z-20'>
                    <Image source={{ uri: airlineLogo }} className='w-12 h-12 rounded-full' />
                </View>

                {/* Price on the Right */}
                <View className='flex-1 pl-2'>
                    <Text className='font-pbold text-orange-500 text-xl text-right'>
                        ${price}
                    </Text>
                </View>
            </View>
            {/* Bottom content */}

            <View className='flex-row items-center justify-between'>
                <View className='justify-center items-center'>
                    <Text className='text-base font-pregular text-gray-700'>Depart</Text>
                    <Text className='font-pblack text-xl'>{departureTime}</Text>
                </View>
                <View className='relative justify-center items-center'>
                    <View className='bg-white z-10 border rounded-full p-1 px-3'>
                        <Text className='bg-white'>{flightDuration}</Text>
                    </View>
                    <View className='border h-[1px] bottom-[14px] z-0 border-gray-500 w-36'></View>
                </View>
                <View className='justify-center items-center'>
                    <Text className='text-base font-pregular text-gray-700'>Arrive</Text>
                    <Text className='font-pblack text-xl'>{arrivalTime}</Text>
                </View>
            </View>
        </View>
    )
}

export default FlightCards