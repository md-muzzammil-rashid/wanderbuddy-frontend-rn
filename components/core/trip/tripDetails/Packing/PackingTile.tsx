import { View, Text, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { editPackingItemAPI } from '@/Services/Operations/TripAPI'


const PackingTile = ({ item, setPackingItems }: { item: { itemId:string, itemName: string, quantity: number, checked: boolean } }) => {
  const [editable, setEditable] = useState(false)
  const [packingItem, setPackingItem] = useState(item)
  const [toggle, setToggle] = useState(1)

  const handleToggleChange = async (e) => {
   console.log('jandle toggle');
   const res = await editPackingItemAPI(item.itemId, {...packingItem, checked:!packingItem.checked})
   setPackingItem(prev=>({...prev, checked:!prev.checked}))
     console.log("resoince: ", res);
     
  }

const updateItem = async() =>{
    
    await editPackingItemAPI(packingItem.itemId, packingItem)
}

const handleEdit = async() =>{
  if(editable){
    console.log('edit in progress');
    
    await editPackingItemAPI(packingItem.itemId, packingItem)
    setEditable(false)
    console.log('item updated');
    return;
  }
  setEditable(true)
}

const handleDelete = async () => {
  console.log('in handleDelete');
  
  setPackingItems(prev=> prev.itemId !== item.itemId)
}

useEffect(()=>{
  if(toggle >= 1){
  updateItem();
  console.log('itemUpdated');}
  
},[toggle])

  return (
    <View className='bg-white flex-row my-2 -z-0 items-center mx-4 rounded-2xl px-5 py-3'>
      <View className='w-12 justify-center '>
        <Ionicons size={20} color={editable ? 'rgb(66,204,62fg)' : 'black'} onPress={handleEdit} name={!editable ? 'pencil-outline' : 'save'} />
      </View>
      <TextInput editable={editable} onChangeText={(e)=>setPackingItem(prev=>({...prev, itemName:e}))} className={`${packingItem.checked && 'line-through text-secondary/80 '} flex-grow text-lg font-psemibold`}>{packingItem.itemName}</TextInput>
      <View className=' max-w-12  justify-center items-center flex-row'>
        <View className=' w-10'>
          <TextInput editable={editable} onChangeText={(e)=>setPackingItem(prev=>({...prev, quantity:e}))} inputMode='numeric' className={`${packingItem.checked && 'line-through text-secondary/80 '} flex-grow text-lg font-psemibold`}>{packingItem.quantity}</TextInput>
        </View>
        {
          editable ?
            <View className='w-[46]'>
              <Ionicons onPress={handleDelete} size={20} name='trash-bin' color={'red'} />
            </View>
            :
            <ToggleSwitch onToggle={handleToggleChange} isOn={packingItem.checked} size='medium' />
        }
      </View>
    </View>
  )
}

export default PackingTile