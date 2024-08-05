import { View, Text } from 'react-native'
import React from 'react'
import ColorPair from '@/Utils/ColorPair'

const BudgetListByCategory = ({category}) => {
  return (

    <View style={{borderRadius:23, }} className='  m-3 overflow-hidden'>
    <View className=' flex-row rounded-t-2xl p-4' style={{backgroundColor: ColorPair[category]?.icon_color}}>
        <Text className='text-lg flex-grow flex-shrink whitespace-nowrap text-ellipsis  font-pbold text-white'>{category}</Text>
    <Text className='font-psemibold flex-shrink-0  text-white text-lg w-24 text-center ' >Alloted</Text>
    <Text className='font-psemibold flex-shrink-0 text-white text-center w-24 text-lg' >User</Text>
    </View>
    {
        [1,2,3,4].map(()=>(
            <View className='flex-row my-[3] bg-white p-3 '>
                <Text className='font-psemibold flex-grow text-black text-sm' >Rent (4000 * 7 Days)</Text>
                <Text className='font-psemibold text-black text-sm w-24 text-center ' >6000</Text>
                <Text className='font-psemibold text-black text-center w-24 text-sm' >00</Text>
            </View>
        ))
    }
    </View>

  )
}

export default BudgetListByCategory