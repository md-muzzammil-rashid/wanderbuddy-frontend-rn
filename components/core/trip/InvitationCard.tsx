import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { homeBackground } from '@/constants/Image'
import { respondToInvitationsAPI } from '@/Services/Operations/InvitationAPI'
import { useDispatch } from 'react-redux'
import { setAllTripsThunk } from '@/Redux/Reducers/tripSlice'

const InvitationCard = ({ invitationData, setRefreshing }) => {
    const dispatch = useDispatch()
    const [acceptResponse, setAcceptResponse] = useState({
        response: 'Accepted',
        invitationId: invitationData?._id,
    })
    const [rejectResponse, setRejectResponse] = useState({
        response: 'Rejected',
        invitationId: invitationData?._id,
    })
    interface responseData {
        response: string,
        invitationId: string,
    }
    const respondToInvitation = async (responseData: responseData) => {
        const res = await respondToInvitationsAPI(responseData)
          dispatch(setAllTripsThunk())
    }
    return (
        <View className='border border-gray-300 shadow-md mx-3 my-2 p-3 flex-row rounded-2xl bg-white '>
            <Image source={{uri:invitationData?.tripId?.destinationImage}} className='aspect-square w-14 h-14 rounded-full' alt='banner' />
            <View className=' px-3 flex-grow'>
                <Text className='font-bold text-xl '>{invitationData?.tripId?.title}</Text>
                <Text>invited by <Text className='capitalize'>{invitationData?.senderId?.profile?.displayName}</Text></Text>
                <View className=' flex-row text-white flex-grow gap-x-3 my-2 font-bold   '>
                    <TouchableOpacity
                    style={{}}
                        className='bg-blue-500 py-2 flex-1 flex-grow  rounded-lg'
                        onPress={() => respondToInvitation(acceptResponse)}
                    >
                        <Text className='text-white font-pbold text-center'>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className='bg-gray-500 py-2 flex-1 flex-grow rounded-lg'
                        onPress={() => respondToInvitation(rejectResponse)}
                    >
                        <Text className='text-white text-center font-pbold '>
                            Reject
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default InvitationCard