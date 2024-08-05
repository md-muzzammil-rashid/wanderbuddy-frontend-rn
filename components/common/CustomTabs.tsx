import { FlatList, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Tabs } from 'react-native-collapsible-tab-view'

import TabBar from './TabBar'
import PlaceCard from '../core/dashboard/Places/PlaceCard'
import Header from '../core/dashboard/Header'

const CustomTabs = ({ tabs, header }) => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const containerRef = useRef(null);

    const handleSetIndex = (newIndex: number) => {
        containerRef.current?.setIndex(newIndex);
    };

    return (
        <Tabs.Container
        
            ref={containerRef}
            containerStyle={{ paddingTop: 0, flex: 1, display: 'flex' }}
            tabBarHeight={200}
            revealHeaderOnScroll={true}
            renderHeader={() => {
                return (
                       header
                )
            }}
            headerContainerStyle={{ shadowOpacity: 0, elevation: 0 }}
            renderTabBar={(props) => (
                <TabBar
                    tabProps={props.tabProps}
                    tabNames={props.tabNames}
                    focusedIndex={focusedIndex}
                    onSetIndex={(index) => handleSetIndex(index)}
                />
            )}

            // headerHeight={10}
            lazy
            pagerProps={{
                onPageSelected: (event) => {
                    setFocusedIndex(event.nativeEvent.position);
                },
                removeClippedSubviews: true,
            }}
        >
            {
                tabs.map((tab, index) => (<Tabs.Tab key={index} name={tab?.name}>
                        {tab.component}
                </Tabs.Tab>))
            }
        </Tabs.Container>
    )
}

export default CustomTabs