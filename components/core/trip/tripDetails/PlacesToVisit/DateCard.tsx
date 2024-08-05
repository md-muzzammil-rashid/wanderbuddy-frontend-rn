import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tripOnNDay } from '@/Redux/Reducers/tripSlice'

const DateCard = ({date, day}) => {
  const dispatch = useDispatch()
  const {selectedDay} = useSelector(state=>state?.trip) 
  return (
    <TouchableOpacity onPress={()=>dispatch(tripOnNDay(day))} activeOpacity={0.9}>
    <View className={`${selectedDay==day ? "border border-gray-200 roundedx border-b-0" : "bg-white/80"}  p-4  justify-center items-center `}>
      <Text className='font-pblack text-primary'>Day {day}</Text>
      <Text className='font-pbold text-secondary/80'>{date.split('-')[2]}-{date.split('-')[1]}-{date.split('-')[0]}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default DateCard