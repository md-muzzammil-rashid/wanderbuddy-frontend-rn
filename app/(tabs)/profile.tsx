import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import CustomView from '@/components/common/CustomView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getItemAsync } from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'

const profile = () => {

  return (
    <SafeAreaView edges={['top']} className='h-full'>
      <ScrollView>
        <Text>{'a'}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile