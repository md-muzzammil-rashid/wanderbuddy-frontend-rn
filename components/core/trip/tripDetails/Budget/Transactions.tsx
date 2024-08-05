import { View, Text } from 'react-native'
import React from 'react'
import TransactionTile from './TransactionTile'

const Transactions = () => {
  return (
    <View className='bg-white rounded-xl '>
      {
        [2,3,4,5,6,,7,5,4,3,2,2,4,5,6]
        .map(item=>
            <TransactionTile amount={123} />
        )
      }
    </View>
  )
}

export default Transactions