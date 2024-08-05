import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import car from '@/assets/images/car.jpg'

const TripCard = ({title, destinationImage, startDate, collaborator}) => {
    
  return (
    <View className='flex-row my-2   px-3 py-3 mx-3 bg-white rounded-2xl shadow-lg shadow-black/30'>
      <View className='w-16 h-16  rounded-full'>
        <Image source={{uri:destinationImage}} className='w-16 h-16 rounded-full'/>
      </View>
      <View className='justify-center  h-[72] ml-3 '>
        <Text className='font-pblack text-lg'>{title}</Text>
        <Text className='font-pbold text-base'>{startDate.split('T')[0].split('-')[2]}-{startDate.split('T')[0].split('-')[1]}-{startDate.split('T')[0].split('-')[0]}</Text>
        <View className='overflow-clip  w-full pr-20'>
        <FlatList data={collaborator.slice(0,8)} horizontal renderItem={(name)=><Text className='px-1 text-ellipsis overflow-ellipsis'>{name.item.profile.displayName}</Text>}/>
        {/* <Text>Ayaan</Text> */}
        </View>
      </View>
    </View>
  )
}

export default TripCard