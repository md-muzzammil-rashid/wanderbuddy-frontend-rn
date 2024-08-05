import { View, Text } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View className='my-2'>
      <Text className='text-xl font-pbold'>About</Text>
      <View className='bg-gray-300 m-1 p-4 rounded-2xl '>
        <Text className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque sed ut itaque, nemo quis inventore! Aliquam temporibus dolorem, deleniti, quibusdam qui sit ipsam sapiente libero nemo expedita corporis recusandae error adipisci, ea ducimus aliquid aut laboriosam obcaecati. Dolores numquam vitae, facilis cum voluptatibus ducimus error blanditiis at culpa molestias?</Text>
      </View>
    </View>
  )
}

export default About