import { StatusBar } from "expo-status-bar";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {

  const[task,setTask] = useState();
  const[taskItems,setTaskItems]= useState([]);
 
  const handleAddTask =() => {
    Keyboard.dismiss();
    console.log(task)
    setTaskItems([...taskItems,task])
    setTask(null);

  }

  const completeTask =(index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item , index) => {
            return (
              <TouchableOpacity  key={index} onPress={() =>completeTask(index)}>
                 <Task  text={item}/>

              </TouchableOpacity>
            )
            
            })
          }
          {/* <Task text={"task1"} />
          <Task text={"task2"} /> */}
        </View>
      </View>
      <KeyboardAvoidingView
        behaviour = {Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={ "Write a task"}value={task} onChangeText={text => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text></View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    borderWidth:1,
    borderRadius:60,
    borderColor:'#C0C0C0',
    backgroundColor:'#fff'


  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#C0C0C0'

  },
  addText:{

  }


});
