import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostHeader from '@/components/core/post/PostHeader'
import { getCommentsAPI, getPostDetailsAPI } from '@/Services/Operations/PostAPI'
import PostImage from '@/components/core/post/PostImage'
import LottieView from 'lottie-react-native'
import loadingAnimation from '@/assets/animation/loading.json'
import CustomInputWithSend from '@/components/common/CustomInputWithSend'
import PostFooter from '@/components/core/post/PostFooter'
import CommentBox from '@/components/core/post/CommentBox'

const index = () => {
    const [loading, setLoading] = useState(true)
    const { postId } = useLocalSearchParams()
    const [comments, setComments] = useState([])
    const [postData, setPostData] = useState()

    const getPostDetails = async () => {
        console.log(postId);
        setLoading(true)
        const { data } = await getPostDetailsAPI(postId)
        // const res = await axios.get("http://localhost:5050/api/v1/post/get-post?postId="+postId)
        const allComments = await getCommentsAPI(postId);
        console.log(allComments);
        setComments(allComments.data)
        

        setPostData(data)
        setLoading(false)
    }
    useEffect(() => {
        getPostDetails()
    }, [])
    return (
        <SafeAreaView className='  pb-0' edges={['top']}>
            {
                loading ?
                    // <Text>Loading...</Text>
                    <View className='w-full h-full m-4 justify-center items-center'>
                        <LottieView source={loadingAnimation} loop autoPlay style={{ width: 256, height: 82 }} />
                    </View>
                    :
                    <View className='h-full justify-between'>
                        <FlatList
                            ListHeaderComponent={<View className='max-w-[100vw] bg-white px-4 py-2 flex-col '>
                                <PostHeader location={postData?.location} />
                                <PostImage imageUrl={postData?.photo} />
                                <PostFooter id={postData?._id} liked={postData?.like} totalLikes={postData?.totalLikes} caption={postData?.caption} hideComment />
                                <Text className='font-pbold text-xl'>Comments ({comments.length})</Text>
                            </View>}

                            data={comments}
                            // contentContainerStyle
                            renderItem={(item)=>(
                                <CommentBox comment={item?.item?.content} avatar={item?.item?.userId?.profile?.avatar} userId={item?.item?.userId?._id} username={item?.item?.userId?.username} />
                            )}

                        />
                        <View className='px-1'>
                            <CustomInputWithSend placeholder={'Write here...'} />
                        </View>
                    </View>
            }

        </SafeAreaView>
    )
}

export default index