import { View, Text,  } from 'react-native'
import React, { useEffect } from 'react'
import {  ScrollView } from 'react-native-collapsible-tab-view';
import PlaceCard from './Places/PlaceCard';
import { FlatList } from 'react-native';
import topAttractions from '@/Utils/topAttactions.json'

const Places = () => {

  return (
    <ScrollView className=''>
      <View className='my-2'>
        <View>
          <Text className='font-pblack p-3 text-2xl'>
            Top Attractions
          </Text>
        </View>
      <FlatList
                            data={topAttractions}
                            horizontal
                            className='py-2'
                            showsHorizontalScrollIndicator={false}
                            renderItem={item => (
                                <PlaceCard hrefId={item.item.placeLink} image={item.item.placeImage} location={item.item.location} placename={item.item.placeName} rating={parseFloat(item.item.placeRating.slice(0,3))}  />
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