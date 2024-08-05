import { View, Text, Image, Modal, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, {  useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CustomModal from '@/components/common/CustomModal'
import Invite from './Invite'

const Companions = ({companions}) => {
    const [inviteVisible, setInviteVisible] = useState(false)

  return (
    <View className='border border-cyan-500 m-2 bg-white rounded-2xl '>

        <View className='flex-row justify-between bg-cyan-500 p-2 rounded-t-2xl'>
            <Text className=' text-lg text-white font-pextrabold'>Companions</Text>
            <TouchableOpacity onPress={()=>setInviteVisible(!inviteVisible)} className='flex-row justify-center items-center gap-1' >
                <Ionicons name='mail-open' size={15} color={'white'}/>
                <Text className='text-white font-pbold text-base'>Invite</Text>
                <Ionicons name='person-add' size={15} color={'white'}/>
            </TouchableOpacity>
        </View>
      {
        companions?.map(companion=>(
            <View key={companion._id} className='p-2 border-t border-gray-200  flex-row items-center '>
                <Image source={{uri:companion.profile?.avatar}} className='h-8 w-8 rounded-full border '/>
                <Text className='ml-1 text-base font-pbold '>@{companion?.profile?.displayName}</Text>
            </View>
        ))
      }

      <CustomModal withInput visible={inviteVisible} >
            <Invite visible={inviteVisible} setVisible={setInviteVisible} />
      </CustomModal>
    </View>
  )
}

export default Companions