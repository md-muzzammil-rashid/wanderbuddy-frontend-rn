import { View, Text } from 'react-native'
import React from 'react'
import ColorPair from '@/Utils/ColorPair'
import { categoryIcons } from '@/constants/CategoriesIcons'
import { Image } from 'react-native'
const TransactionTile = ({ amount, category="Shopping", name="shopping"}) => {
    return (
      <View className='bg-white flex-row my-2 justify-between rounded-3xl p-4'>
  
      <View style={{backgroundColor:ColorPair[category]?.background_color}} className={`p-4  h-11 w-11 rounded-xl box-border ${'bg-'+ColorPair[category]?.background_color}] items-center justify-center `}>
        <Image source={categoryIcons[category]} tintColor={ColorPair[category]?.icon_color} className='max-w-[20px] max-h-[20px]' resizeMode='cover' />
      </View>
  
      <View className='justify-start  px-3 flex-grow'>
        <Text className='text-primary  font-psemibold text-base'>{name}</Text>
        <Text className='text-secondary text-base'>12:25 AM</Text>
      </View>
  
      <View>
        <Text className={`text-red font-pbold text-lg`}>{"-"} &#8377; {amount} </Text>
      </View>
  
      </View>
  )
}

export default TransactionTile