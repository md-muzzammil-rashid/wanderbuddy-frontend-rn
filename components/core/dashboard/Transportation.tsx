import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-collapsible-tab-view'
import { areoplane, train} from '@/constants/Image'
import { router } from 'expo-router'


const Transportation = () => {
  
  return (
    <ScrollView>
      <TouchableOpacity onPress={()=>router.push("(transportation)/flight")} className='border border-cyan-500 bg-cyan-400 p-5 rounded-3xl m-4'>
      <Image source={areoplane} className='h-40 w-full ' resizeMode='contain'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>router.push("(transportation)/train")} className='border border-cyan-500 overflow-hidden  rounded-3xl m-4'>
      <Image source={train} className='h-48 w-full ' resizeMode='cover'/>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Transportation