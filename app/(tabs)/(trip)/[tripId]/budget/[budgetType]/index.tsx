import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BudgetListByCategory from '../../../../../../components/core/trip/tripDetails/Budget/BudgetListByCategory'
import { budgetCategory } from '@/Utils/constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView edges={['top']}>
    <ScrollView>
      {
        budgetCategory.map(category=>
          <BudgetListByCategory category = {category}/>
        )
      }
    </ScrollView>
    </SafeAreaView>
  )
}

export default index