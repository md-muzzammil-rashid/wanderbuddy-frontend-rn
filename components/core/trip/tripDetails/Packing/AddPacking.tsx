import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '@/components/common/CustomButton';
import CustomInput from '@/components/common/CustomInput';
import { Ionicons } from '@expo/vector-icons';
import { addPackingItemsAPI } from '@/Services/Operations/TripAPI';
import { useLocalSearchParams } from 'expo-router';

const AddPacking = ({visible, setVisible, setRefreshing}) => {
  const [packingItem, setPackingItem] = useState({itemName:"", quantity:null})
  const {tripId} = useLocalSearchParams()
  const handleSubmit = async () => {
    
    const res = await addPackingItemsAPI(tripId, packingItem)
    setRefreshing(true)
    setPackingItem({itemName:"", quantity:""})
    setVisible(!visible)
    
  }

  return (
    <View className='w-full bg-white rounded-2xl'>
    <View className='w-full flex-row  justify-between p-4'>
        <Text className='text-lg font-bold'>Add Packing</Text>
        <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
            <Ionicons name='close' size={25}/>
        </TouchableWithoutFeedback>
    </View>
    <View className='p-3 pt-0'>
        <CustomInput value={packingItem.itemName} handleChange={(e)=>setPackingItem(prev=>({...prev, itemName:e }))} placeholder={'Item Name'} />
        <CustomInput value={packingItem.quantity!} isNum  handleChange={(e)=>setPackingItem(prev=>({...prev, quantity:e}))} placeholder={'Quantity'} />
        <CustomButton classes='' title='Add' pressFunction={handleSubmit} />
    </View>
</View>
  )
}

export default AddPacking