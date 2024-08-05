import { View, Text, FlatList, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import InvitationCard from '@/components/core/trip/InvitationCard'
import TripHeader from '@/components/core/trip/TripHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import {getInvitationsAPI} from '@/Services/Operations/InvitationAPI'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'
import NoDataFound from '@/components/common/NoDataFound'
const invitations = () => {
  const [invitations, setInvitations] = useState([]);
  const [refreshing, setRefreshing] = useState(false)
  const getAllInvitations = async () =>{
    const res = await getInvitationsAPI()
    setInvitations(res)
    setRefreshing(false)
    
  }

  useEffect(()=>{
    getAllInvitations()
  },[refreshing])
  return (
    <SafeAreaView edges={['top']} className='bg-primary h-full'>
        <FlatList
        refreshControl={<RefreshControl 
        refreshing={refreshing} 
        onRefresh={getAllInvitations} />}
        ListEmptyComponent={<NoDataFound/>}
            ListHeaderComponent={<TripHeader/>}
            data={invitations}
            renderItem={invitation => <InvitationCard setRefreshing={setRefreshing} 
            invitationData={invitation.item}/>}
        />
    </SafeAreaView>
  )
}

export default invitations