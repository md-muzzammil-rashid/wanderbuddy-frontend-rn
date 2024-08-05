import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-collapsible-tab-view'
import Companions from './Companions'
import { useLocalSearchParams } from 'expo-router'
import { useSelector } from 'react-redux'

const Info = () => {
  const tripData = useSelector(state=>state?.trip?.trip)
  return (
    <ScrollView>
      <View className='bg-white m-3 rounded-2xl overflow-clip border-yellow-500 border'>
        <View className='bg-yellow-500 p-2 rounded-t-2xl'>
          <Text className='text-white text-lg font-pbold'>Trip Details</Text>
        </View>
        <View className='p-2'>
          <View className='flex-row my-1'>
            <Text className='text-secondary  w-32 font-pbold text-base'>
              Title 
            </Text>
            <Text className='text-primary font-pextrabold text-base'>
              {tripData?.title}
            </Text>
          </View>
          <View className='flex-row my-1'>
            <Text className='text-secondary  w-32 font-pbold text-base'>
              Destination 
            </Text>
            <Text className='text-primary font-pextrabold text-base'>
              {tripData?.destination}
            </Text>
          </View>
          <View className='flex-row my-1'>
            <Text className='text-secondary  w-32 font-pbold text-base'>
              Start Date 
            </Text>
            <Text className='text-primary font-pextrabold text-base'>
              29 April 2024
            </Text>
          </View>
          <View className='flex-row my-1'>
            <Text className='text-secondary  w-32 font-pbold text-base'>
              End Date 
            </Text>
            <Text className='text-primary font-pextrabold text-base'>
              12 May 2024
            </Text>
          </View>
          <View className='flex-row my-1'>
            <Text className='text-secondary  w-32 font-pbold text-base'>
              Total Days 
            </Text>
            <Text className='text-primary font-pextrabold text-base'>
              14
            </Text>
          </View>
          <View className='flex-row my-1'>
            <Text className='text-secondary  w-32 font-pbold text-base'>
              Planned By - 
            </Text>
            <Text className='text-primary font-pextrabold text-base'>
              Ayaan Rashid
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Companions companions={tripData?.collaborator} />
      </View>
    </ScrollView>
  )
}

export default Info