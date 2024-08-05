import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StarRating from 'react-native-star-rating-widget'
import CustomInput from '@/components/common/CustomInput'

const ReviewInput = () => {
    const [rating, setRating] = useState(0)
  return (
    <View>
        <CustomInput handleChange={()=>null} placeholder={'Write a review'}/>
        <View className='flex-row justify-between mb-3'>
            <StarRating onChange={(e)=>setRating(e)} rating={rating}/>
            <TouchableOpacity className='bg-blue-500 rounded-2xl '>
                <Text className='font-pbold text-white p-2 px-5 '>ADD</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ReviewInput