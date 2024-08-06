import { View, Text, Image } from 'react-native'
import React from 'react'

const Chatbox = ({chat, currentUser})=> {
    
    return (
    <View className={`${chat.sender._id==currentUser? "justify-end pl-4":"pr-4 "} flex-row my-2 mx-3 `}>
      {
        chat.sender._id != currentUser &&
    <Image className='h-8 w-8 rounded-full' src={chat?.sender?.profile?.avatar}/>
    }
      <View className={`rounded-3xl ${chat.sender._id != currentUser?"bg-blue-500 rounded-tl-sm":"bg-gray-200 rounded-tr-sm"} mx-3 p-2 pb-3 px-4  `}>
    {
      currentUser != chat.sender._id &&
    <Text className={`${currentUser==chat.senderId?"text-black":'text-white'} font-psemibold`}>{chat.sender.profile.displayName}</Text>
    }
    <Text className={`${currentUser==chat.sender._id?"text-black":' text-white'}
      font-pregular
    `}>{chat.message}</Text>
    </View>
    </View>
  )
}

export default Chatbox