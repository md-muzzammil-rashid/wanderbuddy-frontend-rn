import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import airports from '@/Utils/airports.json'

const FlightSelector = ({placeholder, inputData, setInputData, type, zIndex}) => {
    const [airportList, setAirportList] = useState(airports.slice(0,5))
    const [searchInput, setSearchInput] = useState("")
    
    
    const filterSearchData = () => {
        console.log(searchInput);
        setInputData(prev=>({...prev, [type]:""}))
        const len = airports.length
        const result = [];
        setAirportList([])
        for(let i = 0; i< len; i++){
            if(airports[i].code.toLowerCase().includes(searchInput.toLowerCase()) || 
            airports[i].city.toLowerCase().includes(searchInput.toLowerCase()) || 
            airports[i].name.toLowerCase().includes(searchInput.toLowerCase()) ||
            airports[i].country.toLowerCase().includes(searchInput.toLowerCase())
            ){
                result.push(airports[i])
            }
            if(result.length>5)break;
        }
        setAirportList(result)
        
    }

  return (
    <KeyboardAvoidingView className={`${type=="source"?"z-50":"z-40"}`} behavior={Platform.OS === 'ios'? 'padding': 'height'} >
    <View className='py-1 relative '>
        <View className='border  border-gray-400 z-10 rounded-xl justify-center  h-12'>
            <TextInput onChange={filterSearchData} onChangeText={e=>setSearchInput(e)} className='pl-5 z-10' value={searchInput || inputData[type] } placeholder={placeholder}  />
        {
            searchInput &&
            <View style={{zIndex:1000, elevation:100}} className='bg-white absolute  top-12 w-full border border-gray-400'>
            {
                airportList.slice(0,5).map(airport=>
                    <TouchableOpacity 
                    key={airport.woeid} 
                    onPress={() => {
                        setInputData(prev => ({ ...prev, [type]: airport.code }));
                        setSearchInput("");
                    }} 
                    className='p-5 border z-[100000000] border-gray-200'
                >
                    <Text>{airport?.name}</Text>
                    <Text>{airport?.city}</Text>
                </TouchableOpacity>
                )
            }
        </View>
                }
        </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default FlightSelector