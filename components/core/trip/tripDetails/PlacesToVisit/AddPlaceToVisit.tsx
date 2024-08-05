import { View, Text, Pressable, TouchableWithoutFeedbackBase, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '@/components/common/CustomInput'
import CustomButton from '@/components/common/CustomButton'
import RNPickerSelect from 'react-native-picker-select'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { Ionicons } from '@expo/vector-icons'
import generateDateArray from '@/Utils/generateDateArray'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
import { addPlaceAPI } from '@/Services/Operations/TripAPI'
import { useLocalSearchParams } from 'expo-router'
import { setTripDetails } from '@/Redux/Reducers/tripSlice'

const AddPlaceToVisit = ({ setVisible, visible }) => {
    const {tripId} = useLocalSearchParams()
    const dispatch = useDispatch()
    const [timePickerVisible, setTimePickerVisible] = useState(false)
    const tripDetails = useSelector(state => state.trip.trip)
    const totalDays = generateDateArray(tripDetails?.date?.startDate, tripDetails?.date?.totalDays)
    const [data, setData] = useState({location: null, day:null, place:"", time:"00:00", notes:"" })
    const handleSend = async () => {
        console.log(data);
        if(!data?.location || !data?.day ){
            Toast.show({type:"error", text1:"Please enter necessary fields"})
        }
        // Add trip to the trip details
        const res = await addPlaceAPI(tripId, data);

        if(res.success){
            dispatch(setTripDetails(tripId))
            Toast.show({type:'success', text1:"Place added"})
            setData({location: null, day:null, place:"", time:"00:00", notes:"" })
            setVisible(false)
        }
        console.log(res);
        
    }

    return (
        <View className='w-full bg-white rounded-2xl'>
            <DateTimePicker mode='time' isVisible={timePickerVisible} onCancel={() => setTimePickerVisible(!timePickerVisible)} onConfirm={(time) => { setData(prev=>({...prev, time:time.toLocaleTimeString()})); setTimePickerVisible(!timePickerVisible) }} />
            <View className='w-full flex-row justify-between p-4'>
            <Text className='text-lg font-bold'>Add Place To Visit</Text>
            <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
                    <Ionicons name='close' size={25}/>
                </TouchableWithoutFeedback>
            </View>
            <View className='p-3 pt-0'>
                {/* <CustomInput  placeholder={'Search'} /> */}
                <CustomInput  value={data?.place} handleChange={(e)=>setData(prev=>({...prev, place:e}))}  placeholder={'Place'} />
                <CustomInput  value={data?.location} handleChange={(e)=>setData(prev=>({...prev, location:e}))}  placeholder={'Location'} />
                <View className='flex-row '>
                    <TouchableWithoutFeedback onPress={() => setTimePickerVisible(!timePickerVisible)}>
                        <View className='border flex-grow justify-center items-center mr-1 rounded-2xl h-12 border-gray-200'>
                            <Text>{data?.time}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View className='border border-gray-200 flex-shrink-0 w-52 h-12 px-3 rounded-2xl justify-center items-center flex-grow-0 '>
                        <RNPickerSelect
                            onValueChange={(value) => setData(prev=>({...prev, day:value}))
                            }
                            placeholder={{ label: 'Day', inputLabel: 'Day' }}
                            items={totalDays.map(day=>({label:`Day ${day?.day} |${day?.date}|` , value: JSON.stringify(day)}))}

                        />
                    </View>
                </View>
                    <CustomInput value={data?.notes} handleChange={(e)=>setData(prev=>({...prev, notes:e}))} placeholder={'Notes...'}/>
                <CustomButton  classes='' title='Add Place' pressFunction={handleSend} />
            </View>
        </View>
    )
}

export default AddPlaceToVisit