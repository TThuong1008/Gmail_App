import React, {useState} from 'react';
import {View, FlatList, Text } from 'react-native';
import GmailItem from '../components/gmailItem';
import Input from '../components/input';
import { styleHome } from '../components/style';

const emails =[
  {
    id: '1',
    textIcon: 'A',
    color: 'purple',
    title:  'Hello',
    detail: 'good morning',
    time: '11:00 AM'
  },
  {
    id: '2',
    textIcon: 'B',
    color: 'green',
    title:  'Hello Hello',
    detail: 'Hom nay an gi?',
    time: '7:00 AM'
  },
  {
    id: '3',
    textIcon: 'M',
    color: 'orange',
    title:  'Happy Birthday',
    detail: 'Happy birthday hsfhg sjdfhsjjs',
    time: '9:23 AM'
  }
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredEmails = emails.filter(email =>
    email.title.toLowerCase().includes(searchText.toLowerCase())
   );
  
  const renderItem = ({item}) => (
    <GmailItem icon={item.textIcon} color={item.color} title={item.title} detail={item.detail} time={item.time} isStarred={item.isStarred}/>
  );


  return (
    <View style={styleHome.container}>
      <View style={styleHome.inputContainer}>
        <Input
          placeholder="メールを検索"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styleHome.bodyContainer}>
        <View style={styleHome.viewTextBody}>
          <Text style={styleHome.textBody}>受信トレイ</Text>
        </View>

        <FlatList
          data={emails}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </View>
    </View>
  );
}

