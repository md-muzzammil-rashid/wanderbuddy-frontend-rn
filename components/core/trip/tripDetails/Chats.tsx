import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList,  } from 'react-native-collapsible-tab-view'
import CustomInput from '@/components/common/CustomInput'
import Chatbox from './Chat/Chatbox'
import CustomInputWithSend from '@/components/common/CustomInputWithSend'

const Chats = () => {
  const currentUser = '60c72b2f4f1a2c001fef1a99'
  const dummyChat = {
    "chatRoom": {
      "_id": "60c72b2f4f1a2c001fef1a9a",
      "name": "Group Chat",
      "participants": [
        {
          "_id": "60c72b2f4f1a2c001fef1a97",
          "username": "Alice",
          "email": "alice@example.com",
          "avatar": "https://randomuser.me/api/portraits/women/1.jpg",

        },
        {
          "_id": "60c72b2f4f1a2c001fef1a98",
          "username": "Bob",
          "email": "bob@example.com",
          "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          "_id": "60c72b2f4f1a2c001fef1a99",
          "username": "Charlie",
          "email": "charlie@example.com",
          "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          "_id": "60c72b2f4f1a2c001fef1a9a",
          "username": "Diana",
          "email": "diana@example.com",
          "avatar": "https://randomuser.me/api/portraits/women/3.jpg",
        }
      ],
      "createdAt": "2024-07-04T12:00:00Z",
      "updatedAt": "2024-07-04T12:30:00Z"
    },
    "messages": [
      {
        "_id": "60c72b2f4f1a2c001fef1ab4",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a97",
        "content": "Can't wait to hear all about it.",
        "createdAt": "2024-07-04T12:30:00Z",
        "updatedAt": "2024-07-04T12:30:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1ab3",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a9a",
        "content": "That sounds super exciting!",
        "createdAt": "2024-07-04T12:29:00Z",
        "updatedAt": "2024-07-04T12:29:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1ab2",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a99",
        "content": "Mainly web development and some AI stuff.",
        "createdAt": "2024-07-04T12:28:00Z",
        "updatedAt": "2024-07-04T12:28:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1ab1",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a98",
        "content": "That's great! What kind of projects will you be working on?",
        "createdAt": "2024-07-04T12:27:00Z",
        "updatedAt": "2024-07-04T12:27:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1ab0",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a99",
        "content": "I will be working as a software engineer at a tech startup.",
        "createdAt": "2024-07-04T12:26:00Z",
        "updatedAt": "2024-07-04T12:26:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aaf",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a97",
        "content": "Tell us more about it.",
        "createdAt": "2024-07-04T12:25:00Z",
        "updatedAt": "2024-07-04T12:25:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aae",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a9a",
        "content": "That's awesome news!",
        "createdAt": "2024-07-04T12:24:00Z",
        "updatedAt": "2024-07-04T12:24:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aad",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a98",
        "content": "Congrats, Charlie!",
        "createdAt": "2024-07-04T12:23:00Z",
        "updatedAt": "2024-07-04T12:23:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aac",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a99",
        "content": "Just got a new job!",
        "createdAt": "2024-07-04T12:22:00Z",
        "updatedAt": "2024-07-04T12:22:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aab",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a97",
        "content": "What else is new with everyone?",
        "createdAt": "2024-07-04T12:21:00Z",
        "updatedAt": "2024-07-04T12:21:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aaa",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a98",
        "content": "Looking forward to it!",
        "createdAt": "2024-07-04T12:20:00Z",
        "updatedAt": "2024-07-04T12:20:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa9",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a99",
        "content": "See you all then!",
        "createdAt": "2024-07-04T12:19:00Z",
        "updatedAt": "2024-07-04T12:19:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa8",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a9a",
        "content": "Perfect!",
        "createdAt": "2024-07-04T12:18:00Z",
        "updatedAt": "2024-07-04T12:18:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa7",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a97",
        "content": "Let's meet online at 3 PM?",
        "createdAt": "2024-07-04T12:17:00Z",
        "updatedAt": "2024-07-04T12:17:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa6",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a98",
        "content": "Sounds good to me!",
        "createdAt": "2024-07-04T12:16:00Z",
        "updatedAt": "2024-07-04T12:16:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa5",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a99",
        "content": "How about Among Us?",
        "createdAt": "2024-07-04T12:15:00Z",
        "updatedAt": "2024-07-04T12:15:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa4",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a97",
        "content": "What game should we play?",
        "createdAt": "2024-07-04T12:14:00Z",
        "updatedAt": "2024-07-04T12:14:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa3",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a98",
        "content": "Me too, let's do it.",
        "createdAt": "2024-07-04T12:13:00Z",
        "updatedAt": "2024-07-04T12:13:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa2",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a9a",
        "content": "I'm in!",
        "createdAt": "2024-07-04T12:12:00Z",
        "updatedAt": "2024-07-04T12:12:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa1",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a99",
        "content": "Anyone up for a game later?",
        "createdAt": "2024-07-04T12:11:00Z",
        "updatedAt": "2024-07-04T12:11:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1aa0",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a98",
        "content": "Same here, just relaxing.",
        "createdAt": "2024-07-04T12:10:00Z",
        "updatedAt": "2024-07-04T12:10:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1a9f",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a97",
        "content": "Not much, just enjoying the day.",
        "createdAt": "2024-07-04T12:09:00Z",
        "updatedAt": "2024-07-04T12:09:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1a9e",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a9a",
        "content": "Hi guys, what's up?",
        "createdAt": "2024-07-04T12:08:00Z",
        "updatedAt": "2024-07-04T12:08:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1a9d",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a99",
        "content": "Hello everyone!",
        "createdAt": "2024-07-04T12:07:00Z",
        "updatedAt": "2024-07-04T12:07:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1a9c",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a98",
        "content": "Hi Alice!",
        "createdAt": "2024-07-04T12:06:00Z",
        "updatedAt": "2024-07-04T12:06:00Z"
      },
      {
        "_id": "60c72b2f4f1a2c001fef1a9b",
        "chatRoomId": "60c72b2f4f1a2c001fef1a9a",
        "senderId": "60c72b2f4f1a2c001fef1a97",
        "content": "Hey everyone!",
        "createdAt": "2024-07-04T12:05:00Z",
        "updatedAt": "2024-07-04T12:05:00Z"
      },

    ]
  }
  return (
    <>
    <FlatList
      inverted
      ListFooterComponent={()=>{
        return (
          <View className='h-16'>

          </View>
        )
      }}
      data={dummyChat.messages}
      renderItem={(chat)=>
        <Chatbox 
          avatar={dummyChat.chatRoom.participants.filter(user=>user._id==chat.item.senderId)[0].avatar} 
          currentUser = {currentUser} 
          chat={chat} 
          username={dummyChat.chatRoom.participants.filter(user=>user._id == chat.item.senderId)[0].username}  
        />
      }
    />
    <View className='px-2'>
    <CustomInputWithSend placeholder={'Message'}/>
    </View>
    </>
  )
}

export default Chats