import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { loginBackground } from '@/constants/Image'
import CustomButton from '@/components/common/CustomButton'
import CustomInput from '@/components/common/CustomInput'
import { router, useNavigation } from 'expo-router'
import { SignInAPI } from '@/Services/Operations/UserAPI'

const login = () => {
    const [credentials, setCredentials] = useState({usernameORemail:"", password:""});    
    const [errorMessage, setErrorMessage] = useState('')
    const [errorVisible, setErrorVisible] = useState(false)

    const loginFunction = async () => {
        // Call API to login
        const res = await SignInAPI(credentials)
        console.log("************");
        if(res.success == false){
            console.log('not success');
            
            setErrorMessage(res.message)
            setErrorVisible(true)
        }else{
            setErrorVisible(false)
            router.dismissAll();
            router.push('(tabs)')
        }
        console.log(res);
        console.log("************");
        
        
    }
    return (
        <KeyboardAvoidingView>
            <View className='relative h-full'>
                <Image className='h-72' resizeMode='cover' source={loginBackground} />
                <View className='absolute bg-primary top-80 p-5 pt-6 rounded-t-3xl h-full w-full'>
                    <Text className='w-full font-pblack text-2xl text-center'>Let's explore the world!</Text>
                    <Text className='text-secondary w-full font-psemibold text-center'>Plan and Travel</Text>
                    <View className=''>
                        <View className=''>
                            <Text className='text-center font-semibold text-red-600'>{errorVisible && errorMessage}</Text>
                        </View>
                        <CustomInput value={credentials.usernameORemail} handleChange={(e)=>setCredentials((prev)=>({...prev, usernameORemail:e}))} icon={'person'} placeholder={'Username or Email'} />
                        <CustomInput value={credentials.password} handleChange={(e)=>setCredentials((prev)=>({...prev, password:e}))} icon={'lock-closed'} placeholder={'password'} password/>
                        <CustomButton isLoading={false} pressFunction={loginFunction} title={'Log in'} />
                    </View>
                    <TouchableWithoutFeedback onPress={()=>router.push('(auth)/forgot-password')}>
                        <Text className='text-primary text-center font-psemibold'>
                            Forgot Password?
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default login