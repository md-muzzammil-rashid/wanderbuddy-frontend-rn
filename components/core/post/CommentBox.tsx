import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import ReplyBox from './ReplyBox'

const CommentBox = ({comment, username, avatar, userId, replies}) => {
    const [showReplies, setShowReply] = useState(true)
  return (
    <View className='p-4 w-full'>
        <View className='bg-white rounded-2xl p-2'>
        <View className='flex-row '>
            <View className=''>
                <Image source={{uri:avatar}} className='w-10 h-10 rounded-full ' />
            </View>
            <View className='px-2  flex-grow flex-shrink'>
            <Text className='font-pextrabold text-sm'>{username}</Text>
            <Text className='font-pregular flex-shrink text-base'>{comment} </Text>
            </View>
            <View className='justify-center items-center m-1 '>
                <Ionicons color={'red'} name='heart' size={16}/>
            </View>

        </View>
            <View> 
                <TouchableOpacity onPress={()=>setShowReply(!showReplies)}>
                    <Text>{showReplies?"Hide Replies":"Show Replies"}</Text>
                </TouchableOpacity>
            {
                showReplies&&
                <View>
                    <ReplyBox comment={comment} username={username} avatar={avatar}  />
                    <ReplyBox comment={comment} username={username} avatar={avatar}  />
                </View>
            }
            </View>
            </View>
    </View>
  )
}

export default CommentBox