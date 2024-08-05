import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CustomView from '@/components/common/CustomView'
import Post from '@/components/Post'
import PostContainerHeader from '@/components/core/post/PostContainerHeader'
import { SafeAreaView } from 'react-native-safe-area-context'

const post = () => {
     const link1 = 'https://www.mistay.in/travel-blog/content/images/size/w2000/2020/05/cover-9.jpg'
     const link2 = 'https://www.mistay.in/travel-blog/content/images/size/w2000/2020/05/cover-10.jpg'
     const link3= "https://media.istockphoto.com/id/1218927124/photo/road-trip-travel-forest-sky-landscape-view-scene-background-nature-wallpaper.jpg?s=612x612&w=0&k=20&c=Pyrl6fm3D6aNCIrLHtr1ZT4SGCDc9mKn-O6hZkk0X_M="
     const link4 = "https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-cms-storage.s3.ap-south-1.amazonaws.com%2Fmeghalaya_tour_76dc911764.jpg&w=3840&q=50"
  return (
    <SafeAreaView edges={['top']} className='w-full' >
      <FlatList
        data={[{link:link1, liked:true},{ link:link2, liked:false}, {link:link3, liked:false}, {link:link4, liked:true}]}
        renderItem={({item}) => <Post imageUrl={item.link} liked={item.liked}/>}
        ListHeaderComponent={<PostContainerHeader/>}
        />
    </SafeAreaView>
  )
}

export default post