import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomView from '@/components/common/CustomView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, usePathname } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TripHeader = () => {
  const pathName = usePathname()
  const isInvitation = pathName==='/invitations'
  
  return (
    <View className=' flex-row justify-evenly'>
      <TouchableWithoutFeedback onPress={() => router.navigate('(tabs)/(trip)')}>
      <View className={`w-5/12 rounded-xl flex-row items-center justify-center gap-x- border-gray-400 border  my-3  py-3  ${!isInvitation ? "bg-blue-500" : "bg-white"}`}>
        <Ionicons size={16} name={!isInvitation?'airplane':'airplane-outline'} color={!isInvitation?'white':'black'}/>
          <Text className={`mx-2 font-pextrabold ${!isInvitation?'text-white':''}`}>Trips</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {console.log("navigating");
       router.navigate('(tabs)/(trip)/invitations')}}>
        <View className={`w-5/12 rounded-xl flex-row items-center justify-center gap-x- border-gray-400 border  my-3  py-3  ${isInvitation ? "bg-green-500" : "bg-white"}`}>
        <Ionicons size={16} name={isInvitation?'mail-open':'mail'} color={isInvitation?'white':'black'}/>
          <Text className={`mx-2 font-pextrabold ${isInvitation?'text-white':''}`}>Invitation</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default TripHeader