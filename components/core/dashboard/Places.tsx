import { View, Text,  } from 'react-native'
import React, { useEffect } from 'react'
import {  ScrollView } from 'react-native-collapsible-tab-view';
import PlaceCard from './Places/PlaceCard';
import { FlatList } from 'react-native';

const Places = () => {

  return (
    <ScrollView className=''>
      <View className='my-2'>
      <FlatList
                            data={[1, 2, 3, 4, 4,]}
                            horizontal
                            className='py-2'
                            showsHorizontalScrollIndicator={false}
                            renderItem={item => (
                                <PlaceCard />
                            )}
                        />
      {/* <FlatList
                            data={[1, 2, 3, 4, 4,]}
                            horizontal
                            className='py-2'
                            showsHorizontalScrollIndicator={false}
                            renderItem={item => (
                                <PlaceCard />
                            )}
                        /> */}
     
      </View>
    </ScrollView>
  )
}

export default Places