import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-collapsible-tab-view'
import PackingTile from './Packing/PackingTile'
import PackingHeader from './Packing/PackingHeader'
import CustomModal from '@/components/common/CustomModal'
import AddPacking from './Packing/AddPacking'
import {get, getPackingItemsAPI} from '@/Services/Operations/TripAPI'
import { useLocalSearchParams } from 'expo-router'
import NoDataFound from '@/components/common/NoDataFound'
 
const PackingList = () => {

  const [packingItems, setPackingItems] = useState([])
  const [addPackingVisible, setAddPackingVisible] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const {tripId} = useLocalSearchParams()
  const getPackingItems = async()=>{
    const res = await getPackingItemsAPI(tripId)
    setPackingItems([])
    setRefreshing(false)
    setPackingItems(res?.data?.items)
  }

  useEffect(()=>{
    getPackingItems()
  },[])

  useEffect(()=>{
    if(refreshing){
      console.log('refreshing data');
      getPackingItems()
    }
  },[refreshing])


  return (
    <View className='relative'>
      <CustomModal visible={addPackingVisible}>
        <AddPacking visible={addPackingVisible} setRefreshing={setRefreshing} setVisible={setAddPackingVisible} />
      </CustomModal>
      <View className='absolute bottom-5 right-5 z-50'>
        <TouchableOpacity onPress={()=>setAddPackingVisible(!addPackingVisible)} className='rounded-full h-16 w-16 justify-center items-center bg-blue-500 z-50'>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    <FlatList
      ListHeaderComponent={() => (
        <PackingHeader/>
      )}
      data={packingItems}
      renderItem={({ item }) => <PackingTile setPackingItems={setPackingItems} item={item} />}
      ListEmptyComponent={<NoDataFound/>}
      ListFooterComponent={()=>(
        <View className='p-6'>
          <Text className='w-full text-center'></Text>
        </View>
      )}
    />
    </View>
  )
}

export default PackingList