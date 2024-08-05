import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { PieChart } from 'react-native-gifted-charts'
import { ScrollView } from 'react-native-collapsible-tab-view'
import { budgetCategory, dummyDataforBudget } from '@/Utils/constants'
import BudgetCategory from './Budget/BudgetCategory'
import BudgetStatus from './Budget/BudgetStatus'
import Transactions from './Budget/Transactions'
import BudgetListByCategory from './Budget/BudgetListByCategory'
import { router } from 'expo-router'

const Budget = () => {
  const [isPersonal, setIsPersonal] = useState(false)
  const dummyData = {

  }
  return (
    <ScrollView>
      <View className='flex-row pt-4 justify-center items-center'>
        <TouchableOpacity onPress={()=>setIsPersonal(true)} className={`${isPersonal?"bg-black":"bg-gray-300  border-gray-400"} mx-2 w-32 p-3 rounded-2xl border`}>
          <Text className={` ${isPersonal?"text-white":"text-secondary/60"} text-base text-center  font-pbold`}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setIsPersonal(false)} className={`${!isPersonal?"bg-black":"bg-gray-300  border-gray-400"} mx-2 w-32 p-3 rounded-2xl border`}>
          <Text className={` ${!isPersonal?"text-white":"text-secondary/60"} text-base text-center  font-pbold`}>Personal</Text>
        </TouchableOpacity>

      </View>
      <View className='justify-center items-center mt-3 my-6'>
        <PieChart
          donut
          isAnimated
          animationDuration={1000}
          focusOnPress
          extraRadiusForFocused={5}
          data={[{ value: 22, color: '#177af3', text: 'some text', },
          { value: 22, color: '#ff5455', text: 'some text' },
          { value: 12, color: 'yellow', text: 'some text' },
          { value: 4, color: 'red', text: 'some text' },

          ]}
        />

      </View>
      
      <View className='bg-white mx-3 py-3 rounded-xl border border-gray-200'>
        <BudgetStatus/>
        <BudgetCategory data={dummyDataforBudget}/>
        <View className='justify-center items-center'>
          <TouchableOpacity onPress={()=>router.push("(tabs)/(trip)/tripId/budget/personal/")}>
            <Text className='font-pbold '>View in Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className='m-3'>

        <Transactions/>
      </View>
    </ScrollView>
  )
}

export default Budget