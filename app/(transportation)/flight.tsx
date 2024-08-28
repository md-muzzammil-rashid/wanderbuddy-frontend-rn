import { View, Text, ScrollView,Image, SafeAreaView, ImageBackground, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { worldmap } from '@/constants/Image'
import CustomButton from '@/components/common/CustomButton'
import DateTimePicker from 'react-native-modal-datetime-picker'
import FlightSelector from '@/components/core/transportation/FlightSelector'
import { getFlightsAPI } from "@/Services/Operations/TransportationAPI";
import Toast from 'react-native-toast-message'
import FlightCards from '@/components/core/transportation/FlightCards'

const Flight = () => {

    const dummydata = [{"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/AI.png?crop=false&width=108&height=92&fallback=default1.png&_v=18d6ba2bd1a6b89120361f37345483d6", "airlineName": "Air India", "arrivalTime": "11:35 pm", "departureTime": "9:20 pm", "flightDuration": "2h 15m", "price": 57}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/IX.png?crop=false&width=108&height=92&fallback=default3.png&_v=054daf97e55a93d6aa962b4f57741527", "airlineName": "Air India Express", "arrivalTime": "11:25 pm", "departureTime": "8:55 pm", "flightDuration": "2h 30m", "price": 45}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/6E.png?crop=false&width=108&height=92&fallback=default1.png&_v=9d74e28098b1f027dfed38964910a11a", "airlineName": "IndiGo", "arrivalTime": "9:25 pm", "departureTime": "7:15 pm", "flightDuration": "2h 10m", "price": 50}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/SG.png?crop=false&width=108&height=92&fallback=default2.png&_v=3da8d272924a5f722a93758b306e8880", "airlineName": "SpiceJet", "arrivalTime": "10:00 pm", "departureTime": "7:55 pm", "flightDuration": "2h 05m", "price": 51}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/6E.png?crop=false&width=108&height=92&fallback=default1.png&_v=9d74e28098b1f027dfed38964910a11a", "airlineName": "IndiGo", "arrivalTime": "8:30 pm", "departureTime": "6:15 pm", "flightDuration": "2h 15m", "price": 50}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/UK.png?crop=false&width=108&height=92&fallback=default2.png&_v=4df5e99c4bfd9ca4fdc35de6aee63d74", "airlineName": "Vistara", "arrivalTime": "11:10 am", "departureTime": "8:55 am", "flightDuration": "2h 15m", "price": 52}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/SG.png?crop=false&width=108&height=92&fallback=default2.png&_v=3da8d272924a5f722a93758b306e8880", "airlineName": "SpiceJet", "arrivalTime": "8:20 am", "departureTime": "6:10 am", "flightDuration": "2h 10m", "price": 51}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/6E.png?crop=false&width=108&height=92&fallback=default1.png&_v=9d74e28098b1f027dfed38964910a11a", "airlineName": "IndiGo", "arrivalTime": "10:20 pm", "departureTime": "8:00 pm", "flightDuration": "2h 20m", "price": 50}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/UK.png?crop=false&width=108&height=92&fallback=default2.png&_v=4df5e99c4bfd9ca4fdc35de6aee63d74", "airlineName": "Vistara", "arrivalTime": "10:00 pm", "departureTime": "7:45 pm", "flightDuration": "2h 15m", "price": 52}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/SG.png?crop=false&width=108&height=92&fallback=default2.png&_v=3da8d272924a5f722a93758b306e8880", "airlineName": "SpiceJet", "arrivalTime": "10:00 pm", "departureTime": "7:55 pm", "flightDuration": "2h 05m", "price": 54}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/6E.png?crop=false&width=108&height=92&fallback=default1.png&_v=9d74e28098b1f027dfed38964910a11a", "airlineName": "IndiGo", "arrivalTime": "8:55 am", "departureTime": "6:55 am", "flightDuration": "2h 00m", "price": 54}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/SG.png?crop=false&width=108&height=92&fallback=default2.png&_v=3da8d272924a5f722a93758b306e8880", "airlineName": "SpiceJet", "arrivalTime": "10:30 pm", "departureTime": "8:15 pm", "flightDuration": "2h 15m", "price": 52}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/6E.png?crop=false&width=108&height=92&fallback=default1.png&_v=9d74e28098b1f027dfed38964910a11a", "airlineName": "IndiGo", "arrivalTime": "12:15 pm", "departureTime": "10:00 am", "flightDuration": "2h 15m", "price": 52}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/UK.png?crop=false&width=108&height=92&fallback=default2.png&_v=4df5e99c4bfd9ca4fdc35de6aee63d74", "airlineName": "Vistara", "arrivalTime": "9:45 am", "departureTime": "7:30 am", "flightDuration": "2h 15m", "price": 53}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/SG.png?crop=false&width=108&height=92&fallback=default2.png&_v=3da8d272924a5f722a93758b306e8880", "airlineName": "SpiceJet", "arrivalTime": "10:30 pm", "departureTime": "8:15 pm", "flightDuration": "2h 15m", "price": 53}, {"airlineLogo": "https://content.r9cdn.net/rimg/provider-logos/airlines/v/I5.png?crop=false&width=108&height=92&fallback=default1.png&_v=054daf97e55a93d6aa962b4f57741527", "airlineName": "Air India Express", "arrivalTime": "11:25 pm", "departureTime": "8:55 pm", "flightDuration": "2h 30m", "price": 51}]
    const [inputData, setInputData] = useState({source:"", destination:"", date:""})
    const [datePickerOpen, setDatePickerOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])

    const getFlights  = async () => {
        if(inputData.date.trim()==="" || inputData.source.trim()=="" || inputData.destination.trim()=="" ){
            Toast.show({text1:"All Fields are required", type:'error'})
            return;
        }
        setLoading(true)
        // Call API to get flights
        const res = await getFlightsAPI(inputData.source, inputData.destination, inputData.date)
        setResults(res?.data?.flights)
        console.log(res?.data?.flights);
        setLoading(false)
    }

  return (
      <SafeAreaView className='h-full'>
    <FlatList
    ListHeaderComponent={
        <View className='relative h-[450px]'>
            <View className='absolute top-0  right-0 w-full bg-cyan-400 h-64 overflow-hidden rounded-b-[30px]'>
            <ImageBackground source={worldmap} className='w-full  items-start  h-full -z-50' resizeMode='cover'>
            <Text className='font-pblack ml-12 mt-12 text-4xl w-2/3 text-white  z-50'>
                Search Your Flight 
            </Text>
            </ImageBackground>
        </View>
        <View className=' h-56  top-44 px-4 '>
            <View className='bg-white  rounded-3xl p-3 '>
                
                <DateTimePicker isVisible={datePickerOpen} onCancel={()=>setDatePickerOpen(false)} onConfirm={(date)=>{setInputData(prev=>({...prev, 
                date:date.toISOString().split("T")[0]}));setDatePickerOpen(false)}
                }/> 
                <FlightSelector zIndex={100000} type={'source'} placeholder={"From"} inputData={inputData} setInputData={setInputData}/>
                <FlightSelector zIndex={1} type={'destination'} placeholder={"To"}
                inputData={inputData} setInputData={setInputData}/>
                <TouchableOpacity onPress={()=>setDatePickerOpen(!datePickerOpen)} className='border border-gray-200 justify-center pl-4 -z-10 rounded-2xl h-12'>
                    <Text>{inputData?.date || "Select Date"}</Text>
                </TouchableOpacity>
   
                                    
                <CustomButton isLoading={loading} pressFunction={getFlights} title='Search'  color='bg-orange-500'/>
            </View>


        </View>
        </View>
    }
    data={results}
    renderItem={item=>
        <View className='w-full px-3 -z-50'>
        <FlightCards key={item.item.arrivalTime+item.item.departureTime+item.item.flightDuration+item.item.airlineLogo} flightData={item.item} />
        </View>
    }
    />
    </SafeAreaView>
  )
}

export default Flight