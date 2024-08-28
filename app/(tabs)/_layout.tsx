import { Redirect, Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useDispatch } from 'react-redux';
import { setAllTripsThunk } from '@/Redux/Reducers/tripSlice';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setAllTripsThunk())
  },[])
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(trip)" 
        options={{
          title: 'Trip',
          href: "(tabs)/(trip)",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'train' : 'train-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='(post)'
        options={{
          title: "Post",
          href: "(post)/"
        }}
        />

    </Tabs>
  );
}
