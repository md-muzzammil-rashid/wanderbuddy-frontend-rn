import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from '@/components/common/CustomInput'
import CustomButton from '@/components/common/CustomButton'
import * as DocumentPicker from 'expo-document-picker'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { Ionicons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import { addTripAPI } from '@/Services/Operations/TripAPI'
import { useDispatch } from 'react-redux'
import { setAllTripsThunk } from '@/Redux/Reducers/tripSlice'

const AddTrip = () => {
    const [startDatePickerVisible, setStartDatePickerVisible] = useState(false)
    const [endDatePickerVisible, setEndDatePickerVisible] = useState(false)
    const [image, setImage] = useState()
    const dispatch = useDispatch()
    const [data, setData] = useState({title:"", startDate:"StartDate", endDate:"EndDate", destination:"", location:""})
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
        if([data.destination, data.title, data.location, data.endDate, data.startDate].some(field=>field.trim()=="")){
            Toast.show({type:"error", text1: "Please fill all required fields"})
            return ;
        }
        if(data.startDate==='StartDate' || data.endDate==='EndDate') {
            Toast.show({type:"error", text1: "Please select start and end date"})
            return ;
        }
        if(data.startDate>data.endDate){
            Toast.show({type:"error", text1: "Start date must be before end date"})
            return ;
        }
        if(!image){
            Toast.show({type:"error", text1: "Please select image"})
            return ;
        }
        
        //  Send request to API
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('startDate', data.startDate);
        formData.append('endDate', data.endDate);
        formData.append('destination', data.destination);
        formData.append('location', data.location);
        formData.append('destinationImage', JSON.stringify(image))
    
        
        //FIXME:media is not uploading in remote device 


        const res = await addTripAPI(formData);
        if(res?.success){
            dispatch(setAllTripsThunk());
            Toast.show({type:"success", text1: res?.message})
        }
        

        //After successful submission reset data
        setImage(null)
        setData({title:"", startDate:"StartDate", endDate:"endDate", destination:"", location:""})
    }

    return (
        <SafeAreaView >
            <DateTimePicker minimumDate={new Date()} onConfirm={(e) => {setData(prev=>({...prev, startDate: e.toISOString().split('T')[0]})); setStartDatePickerVisible(!startDatePickerVisible)}} isVisible={startDatePickerVisible} onCancel={() => setStartDatePickerVisible(false)} />

            <DateTimePicker minimumDate={new Date()} onConfirm={(e) => {setData(prev=>({...prev, endDate: e.toISOString().split('T')[0]})); setEndDatePickerVisible(!endDatePickerVisible)}} isVisible={endDatePickerVisible} onCancel={() => setEndDatePickerVisible(false)} />

            <KeyboardAvoidingView>
                <View className='m-3'>
                    <Text>
                        Plan A Trip
                    </Text>
                    {/* title destination location from to */}
                    <CustomInput placeholder={'Title'} value={data.title} handleChange={(e)=>setData(p=>({...p, title:e}))}/>
                    <CustomInput placeholder={'Destination'} value={data.destination}  handleChange={(e)=>setData(p=>({...p, destination:e}))} />
                    <CustomInput placeholder={'Location'} value={data.location}  handleChange={(e)=>setData(p=>({...p, location:e}))}/>
                    <View className='flex-row'>
                        <TouchableWithoutFeedback onPress={() => {
                            console.log('setted');
                            setStartDatePickerVisible(true)
                        }}>
                            <View className='bg-white flex-grow border-gray-200 border p-3 mr-1 rounded-2xl'>
                            <Text className='text-center'>{data.startDate}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => {
                            console.log('setted');
                            setEndDatePickerVisible(true)
                        }}>
                            <View className='bg-white flex-grow border-gray-200 border p-3 ml-1 rounded-2xl'>
                                <Text className='text-center'>{data.endDate}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
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
                    <CustomButton  pressFunction={handleSubmit} title={'Add Trip'} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AddTrip