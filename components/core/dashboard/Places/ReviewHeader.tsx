import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-collapsible-tab-view'
import { homeBackground } from '@/constants/Image'
import StarRating from 'react-native-star-rating-widget'
import GallerySecondary from './GallerySecondary'
import About from './About'
import Tags from './Tags'
import ReviewInput from './ReviewInput'

const ReviewHeader = () => {
  return (
    <View className=' w-full bg-white'> 
    <Image source={homeBackground} className='h-96 w-full mb-4 rounded-b-[30px]' resizeMode='cover' />
    <View className='px-3'>
    <View>
      <Text className='font-pblack text-3xl'>Santorini</Text>
      <Text className='font-pregular text-lg'>Santorini, Greece</Text>
    </View>
    <View className='flex-row items-end gap-x-3'>
    <StarRating starStyle={{width:13}} rating={4.8} starSize={24} onChange={()=>4} />
      <Text>4.8 • 3054 ratings</Text>
    </View>

    {/* <View className=''> */}
      <About />
      <GallerySecondary />
    {/* </View> */}
    <Tags/>
    <View>
            <View>
            <Text className='font-pbold text-2xl'>Public Reviews</Text>
            </View>
            <ReviewInput/>
        </View>
    </View>
  </View>
  )
}

export default ReviewHeader