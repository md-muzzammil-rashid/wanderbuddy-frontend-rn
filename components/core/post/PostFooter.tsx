import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import commentIcon from '@/assets/images/comment.png'
import heart from '@/assets/images/heart.png'
import heartFilled from '@/assets/images/heart-filled.png'
import { likePostAPI } from '@/Services/Operations/PostAPI'
import { router } from 'expo-router'
const PostFooter = ({liked, caption, id, totalLikes, hideComment = false}) => {
  const [isLiked, setIsLiked] = useState(liked)
  const [totalLike, setTotalLike  ] = useState(totalLikes)

  const handleLike = async () => {
     await likePostAPI(id);
     isLiked?setTotalLike(prev=>prev-1):setTotalLike(prev=>prev+1);
     setIsLiked(!isLiked)
  }
  return (
    <View className='m-2'>
      <View className='flex-row w-full'>
        <TouchableOpacity onPress={handleLike}>
          <View className=''>
        {
          isLiked ? (
            <View className='-pt-[40px]'>
            <Image source={heartFilled} tintColor={'red'} className='h-8 w-8' />
            </View>
          ) : (
            <Image source={heart} className='h-8 w-8' />
          )
        }
  
        </View>
        </TouchableOpacity>
        {
          !hideComment &&
          <TouchableOpacity onPress={()=>router.push(`(tabs)/(post)/${id}`)}>
        <View className='pt-[3px] ml-4'>
        <Image  source={commentIcon}  className=' h-[25px] w-[25px]  rotate-90 p-2 aspect-square' />
        </View>
        </TouchableOpacity>
        }
      </View>
      {
        totalLike>0&&
        <Text className='mx-2 font-pregular'>{totalLike>0&&totalLike} {totalLike==1?"like":totalLike>1&&"likes"}</Text>
      }
      {
        caption?.length>0 &&
        <Text className='font-pregular'>{caption}</Text>
      }
    </View>
  )
}

export default PostFooter