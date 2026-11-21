
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';





export default function App() {
  const[todos,setTodos] =useState([]);
  const [input , setInput] = useState('');

  const addTodo = () =>{
    if (input.trim() === '') return;
    setTodos([...todos,{id:Date.now().toString() ,text: input ,done:false}]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>My Todo-List</Text>
<Text>Total : {todos.length}</Text>

<View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 16}}>

<TextInput
  style={{ flex: 1, backgroundColor: '#eee', padding: 10, borderRadius: 8, marginRight: 8  }}
  placeholder="what needs doing"
  value={input}
  onChangeText={setInput}
  onSubmitEditing={addTodo}
/>
<Pressable onPress={addTodo} style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 8 }}>
  <Text style={{ color: '#fff', fontWeight: '600' }}>Add</Text>
</Pressable>

</View>

<FlatList style={{flex:1,width:'100%'}}
  data={todos}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={{ paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
      <Text>{item.text}</Text>
    </View>
  )}
  ListEmptyComponent={<Text>No tasks yet. Add one above</Text>}
/>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});
