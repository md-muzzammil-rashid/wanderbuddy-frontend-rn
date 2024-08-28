import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const TrainCard = ({ trainNumber,
  departureTime,
  arrivalTime,
  trainName,
  to,
  from,
  duration,
  trainType }) => {

  return (
    <View className='bg-white p-6 my-2 mx-4 rounded-3xl'>
      <View>
        <View className='flex-row items-center'>
          <Text className='font-pbold text-base'>{trainName}</Text>
          <Text>({trainNumber})</Text>
        </View>
        <View className='flex-row justify-between '>
          <View className='justify-center text-center'>
            <Text className='text-center text-gray-500'>Depart</Text>
            <Text className='text-center font-pbold text-lg'>{departureTime}</Text>
            <Text className='text-center text-gray-500 font-pregular'>{from}</Text>
          </View>
          <View className='justify-center items-center relative'>
            <Ionicons name='train' className='z-10' color={'black'} size={18} />
            <View className='absolute w-40 -z-20  border-gray-400 '>
              <Text className='text-center text-gray-400 text-xl font-pregular'>-------------</Text></View>
            <Text className='absolute bottom-0 w-32 text-center text-gray-500 font-pregular'>{duration}</Text>
          </View>
          <View className='justify-center text-center'>
            <Text className='text-center text-gray-500'>Arrive</Text>
            <Text className='text-center font-pbold text-lg'>{arrivalTime}</Text>
            <Text className='text-center text-gray-500 font-pregular'>{to}</Text>
          </View>
      
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={trainType}
        renderItem={item =>
          <View style={item.item.available.slice(0,3)=="AVL" ||item.item.available.slice(0,3)=="RAC" ?styles.available:item.item.available.slice(0,2)=="WL"?styles.waiting:styles.notAvailable} className='mt-4 border py-3 px-4 mx-2 rounded-xl  w-28'>
            <View className='flex-row justify-between items-center '>
              <Text>{item.item.class}</Text>
              <Text>₹{item.item.price}</Text>
            </View>
            <View>
              <Text style={item.item.available.slice(0,3)=="AVL" ||item.item.available.slice(0,3)=="RAC" ?styles.available:item.item.available.slice(0,2)=="WL"?styles.waiting:styles.notAvailable}  className='font-pbold'>{item.item.available}</Text>
            </View>
          </View>
        }
      />
    </View>
  )
}

export default TrainCard

const styles = StyleSheet.create({
    available:{
      backgroundColor: "#ddf7be",
      borderColor: '#32c93f',
      color:'green'
    },
    waiting:{
      backgroundColor: "#ffebc8",
      borderColor: 'orange',
      color:"orange"
    },
    notAvailable:{
      backgroundColor: "#ffc9c8",
      borderColor: 'red',
      color:'red'
    }

})