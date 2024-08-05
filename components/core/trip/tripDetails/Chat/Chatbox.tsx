import { View, Text, Image } from 'react-native'
import React from 'react'

const Chatbox = ({chat, currentUser, avatar, username})=> {

    return (
    <View className={`${chat.item.senderId==currentUser&& "justify-end"} flex-row my-2 mx-3 `}>
      {
        chat.item.senderId != currentUser &&
    <Image className='h-8 w-8 rounded-full' src={avatar}/>
    }
      <View className={`rounded-3xl ${chat.item.senderId != currentUser?"bg-blue-500 rounded-tl-sm":"bg-gray-200 rounded-tr-sm"} mx-3 p-2 pb-3 px-4  `}>
    {
      currentUser != chat.item.senderId &&
    <Text className={`${currentUser==chat.item.senderId?"text-black":'text-white'} font-psemibold`}>{username}</Text>
    }
    <Text className={`${currentUser==chat.item.senderId?"text-black":' text-white'}
      font-pregular
    `}>{chat.item.content}</Text>
    </View>
    </View>
  )
}

export default Chatbox