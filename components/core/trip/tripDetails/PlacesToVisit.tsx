import { View, Text, ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-collapsible-tab-view'
import PlacesToVIsitDate from './PlacesToVisit/PlacesToVIsitDate'
import PlaceCard from './PlacesToVisit/PlaceCard'
import { map, map2, onboarding3 } from '@/constants/Image'
import CustomModal from '@/components/common/CustomModal'
import AddPlaceToVisit from './PlacesToVisit/AddPlaceToVisit'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import NoDataFound from '@/components/common/NoDataFound'

const PlacesToVisit = () => {
  const [showAddPlaceToVisit, setShowAddPlaceToVisit] = useState(false)
  const placesToVisit = useSelector(state=>state?.trip?.filterDay)
  const {startDate, totalDays} = useSelector(state=>state?.trip?.trip?.date)
  return (
    <View className='relative bg-primary h-full'>
      <CustomModal visible={showAddPlaceToVisit} withInput>
        <AddPlaceToVisit visible={showAddPlaceToVisit} setVisible={setShowAddPlaceToVisit}/>
      </CustomModal>
        <View className=' absolute z-50  right-5 bottom-5 w-16 h-16'>
          <TouchableOpacity onPress={()=>setShowAddPlaceToVisit(!showAddPlaceToVisit)} className='bg-blue-600 rounded-full justify-center items-center h-16'>
            <Ionicons name='add' size={35}/>
          </TouchableOpacity>
        </View>
        <View className='absolute left-[10] h-screen  w-1'>
            <Text className='text-black text-xs font-pblack  '>||||||||||||||||||||||||||||||||||||||||||||||||||||||</Text>
        </View>
        
    <FlatList
        ListHeaderComponent={<PlacesToVIsitDate startDate={startDate} totalDays={totalDays} />}
        data={placesToVisit}
        ListEmptyComponent={<NoDataFound/>}
        renderItem={(item)=><PlaceCard data={item.item} index={item.index} />}
    />
    </View>
  )
}

export default PlacesToVisit