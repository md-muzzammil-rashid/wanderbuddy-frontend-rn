import { View, Text } from 'react-native'
import React from 'react'
import ColorPair from '@/Utils/ColorPair'

const BudgetCategory = ({data}:{data:[{name:string, color:string, amount:number}]}) => {
    return(
        data.map((item:{name:string, color:string, amount:number}) =>
           (
          <View className='flex-row p-1 gap-x-3 items-center m-1' key={item.name}>
            <View style={{ backgroundColor: ColorPair[item.name].icon_color }} className='w-3 h-3 rounded-full'>
            </View>
            <View className='justify-between flex-row '>
              <View className='flex-grow'>
                <Text className='font-bold'>{item.name}</Text>
              </View>
              <View className='px-3'>
                <Text className=' w-12 '>{item.amount}</Text>
              </View>
            </View>
          </View>
        ))
    )
      
}

export default BudgetCategory