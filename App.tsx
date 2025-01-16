import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import FlatCards from './components/FlatCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default App;