import { View, Text, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import ReviewCard from './ReviewCard'
import ReviewInput from './ReviewInput'
import { FlatList } from 'react-native'
import ReviewHeader from './ReviewHeader'

const Review = () => {
    const reviewData = {
        "reviews": [
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
            {
                "username": "Traveler1",
                "_id": "1",
                "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
                "rating": 4.5,
                "review": "Santorini is absolutely stunning! The sunsets are breathtaking and the food is delicious. Highly recommend visiting Oia.",
                "likes": 120
            },
            {
                "username": "Globetrotter2",
                "_id": "2",
                "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
                "rating": 5,
                "review": "An unforgettable experience. The views, the beaches, and the history all come together to make Santorini a must-visit destination.",
                "likes": 150
            },
            {
                "username": "Adventurer3",
                "_id": "3",
                "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
                "rating": 4,
                "review": "Great place for a romantic getaway. The wine tours and boat trips were particularly enjoyable. Will visit again!",
                "likes": 98
            },
            {
                "username": "Explorer4",
                "_id": "4",
                "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
                "rating": 4.2,
                "review": "Beautiful island with so much to offer. The local cuisine is fantastic and the hospitality is top-notch.",
                "likes": 110
            },
            {
                "username": "Nomad5",
                "_id": "5",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "rating": 4.8,
                "review": "Santorini exceeded all my expectations. The caldera views are something you have to see to believe.",
                "likes": 135
            },
        ]
    }

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    
    const fetchData = () =>{
        if(page*5 >= reviewData.reviews.length){
            setHasMore(false)
            return
        }
        if(hasMore){
            setTimeout(()=>{
                setPage(page+1)
            },500)
        }
    }
    const [reviews, setReviews] = useState(reviewData?.reviews)

    return (
        <View className='w-full bg-white'>
            <FlatList
            
            
                ListHeaderComponent={<ReviewHeader/>}
                data={reviews.slice(0, page*5)}
                renderItem={item => (
                    < ReviewCard reviewData={item.item}/>
                )}
                //api
                onEndReached={fetchData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    <View>
                        {
                            hasMore?
                            <Text>Loading...</Text>
                            :
                            <Text>No more reviews to load</Text>
                        }
                    </View>
                }
            />
        </View>
    )
}

export default Review