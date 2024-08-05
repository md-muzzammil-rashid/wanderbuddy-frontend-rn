import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomView = ({children}:{children:any}) => {
  return (
    <SafeAreaView className=''>
        <ScrollView className='h-full  relative'>
            {children}
        </ScrollView>
    </SafeAreaView>
  )
}

export default CustomView