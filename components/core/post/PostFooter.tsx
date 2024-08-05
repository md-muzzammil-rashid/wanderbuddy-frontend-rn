import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import commentIcon from '@/assets/images/comment.png'
import heart from '@/assets/images/heart.png'
import heartFilled from '@/assets/images/heart-filled.png'
const PostFooter = ({liked}) => {
  const [isLiked, setIsLiked] = useState(liked)
  return (
    <View className='m-2'>
      <View className='flex-row w-full'>
        <TouchableOpacity onPress={()=>setIsLiked(!isLiked)}>
          <View className=''>
        {
          isLiked ? (
            <View className='-pt-[40px]'>
            <Image source={heartFilled} tintColor={'red'} className='h-8 w-8' />
            <Text>2234</Text>
            </View>
          ) : (
            <Image source={heart} className='h-8 w-8' />
          )
        }
        </View>
        </TouchableOpacity>
        <View className='pt-[3px] ml-4'>
        <Image source={commentIcon}  className=' h-[25px] w-[25px]  rotate-90 p-2 aspect-square' />
        </View>
      </View>
      <Text className='font-pregular'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam, ut delectus nobis placeat. Et, expedita!</Text>
    </View>
  )
}

export default PostFooter