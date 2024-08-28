import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomView from '@/components/common/CustomView'
import Post from '@/components/Post'
import PostContainerHeader from '@/components/core/post/PostContainerHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAllPostsAPI } from '@/Services/Operations/PostAPI'

const post = () => {
     const [postsData, setPostsData] = useState([])
     const [refreshing, setRefreshing] = useState<boolean>(false)
     const [page, setPage] = useState(1)
     const getAllPosts = async () => {
      console.log("making api calls");
      
        const res = await getAllPostsAPI(page, 5);
        console.log(res);
        
        if(res.data){
          setPostsData(res.data)
        }
        setRefreshing(false)
     }

     useEffect(()=>{
        getAllPosts();
     },[])
  return (
    <SafeAreaView edges={['top']} className='w-full' >
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={()=>getAllPosts()} />}
        data={postsData}
        renderItem={({item}) => 
        <Post 
        key={item._id}
          caption={item.caption} 
          imageUrl={item.photo} 
          location={item.location} 
          liked={item.like}
          id={item._id}
          totalLikes={item.totalLikes}
          />}
        ListHeaderComponent={<PostContainerHeader/>}
        />
    </SafeAreaView>
  )
}

export default post