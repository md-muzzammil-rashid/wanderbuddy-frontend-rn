import React, { useState, useRef, useEffect } from 'react';
import { Image, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';

const PostImage = ({ imageUrl }) => {
  const [imageHeight, setImageHeight] = useState(0);
  const containerRef = useRef(null);

  const calculateImageHeight = (containerWidth) => {
    Image.getSize(imageUrl, (width, height) => {
      const aspectRatio = height / width;
      const newHeight = containerWidth * aspectRatio;
      setImageHeight(newHeight);
    });
  };
  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    calculateImageHeight(width);
  };


  return (
    <View  ref={containerRef} className='my-2 shadow-md shadow-gray-800' onLayout={handleLayout}>

      <Image
        source={{ uri: imageUrl }}
        className='rounded-3xl shadow-2xl'
        style={{ width: '100%', height: imageHeight }}
      />

    </View>
  );
};

export default PostImage;
