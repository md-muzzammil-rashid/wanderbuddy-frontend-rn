import React, { useEffect, useState } from 'react'
import TripCard from '@/components/core/trip/TripCard'
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native'
import TripHeader from '@/components/core/trip/TripHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/common/CustomButton'
import { router } from 'expo-router'
import { getTripsAPI } from '@/Services/Operations/TripAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTripsThunk, setTripDetails } from '@/Redux/Reducers/tripSlice'
import NoDataFound from '@/components/common/NoDataFound'

const trip = () => {
  const [refreshing, setRefreshing] = useState(false)
  const allTrips = useSelector(state=>state?.trip?.allTrips)
  const dispatch = useDispatch()
  const handleRefresh = () =>{
    setRefreshing(true)
    dispatch(setAllTripsThunk());
    setRefreshing(false)
  }
  useEffect(()=>{
    handleRefresh()
  },[refreshing])

  return (
    <SafeAreaView edges={['top'] } className='relative bg-primary' >
      <TouchableOpacity onPress={()=>router.push('(tabs)/(trip)/add-trip')} className='w-20 h-20 absolute z-50 justify-center items-center bg-btn rounded-full right-5 bottom-5' >
          <Text className='text-white font-pbold text-3xl'>+</Text>
      </TouchableOpacity>
      <FlatList
        refreshControl={<RefreshControl refreshing={false} onRefresh={handleRefresh} />}
        ListEmptyComponent={<NoDataFound/>}
        ListHeaderComponent={<TripHeader />}

        data={allTrips}
        renderItem={(data) =>
          <TouchableOpacity onPress={() => {
              dispatch(setTripDetails(data.item._id))
              router.push(`(tabs)/(trip)/`+data.item._id);
              }}>
            <TripCard 
            title={data?.item?.title} 
            destinationImage={data?.item?.destinationImage} 
            startDate={data?.item?.date?.startDate} 
            collaborator={data?.item?.collaborator} />
          </TouchableOpacity>
        }

      />
    </SafeAreaView>



  )
}

export default trip