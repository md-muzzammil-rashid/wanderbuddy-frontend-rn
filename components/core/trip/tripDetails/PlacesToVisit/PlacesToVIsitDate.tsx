import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import DateCard from './DateCard'
import generateDateArray from '@/Utils/generateDateArray'
import { useDispatch, useSelector } from 'react-redux'
import { tripOnNDay } from '@/Redux/Reducers/tripSlice'

const PlacesToVIsitDate = ({ startDate, totalDays }) => {
  const {selectedDay} = useSelector(state=>state?.trip)
  
  const dispatch = useDispatch()
  const dates = generateDateArray(startDate || '2024-05-23', totalDays)
  return (
    <View className='bg-gray-50'>
    <FlatList
      data={dates}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={()=>dispatch(tripOnNDay(0))}
          activeOpacity={0.9}>
          <View className={`${!selectedDay ?"bg-green-500": "bg-red-600"} p-4 pl-8 bg-white/80 justify-center items-center `}>
            <Text className='font-pblack text-primary'>All</Text>
            <Text className='font-pbold text-secondary/80'>Trips</Text>
          </View>
        </TouchableOpacity>
      }
      renderItem={(date) => <DateCard date={date.item.date} day={date.item.day} />}
    />
    </View>
  )
}

export default PlacesToVIsitDate