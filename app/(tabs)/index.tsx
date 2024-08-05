import CustomTabs from '@/components/common/CustomTabs';
import Header from '@/components/core/dashboard/Header';
import Hotels from '@/components/core/dashboard/Hotels';
import Places from '@/components/core/dashboard/Places';
import Restaurants from '@/components/core/dashboard/Restaurants';
import Transportation from '@/components/core/dashboard/Transportation';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export default function HomeScreen() {
  const MyTabs = [
    {
      name: "Places",
      component: <Places />
    },
    {
      name: "Transportation",
      component: <Transportation />
    },
    {
      name: "Hotels",
      component: <Hotels />
    },
    {
      name: "Restaurants",
      component: <Restaurants />
    }
  ]
  return (
    <SafeAreaView edges={['top']} style={styles.container} className='bg-primary'>
      

      <View style={styles.container} className='overflow-scroll'>
        <CustomTabs header={<Header/>} tabs={MyTabs} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:'100%'

  },

})