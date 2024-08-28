import { View, Text, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import PostHeader from './core/post/PostHeader';
import PostImage from './core/post/PostImage';
import PostFooter from './core/post/PostFooter';
// import {} from "rnahi"

const Post = ({imageUrl, totalLikes, id, liked, location, caption}) => {


  return (
    <View className='max-w-[100vw] px-4 py-2 flex-col '>
      <PostHeader location={location}/>
      <PostImage imageUrl={imageUrl}/>
      <PostFooter totalLikes={totalLikes} id={id} liked={liked} caption={caption}/>
    </View>
  )
}

export default Post