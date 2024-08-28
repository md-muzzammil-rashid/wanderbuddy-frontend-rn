import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Toast from 'react-native-toast-message'
import { TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native'
import CustomInput from '@/components/common/CustomInput'
import { Ionicons } from '@expo/vector-icons'
import CustomButton from '@/components/common/CustomButton'
import * as DocumentPicker from 'expo-document-picker'
import { router } from 'expo-router'
import { createPostAPI } from '@/Services/Operations/PostAPI'

const AddPost = () => {
    const [image, setImage] = useState()
    const dispatch = useDispatch()
    const [data, setData] = useState({caption:"", location:""})
    const [loading, setLoading] = useState(false)
    const openPicker = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: ['image/*']
        })
        setImage(result.assets[0])

        if (result.canceled) {
            console.log('Cancelled');
            return
        }
    }

    const handleSubmit = async () => {
        //Validate the form data
        
        if([ data.caption, data.location].some(field=>field.trim() == "")){
            Toast.show({type:"error", text1: "Please fill all required fields"})
            return ;
        }
        console.log("In handle submit");

        if(!image){
            Toast.show({type:"error", text1: "Please select image"})
            return ;
        }
        
        setLoading(true)
        //  Send request to API
        let formData = new FormData();
        formData.append('caption', data.caption);
        formData.append('location', data.location);
        formData.append('postImage', image)
    
        
        //FIXME:media is not uploading in remote device 

        const res = await createPostAPI(formData);
        console.log(res);
        
        //After successful submission reset data
        setImage(null)
        setData({caption:"", location:""})
        setLoading(false)
        console.log(formData);
        // on Success
        Toast.show({type:'success', text1:"Post added"})
        router.back()
        
    }

    return (
        <SafeAreaView className='p-3 h-full' >

            <KeyboardAvoidingView className='p-3 h-full relative'>

                    {/* title destination location from to */}
                    <CustomInput placeholder={'Caption'} value={data.caption} handleChange={(e)=>setData(p=>({...p, caption:e}))}/>
                    <CustomInput placeholder={'Location'} value={data.location}  handleChange={(e)=>setData(p=>({...p, location:e}))}/>
                    <View>
                        {
                            image ?
                                <>
                                    <TouchableOpacity className='border my-4 border-gray-400 bg-btn p-2 rounded-2xl w-24 juc' onPress={openPicker}>
                                        <Text className='text-white font-pbold text-center'>Change</Text>
                                    </TouchableOpacity>
                                    <Image className='w-full h-80' resizeMode='contain' source={image} />
                                </>
                                :
                                <TouchableWithoutFeedback onPress={openPicker} >
                                    <View className='bg-gray-400 my-4 h-80 rounded-2xl justify-center items-center '>
                                        <Ionicons name='image' size={94} />
                                        <Text className='text-black font-pbold'>Tap to Add Image</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                        }
                    </View>
                    <View className='absolute bottom-0 w-full ml-3 left-0'>
                    <CustomButton classes=''   pressFunction={()=>!loading && handleSubmit()} title={'Add Post'} isLoading={loading} />
                    </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AddPost