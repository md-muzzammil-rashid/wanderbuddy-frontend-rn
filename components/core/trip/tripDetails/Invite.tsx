import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '@/components/common/CustomInput'
import { Ionicons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import { addCompanionsAPI } from '@/Services/Operations/InvitationAPI'
import { useLocalSearchParams } from 'expo-router'

const Invite = ({visible, setVisible}) => {
    const [username, setUsername] = useState('')
    const {tripId} = useLocalSearchParams()
    const handleSendRequest = async () =>{
        // Send request to API
        const res = await addCompanionsAPI({username}, tripId )

        if(res.statusCode >= 200 && res.statusCode <300){ 
        Toast.show({
            text1: res?.message,
            type: 'success',
            });
        }else if(res.statusCode >= 400){
            Toast.show({
                text1: res?.message,
                type: 'error',
            })
        }
        setVisible(false)
    }
  return (
    <View className='bg-white w-full rounded-xl p-4 pt-1'>
                <View className=' flex-row justify-between w-full'>
                    <Text className='text-xl font-bold p-2'>Invite</Text>
                    <TouchableWithoutFeedback onPress={()=>setVisible(!visible)} >
                        <View className='p-2'>
                        <Ionicons name='close' size={25}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <Text>Invite your friends to join your trip. They will receive an invitation.</Text>

                    <CustomInput value={username} handleChange={(e)=>setUsername(e)} placeholder={'Username'}/>

                    <TouchableOpacity  className='mt-4 justify-center bg-blue-500 text-white font-pbold p-3 rounded-lg' onPress={handleSendRequest}>
                        <Text className='text-center text-white font-bold text-lg'>Invite</Text>
                    </TouchableOpacity>
                </View>
            </View>
  )
}

export default Invite