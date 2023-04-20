import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import FlatCard from "./components/FlatCard";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";
import WhatsApp from "./components/WhatsApp";

function App() {
  return (
    <SafeAreaView style={styles.globalColor}>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
        <ContactList />
        <ActionCard />
        <WhatsApp />
      </ScrollView>
    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create({
  globalColor: {
    backgroundColor: '#2C3433',
    color: '#f1f1f1'
  }

})