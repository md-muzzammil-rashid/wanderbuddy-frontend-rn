import { View, Text, TouchableWithoutFeedback, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { homeBackground } from '@/constants/Image';
import GallerySecondary from '@/components/core/dashboard/Places/GallerySecondary';
import About from '@/components/core/dashboard/Places/About';
import StarRating from 'react-native-star-rating-widget';
import Tags from '@/components/core/dashboard/Places/Tags';
import Review from '@/components/core/dashboard/Places/Review';

const PlaceDetails = () => {
  const data = useLocalSearchParams();

  return (
    <SafeAreaView className='w-full' >

        <Review/>
    </SafeAreaView>
  )
}

export default PlaceDetails