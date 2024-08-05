import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '@/Utils/constants'
import { Ionicons } from '@expo/vector-icons'
import { clip } from '@/constants/Image'
import ToggleSwitch from 'toggle-switch-react-native'

const PlaceCard = ({ index,data }: { index: number, data:object }) => {
  
  return (
    <View className='my-4 relative'>
      <View className='bg-white min-h-[30px] pr-5 py-3 ml-16 pl-8 -z-50 rounded-xl rounded-br-[30] mr-3 shadow-md shadow-gray-500'>
        <View className=' gap-y-2 overflow-hidden'>
          <View className='flex-row  justify-between'>
            <Text className='font-pextrabold text-primary text-xl'>{data?.place}</Text>
            <Text className='font-pextrabold text-primary text-sm '>{data?.time}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='font-pbold text-secondary text-lg'>Location</Text>
            <Text className='font-pbold text-ellipsis  text-lg ml-2'>{data?.location}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='font-pbold text-secondary text-lg'>Visited:</Text>
            <ToggleSwitch isOn={data?.visited} />
          </View>
          {
            data?.notes?.length > 0 &&
          <View className=' justify-between'>
            <Text className='font-pbold text-secondary text-base'>Notes:</Text>
            <Text className='font-pregular text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis voluptatibus doloribus, saepe doloremque tempore.</Text>
          </View>
          }
        </View>
      </View>



      <View className='absolute  ml-1'>
        <Image source={clip} className='h-14 w-20' tintColor={colors[index % 9]} />
        <View className='bg-white h-2 w-2 rounded-full absolute left-[5] top-[24]'>
        </View>
        <View className='absolute right-[7] top-4'>
          <Ionicons name='location-outline' size={24} color={'white'} />
        </View>
      </View>

    </View>
  )
}

export default PlaceCard