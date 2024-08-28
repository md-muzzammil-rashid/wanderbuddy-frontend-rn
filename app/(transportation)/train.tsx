import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import TrainHeader from '@/components/core/transportation/TrainHeader'
import TrainCard from '@/components/core/transportation/TrainCard'

const trains = () => {
  const [trainData, setTrainData] = useState([
    {
        "trainNumber": "18626",
        "departureTime": "06:15",
        "arrivalTime": "15:30",
        "trainName": "HTE PRNC EXP",
        "to": "PNBE",
        "from": "RNC",
        "duration": "9hr 15min",
        "type": [
            {
                "class": "2S",
                "available": "AVL 35",
                "price": "155"
            },
            {
                "class": "SL",
                "available": "AVL 10",
                "price": "250"
            },
            {
                "class": "CC",
                "available": "AVL 30",
                "price": "550"
            },
            {
                "class": "3A",
                "available": "AVL 15",
                "price": "680"
            },
            {
                "class": "2A",
                "available": "AVL 2",
                "price": "965"
            }
        ]
    },
    {
        "trainNumber": "12366",
        "departureTime": "14:25",
        "arrivalTime": "22:20",
        "trainName": "PNBE JANSHATBDI",
        "to": "PNBE",
        "from": "RNC",
        "duration": "7hr 55min",
        "type": [
            {
                "class": "2S",
                "available": "AVL 1081",
                "price": "195"
            },
            {
                "class": "CC",
                "available": "AVL 99",
                "price": "650"
            }
        ]
    },
    {
        "trainNumber": "22350",
        "departureTime": "16:15",
        "arrivalTime": "22:10",
        "trainName": "VANDE BHARAT EXP",
        "to": "PNBE",
        "from": "RNC",
        "duration": "5hr 55min",
        "type": [
            {
                "class": "CC",
                "available": "AVL 404",
                "price": "1175"
            },
            {
                "class": "EC",
                "available": "AVL 35",
                "price": "2110"
            }
        ]
    },
    {
        "trainNumber": "18624",
        "departureTime": "19:35",
        "arrivalTime": "06:20",
        "trainName": "HTE IPR EXP",
        "to": "PNBE",
        "from": "RNC",
        "duration": "10hr 45min",
        "type": [
            {
                "class": "SL",
                "available": "AVL 239",
                "price": "255"
            },
            {
                "class": "3E",
                "available": "AVL 38",
                "price": "635"
            },
            {
                "class": "3A",
                "available": "AVL 268",
                "price": "695"
            },
            {
                "class": "2A",
                "available": "AVL 40",
                "price": "985"
            },
            {
                "class": "1A",
                "available": "AVL 16",
                "price": "1645"
            }
        ]
    },
    {
        "trainNumber": "18622",
        "departureTime": "22:35",
        "arrivalTime": "13:15",
        "trainName": "PATALIPUTRA EXP",
        "to": "PNBE",
        "from": "RNC",
        "duration": "14hr 40min",
        "type": [
            {
                "class": "SL",
                "available": "AVL 349",
                "price": "320"
            },
            {
                "class": "3A",
                "available": "AVL 22",
                "price": "870"
            }
        ]
    }
])
  return (
    <SafeAreaView className=''>
      <FlatList
      ListHeaderComponent={
        <TrainHeader setTrainData={setTrainData}/>
      }
        data={trainData}
        renderItem={item=>
          <TrainCard 
            arrivalTime={item.item.arrivalTime}
            departureTime={item.item.departureTime}
            duration={item.item.duration}
            from={item.item.from}
            to={item.item.to}
            trainName={item.item.trainName}
            trainNumber={item.item.trainNumber}
            trainType={item.item.type}
            />
        }

      />
    </SafeAreaView>
  )
}

export default trains