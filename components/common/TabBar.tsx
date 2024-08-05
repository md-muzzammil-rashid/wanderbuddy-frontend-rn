import React, { FC, useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  Dimensions,
} from "react-native";


interface TabBarProps {
  tabNames: string[];
  focusedIndex: number;
  onSetIndex: (index: number) => void;
  tabProps: any;
}

const TabBar: FC<TabBarProps> = ({ tabNames, focusedIndex, onSetIndex,tabProps }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const handleTabPress = (index: number) => {
    onSetIndex(index);
    
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      const itemWidth = 150;
      const itemCount = tabNames.length;
      const totalWidth = itemWidth * itemCount;

      const maxScrollX = Math.max(totalWidth - Dimensions.get("window").width, 0);
      const scrollToX = Math.min(
        focusedIndex * itemWidth - Dimensions.get("window").width / 2 + itemWidth / 2,
        maxScrollX
      );
      scrollViewRef.current.scrollTo({ x: scrollToX, animated: true });
    }
  }, [focusedIndex, tabNames]);

  return (
    <View style={{ width: "100%"}} className="h-full ">
      <ScrollView
      className="bg-primary border-none shadow-none"
        ref={scrollViewRef}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {tabNames.map((name, index) => {
  

          return (
            <TouchableOpacity
              key={index}
              className={`${index==focusedIndex?'bg-btn':"bg-white border-gray-300"}  mx-2`}
              activeOpacity={0.6}
              onPress={() => handleTabPress(index)}
              style={[
                styles.btnStyle,
              ]}
            >
              <Text
              className={`${index==focusedIndex?'text-gray-200 ':""} font-pbold`}
              >
                {name }
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    marginHorizontal: 6,
    marginVertical: 12,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: Platform.OS === "android" ? 1 : 0.5,
    paddingHorizontal: 20,
  },
});

export default TabBar;