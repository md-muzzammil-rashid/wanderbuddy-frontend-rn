import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import GalleryHeaderSecondary from './GalleryHeaderSecondary'
import { onboarding1, onboarding2, onboarding3, onboarding4 } from '@/constants/Image'
import {} from 'react-native-image-viewing'
import EnhancedImageViewing from 'react-native-image-viewing/dist/ImageViewing'

const GallerySecondary = () => {
  const [visible, setVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <View>
        <GalleryHeaderSecondary/>
        <View>
          <EnhancedImageViewing presentationStyle='overFullScreen' visible={visible} onRequestClose={()=>setVisible(!visible)} imageIndex={imageIndex} images={[onboarding4,onboarding1, onboarding2, onboarding3, ]} />
          
        </View>
        <View className='flex-row justify-evenly my-2'>
            <TouchableWithoutFeedback onPress={()=>{setImageIndex(0), setVisible(true)}}><Image source={onboarding4} className='h-24 w-24 rounded-2xl '/></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{setImageIndex(1), setVisible(true)}}><Image  source={onboarding1} className='h-24 w-24 rounded-2xl '/></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{setImageIndex(2), setVisible(true)}}><Image source={onboarding2} className='h-24 w-24 rounded-2xl '/></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{setImageIndex(3), setVisible(true)}}><Image source={onboarding3} className='h-24 w-24 rounded-2xl '/></TouchableWithoutFeedback>
        </View>
    </View>
  )
}

export default GallerySecondary