import { View, Text, Modal, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'

const CustomModal = ({visible=false, withInput=false, children}:{children:any, withInput:boolean, visible: boolean}) => {

    const content  = withInput ? (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding': 'height'} className='justify-center items-center flex-1 px-3 bg-zinc-900/40'>
            {children}
        </KeyboardAvoidingView>
    )
    :
    (
        <View className='justify-center items-center flex-1 px-5 bg-zinc-900/40'>
            {children}
        </View>
    )
  return (
    <Modal
        visible={visible} 
        transparent
        animationType='fade'
        className='justify-center items-center '
    >
    {content}
</Modal>
  )
}

export default CustomModal