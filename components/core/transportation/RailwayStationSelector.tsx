import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import railwayStations from '@/Utils/railwayStationsList.json'

const RailwayStationSelector = ({placeholder, inputData, setInputData, type, zIndex}) => {
    const [railwayStationList, setRailwayStationList] = useState(railwayStations.slice(0,5))
    const [searchInput, setSearchInput] = useState("")
    
    
    const filterSearchData = () => {
        console.log(searchInput);
        setInputData(prev=>({...prev, [type]:""}))
        const len = railwayStations.length
        const result = [];
        setRailwayStationList([])
        for(let i = 0; i< len; i++){
            if(railwayStations[i].stnCode.toLowerCase().includes(searchInput.toLowerCase()) || railwayStations[i].stnName.toLowerCase().includes(searchInput.toLowerCase()) || railwayStations[i].stnCity.toLowerCase().includes(searchInput.toLowerCase())
            ){
                result.push(railwayStations[i])
            }
            if(result.length>5)break;
        }
        setRailwayStationList(result)
        
    }

  return (
    <KeyboardAvoidingView className={`${type=="source"?"z-50":"z-40"}`} behavior={Platform.OS === 'ios'? 'padding': 'height'} >
    <View className='py-3 relative '>
        <View className='border  border-gray-400 z-10 rounded-xl justify-center  h-12'>
            <TextInput onChange={filterSearchData} onChangeText={e=>setSearchInput(e)} className='pl-5 z-10' value={searchInput || inputData[type] } placeholder={placeholder}  />
        {
            searchInput &&
            <View style={{zIndex:1000, elevation:100}} className='bg-white absolute  top-12 w-full border border-gray-400'>
            {
                railwayStationList.slice(0,5).map(railwayStation=>
                    <TouchableOpacity 
                    key={railwayStation.woeid} 
                    onPress={() => {
                        setInputData(prev => ({ ...prev, [type]: railwayStation.stnCode }));
                        setSearchInput("");
                    }} 
                    className='p-5 border z-[100000000] border-gray-200'
                >
                    <Text>{railwayStation?.stnName} | {railwayStation?.stnCode}</Text>
                    <Text>{railwayStation?.stnCity}</Text>
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

export default RailwayStationSelector