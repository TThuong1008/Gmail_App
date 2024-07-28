import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styleGmailItem } from './style';

const GmailItem = ({ icon, color, title, detail, time, isStarred }) => {
  return (
    <TouchableOpacity style={styleGmailItem.container}>
      <View style={[styleGmailItem.avatar, { backgroundColor: color }]}>
        <Text style={styleGmailItem.textAvatar}>{icon}</Text>
      </View>

      <View style={styleGmailItem.textContainer}>
        <View style={styleGmailItem.textLeft}>
          <Text style={styleGmailItem.text}>{title}</Text>
          <Text style={styleGmailItem.text}>{detail}</Text>
        </View>

        <View style={styleGmailItem.textRight}>
          <Text style={styleGmailItem.time}>{time}</Text>
          <Icon style={styleGmailItem.star} name={isStarred ? 'star' : 'star-outline'} size={20}/>
        </View>
      </View>
      
    </TouchableOpacity>
  );
};

export default GmailItem;
