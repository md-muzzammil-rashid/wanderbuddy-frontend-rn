import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

const CustomButton = ({title='Press Me', isLoading=false, pressFunction=undefined, classes='', color='bg-btn'}:{pressFunction:Function|undefined, title:string, isLoading:boolean, classes:string, color:string}) => {
  return (
    <TouchableOpacity onPress={()=>!isLoading && pressFunction()} disabled={isLoading} className={`${color} ${classes}py-4 shadow-md shadow-gray-400 my-2 justify-center items-center rounded-2xl `}>
        {
            isLoading?
            <ActivityIndicator />
            :
            <Text className='text-gray-100 font-semibold text-lg'>{title}</Text>
        }
    </TouchableOpacity>
  )
}

export default CustomButton