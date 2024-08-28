import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '@/components/common/CustomInput'
import CustomButton from '@/components/common/CustomButton'
import RailwayStationSelector from './RailwayStationSelector'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { getTrainsAPI } from '@/Services/Operations/TransportationAPI'

const TrainHeader = ({setTrainData}) => {
    const [inputData, setInputData] = useState({source:"", destination:"", date:""})
    const [datePickerOpen, setDatePickerOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const getTrainsData = async () => {
        if(inputData.date.trim()==="" || inputData.source.trim()=="" || inputData.destination.trim()=="" ){
            Toast.show({text1:"All Fields are required", type:'error'})
            return;
        }
        setLoading(true)
        const res = await getTrainsAPI(inputData.source, inputData.destination, inputData.date)
        console.log(res.data);
        setTrainData(res?.data?.trains)
        setLoading(false)
        
    }
  return (
    <View className='relative pb-8 '>
        <View className='bg-blue-950 h-64 absolute top-0 left-0 w-full '>

        </View>
        <Text className='text-white text-4xl p-5 font-pblack w-2/3'>
            Search Your Train
        </Text>
        <View className='mx-6 bg-white gap-y-3  rounded-3xl p-3'>
        <DateTimePicker isVisible={datePickerOpen} onCancel={()=>setDatePickerOpen(false)} onConfirm={(date)=>{setInputData(prev=>({...prev, 
                date:date.toISOString().split("T")[0]}));setDatePickerOpen(false)}
                }/> 
            <RailwayStationSelector zIndex={1} type={'source'} placeholder={"From"}
                inputData={inputData} setInputData={setInputData} />
            <RailwayStationSelector zIndex={1} type={'destination'} placeholder={"To"}
                inputData={inputData} setInputData={setInputData} />
                   <TouchableOpacity onPress={()=>setDatePickerOpen(!datePickerOpen)} className='border border-gray-400 justify-center pl-4 -z-10 rounded-2xl h-12'>
                    <Text>{inputData?.date || "Select Date"}</Text>
                </TouchableOpacity>
            <CustomButton pressFunction={getTrainsData} color='bg-emerald-500' title='Search' isLoading={loading}/>
        </View>
    </View>
  )
}

export default TrainHeader