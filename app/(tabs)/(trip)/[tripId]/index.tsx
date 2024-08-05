import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import CustomTabs from '@/components/common/CustomTabs'
import Chats from '@/components/core/trip/tripDetails/Chats'
import Info from '@/components/core/trip/tripDetails/Info'
import PackingList from '@/components/core/trip/tripDetails/PackingList'
import Header from '@/components/core/trip/tripDetails/Header'
import PlacesToVisit from '@/components/core/trip/tripDetails/PlacesToVisit'
import Budget from '@/components/core/trip/tripDetails/Budget'
import { setTripDetails } from '@/Redux/Reducers/tripSlice'
import { useDispatch } from 'react-redux'

const index = () => {
    const { tripId } = useLocalSearchParams()
    const tabs = [
        {
            name: "Trip Details",
            component: <Info />
        },
        {
            name: "Places",
            component: <PlacesToVisit />
        },
        {
            name: "Budget",
            component: <Budget />
        },
        {
            name: "Chats",
            component: <Chats />
        },
        {
            name: "Packing List",
            component: <PackingList />
        }
    ]

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setTripDetails(tripId))
    },[])
    return (
        <SafeAreaView edges={['top']} style={{ flex: 1 }}>
            <View className='overflow-scroll bg-primary' style={{ flex: 1 }}>
                <CustomTabs header={<Header />} tabs={tabs} />
            </View>
        </SafeAreaView>
    )
}

export default index