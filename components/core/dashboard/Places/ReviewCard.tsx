import { View, Text, Image } from 'react-native'
import React from 'react'
import StarRating from 'react-native-star-rating-widget'
import ReviewInput from './ReviewInput'
'react-native-star-rating-widget'

const ReviewCard = ({ reviewData }) => {
    
    return (
        <View className='flex-row flex-grow  my-2'>
            <View className=' my-1 w-9'>
                <Image src={reviewData?.avatar} className='w-8 h-8 rounded-full' />
            </View>
            <View className='flex-shrink pl-2'>
                <View className='flex-row flex-grow-0   '>
                    <Text className='text-gray-600 font-pmedium '>@{reviewData?.username}</Text>
                    <StarRating onChange={() => undefined} starStyle={{ width: 6 }} starSize={15} rating={reviewData?.rating} />
                </View>
                <View className=' flex-shrink'>
                    <Text className='text-justify font-pregular  '>{reviewData?.review}</Text>
                </View>
            </View>

        </View>
    )
}

export default ReviewCard