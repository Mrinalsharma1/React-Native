import React from "react";
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCard from "./components/FlatCard";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  )
}
export default App;