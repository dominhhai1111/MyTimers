import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import uuidv4 from 'uuid/v4';

export default class App extends React.Component {
  state = {
    timers: [
      {
        id: uuidv4(),
        title: "Mow the lawn",
        project: "House Chores",
        elapsed: "8986300",
        isRunning: true,
      },
      {
        id: uuidv4(),
        title: "Bake squash",
        project: "Kitchen Chores",
        elapsed: "3890985",
        isRunning: false,
      }
    ],
  };

  render() {
    const { timers } = this.state;

    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={true}/>

          {timers.map(({ title, project, id, elapsed, isRunning}) => (
            <EditableTimer 
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 appContainer: {
   flex: 1,
 },
 titleContainer: {
  paddingTop: 35,
  paddingBottom: 15,
  borderBottomWidth: 1,
  borderBottomColor: "#D6D7DA",
 },
 title: {
   fontSize: 18,
   fontWeight: 'bold',
   textAlign: 'center',
 },
 timerList: {
   paddingBottom: 15,
 },
});
