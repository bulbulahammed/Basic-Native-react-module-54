import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import User from './components/User/User';


const App = () => {
  const [name, setName] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <ScrollView>
      <Text>Total friends: {users.length}</Text>
      {
        users.map(user => <User user={user}></User>)
      }
      <Text style={{ fontSize: 40 }}>{name}</Text>
      <View>
        <Image
          source={{
            uri: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/106277655_724161998412738_3458782117555910161_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3xmSwvhAr8AAX9wbE3q&_nc_ht=scontent.fdac31-1.fna&oh=1a655f2526a37a32e9d14715fd6a1421&oe=60A6BE0F',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => setName(text)}
        defaultValue=""
      />
    </ScrollView>
  );
}

export default App;
